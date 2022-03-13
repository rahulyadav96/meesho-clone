import "./menu.scss";
import {nanoid} from "nanoid"
export const Menu = ()=>{

    const menuItems = ["women ethnic",
                        "women western",
                        "jewellery & accessories",
                        "men",
                        "beauty & health",
                        "Bags & foorwear",
                        "home & kitchen",
                        "Kids",
                        "electronics"]
    return (
        <>
            <div id="menu">
                <div className="menu-list">
                    {menuItems.map(item=><div key={()=>nanoid(4)}><span>{item}</span></div>)}
                </div>
            </div>
        </>
    )
}