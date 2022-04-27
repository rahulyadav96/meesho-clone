import { Button, Input, Radio, Typography } from "@mui/material"
import { nanoid } from "nanoid";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
export const Address = ({handleAddress}) => {
    const history = useHistory();

    const [allAddress, setAllAddress] = useState([{
        id: nanoid(4),
        name: "Rahul",
        phone: "8577963932",
        address: "Sansarapur , Nathaipur Road, Near Sewala Mandir, Bhadohi, UttarPradesh - 221304"
    }])

    const handleClick = ()=>{
        history.push("/checkout/payment")
    }
    return (
        <>
            <div className="top-address" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h6">Select Delivery Address</Typography>
                <Button variant="outline">+ Add new address</Button>
            </div>
            <div className="address-container">
                {
                    allAddress?.map(address => <div className="address" onClick={()=>handleAddress(address)} key={()=>nanoid(4)} style={{boxSizing:"border-box", backgroundColor:"skyblue", padding:"10px", margin:"10px auto"}}>
                        <div className="address-top" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <Typography variant="h6" >{address.name}</Typography>
                           <RadioButtonCheckedIcon style={{color:"hotpink"}} />
                            
                        </div>

                        <p>{address.address}</p>
                        <Button variant="outline">EDIT</Button>
                        <div>
                            <Button variant="contained" onClick={handleClick} style={{backgroundColor:"hotpink", width:"100%"}}>Deliver to this address</Button>
                        </div>
                    </div>)
                }

            </div>

        </>
    )
} 