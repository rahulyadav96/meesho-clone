import { Typography } from "@mui/material";
import "./suplierlogin.scss";

export const SuplierLogin = () => {
    return (
        <>
            <div id="supplier-container">
                <div className="left" >
                    <img alt="Meesho Logo" src="https://static.meeshosupply.com/supplier-new/meesho-logo-web.svg" class="sc-hMrMfs cQIYLB"></img>
                </div>
                <div className="right">
                    <div className="login-box">
                        <form >
                            <Typography variant="h2" className="form-title">Login to your suplier panel</Typography>
                            <div className="eamil-field">
                                <input type="email" placeholder="Email" name="email" />

                            </div>
                            <div className="passw-field">
                                <input type="password" placeholder="Password" />

                            </div>
                            <div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}