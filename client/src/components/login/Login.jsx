import { Typography, Button } from "@mui/material"
import { Navbar } from "../Navbar/Navbar"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import './login.scss';

export const Login = () => {
    const {auth, handleAuth}  = useContext(AuthContext)
    const [mob,setMob] = useState("");
    const [otp, setOtp] = useState("")
    const [otpStatus, setOtpStatus] = useState(false)
    const [sendOtp,setSendOtp] = useState("");
    const history = useHistory();
    const handleCLick =()=>{
            if(mob.length!==10) alert("Wrong Mobile number");
            else{
                 let sendOtp = Math.floor(100000 + Math.random() * 900000)
                alert(sendOtp);
                setSendOtp(sendOtp)
                setOtpStatus(true)
            }
    }

    const verifyOTP = ()=>{
        if(sendOtp == otp){
            alert("login success");
            handleAuth();
            history.push("/")
        }else alert("wrong otp")
    }

    return <>
        <Navbar />
        <div className="login-main-container" >
            <div className="login-box">
                <Typography variant="h6" className="login-title">{otpStatus?`Enter OTP send to ${mob}`:"Sign Up to view your profile" }  </Typography>
                <div className="input-box">
                    {
                        otpStatus?<>
                            <div className="otp-input">
                                <input type="text" name="otp" placeholder="Enter OTP  here" min = "6" max="6" value={otp}  maxLength="6" onChange={(e)=>setOtp(e.target.value)} />
                            </div>
                        <Button variant="contained" onClick = {verifyOTP} style={{ width: "100%", marginTop: "20px", backgroundColor: "hotpink" }}>verify</Button>
                            
                        </>:<>
                        <span>Country</span>
                        <div className="" style={{ display: "flex", gap: "10px" }}>
                            <div className="country-code" style={{ borderBottom: "1px solid grey" }}>
                                <Typography variant="h6" className="login-title">IN +91</Typography>
                            </div>
                            <div className="phone-input" style={{ borderBottom: "1px solid grey", flexGrow: "2" }}>
                                <input type="number" max="10" placeholder="Phone Number" value={mob} onChange={(e)=>setMob(e.target.value)} style={{ width: "90%", border: "none", outline: "none" }} />
                               
                            </div>
                        </div>
                        <Button variant="contained" onClick = {handleCLick} style={{ width: "100%", marginTop: "20px", backgroundColor: "hotpink" }}>Send OTP</Button>
                        
                        </>
                    }
                </div>

                <div className="condition" style={{textAlign:"center"}}>
                    By continuing, you agree to Meesho’s <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
                    
                </div>
            </div>
        </div>
    </>
}