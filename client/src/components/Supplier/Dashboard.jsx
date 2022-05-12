import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./dashboard.scss";
import { SupplierHeader } from "./SupplierHeader";
import { useHistory } from "react-router-dom";
export const Dashboard = ()=>{
    const {supplier} = useContext(AuthContext);
    const history = useHistory();
    
    if(!supplier.auth) history.push("/supplierlogin")
    return <>
            <SupplierHeader />

            <div className="dashboad">
                
            </div>
    </>
}