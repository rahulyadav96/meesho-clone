import { Button, Typography } from "@mui/material";
import { useState } from "react";
import "./suplierlogin.scss";

export const SuplierLogin = () => {
    const [supplierData, setSupplierData] = useState({
        email:"",
        password:""
    })

    const handleChange = (e)=>{
        const { name,value} = e.target;
        setSupplierData({...supplierData,[name]:value});
    }
    return (
        <>
            <div id="supplier-container">
                <div className="left" >
                    <img alt="Meesho Logo" src="https://static.meeshosupply.com/supplier-new/meesho-logo-web.svg" ></img>
                </div>
                <div className="right">
                    <div className="login-box">
                        <form >
                            <Typography variant="h2" className="form-title">Login to your suplier panel</Typography>
                            <div className="eamil-field">
                                <input type="email" name="email" onChange={handleChange} value={supplierData.email} autoComplete="none"  placeholder="Email" />

                            </div>
                            <div className="passw-field">
                                <input type="password"  name="password" onChange={handleChange} value={supplierData.password} placeholder="Password" />
                            </div>
                            <div className="form-bottom">
                                    <span style={{color:"blue", cursor:"pointer", fontSize:"14px"}}>Forget password ?</span>

                                    <Button variant="contained" style={{backgroundImage:"linear-gradient(to right, #f64976, #ff85c0) !important"}}>Login</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}