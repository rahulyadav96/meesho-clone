import { Typography, Button } from "@mui/material"
import { Navbar } from "../Navbar/Navbar"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
    const {auth, handleAuth}  = useContext(AuthContext)
    const [mob,setMob] = useState("");
    const handleCLick =()=>{
            if(mob.length!==10) alert("Wrong Mobile number");
            else{
                alert(Math.floor(100000 + Math.random() * 900000));
                handleAuth()
            }
    }
    return <>
        <Navbar />
        <div className="login-main-container" style={{ display: "relative", width: "100%", height: "100%", padding: "50px 0", backgroundColor: "pink" }}>
            <div className="login-box" style={{ display: "flex", flexDirection: "column", gap: "30px", boxSizing: "border-box", backgroundColor: "#ffffff", width: "40%", height: "500px", margin: "auto", padding: "50px" }}>
                <Typography variant="h6">Sign Up to view your profile   </Typography>
                <div className="input-box">
                    <span>Country</span>
                    <div className="" style={{ display: "flex", gap: "10px" }}>
                        <div className="country-code" style={{ borderBottom: "1px solid grey" }}>
                            <Typography variant="h6">IN +91</Typography>
                        </div>
                        <div className="phone-input" style={{ borderBottom: "1px solid grey", flexGrow: "2" }}>
                            <input type="number" placeholder="Phone Number" value={mob} onChange={(e)=>setMob(e.target.value)} style={{ width: "90%", border: "none", outline: "none" }} />
                           
                        </div>
                    </div>
                    <Button variant="contained" onClick = {handleCLick} style={{ width: "100%", marginTop: "20px", backgroundColor: "hotpink" }}>Send OTP</Button>
                </div>

                <div className="condition" style={{textAlign:"center"}}>
                    By continuing, you agree to Meesho’s <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
                    
                </div>
            </div>
        </div>
    </>
}