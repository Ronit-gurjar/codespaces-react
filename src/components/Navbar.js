import { Component } from "react";
import "./Styles/NavbarStyle.css"
import  {HashLink as Link} from "react-router-hash-link";
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
                {/*Add navigation links to different sections */}
                <li><Link className="nav-links" smooth to="#top" activeClassName="selected"
  activeStyle={{ color: 'red' }} onClick={this.handleClick}>Home</Link></li>
                <li><Link className="nav-links" smooth to="/#about" activeClassName="selected"
  activeStyle={{ color: 'red' }} onClick={this.handleClick}>About</Link></li>
                
                <li><a className="nav-links" href="#speakers">Speakers</a></li>
                <li><a className="nav-links" href="#partners">Partners</a></li>
                <li><a className="nav-links" href="/Team">Team</a></li>
                <li><a className="nav-links" href="#footer" onClick={this.handleClick}>Contact</a></li>
            </ul>
            </nav>
        )
    }
}

export default Navbar;