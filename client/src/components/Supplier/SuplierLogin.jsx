import { Button, Typography } from "@mui/material";
import { useContext, useState } from "react";
import {useHistory} from "react-router-dom"
import "./suplierlogin.scss";
import {AuthContext} from "../../context/AuthContext";
export const SuplierLogin = () => {
    const [supplierData, setSupplierData] = useState({
        email:"",
        password:""
    })

    const {supplier, handleSupplier} = useContext(AuthContext);

    const history = useHistory();

    const handleChange = (e)=>{
        const { name,value} = e.target;
        setSupplierData({...supplierData,[name]:value});
    }

    const handleSubmit = (e) =>{

        e.preventDefault();

        if(!supplierData.email || !supplierData.email.includes("@")) alert("please provide a valid email")
        else if(!supplierData.password || supplierData.password.length!==8) alert("Incorrect Password");
        else{

            console.log(supplierData)
            handleSupplier({name:"rahul"})
            history.push("/dashboard");
        }
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
                            <Typography variant="h2" className="form-title">Login to your supplier panel</Typography>
                            <div className="eamil-field">
                                <input type="email" name="email" onChange={handleChange} value={supplierData.email} autoComplete="none"  placeholder="Email" required={true} />

                            </div>
                            <div className="passw-field">
                                <input type="password"  name="password" onChange={handleChange} value={supplierData.password} placeholder="Password" required/>
                            </div>
                            <div className="form-bottom">
                                    <span style={{color:"blue", cursor:"pointer", fontSize:"14px"}}>Forget password ?</span>

                                    <Button variant="contained" type="submit" onClick={handleSubmit}>Login</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}