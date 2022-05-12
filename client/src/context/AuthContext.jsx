import {createContext, useState} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{

    const [auth, setAuth] = useState(false);
    const [supplier,setSupplier] = useState({
        auth:false,
        admin:""
    })
    const handleAuth = ()=>{
        setAuth(!auth);
    }

    const handleSupplier = (admin)=>{
        setSupplier({...supplier, auth:true, admin:admin})
    }

    const logoutSupplier = ()=>{
        setSupplier({auth:false, admin:""})
    }

    return <AuthContext.Provider value={{auth,supplier, handleSupplier,logoutSupplier, handleAuth}}>{children}</AuthContext.Provider>
}
