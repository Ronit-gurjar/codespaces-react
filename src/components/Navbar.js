import { Component } from "react";
import "./NavbarStyle.css"
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">TEDxMITUJJAIN</h1>
                <ul className="navbar-menu">
                {MenuItems.map((item,index) =>{
                    return(<li key={index}>
                        <a className={item.cName} href={item.url}>{item.title}</a>
                    </li>);
                })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;