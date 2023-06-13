import { Component } from "react";
import "./NavbarStyle.css"
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import logo from "/workspaces/codespaces-react/src/assets/logo-white.png"

class Navbar extends Component{
    state= {clicked : false};
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <img className="tedx-logo" src={logo} alt="logo" />

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
                    </i>
                </div>
            <ul className={this.state.clicked ? "navbar-menu active" : "navbar-menu"}>
                    {MenuItems.map((item, index) => {
                        return (<li key={index}>
                            <a className={item.cName} href={item.url}>{item.title}</a>
                        </li>);
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;