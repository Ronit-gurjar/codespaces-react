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
                <li><a className="nav-links" href="/" onClick={this.handleClick}>Home</a></li>
                <li><Link className="nav-links" smooth to="/#about" activeClassName="selected"
  activeStyle={{ color: 'red' }} onClick={this.handleClick}>About</Link></li>
                <li><Link className="nav-links" smooth to="/#speakers" activeClassName="selected"
  activeStyle={{ color: 'red' }} onClick={this.handleClick}>Speakers</Link></li>
                <li><Link className="nav-links" smooth to="/#partners" activeClassName="selected"
  activeStyle={{ color: 'red' }} onClick={this.handleClick}>Partners</Link></li>
                <li><a className="nav-links" href="/#Team">Team</a></li>
                <li><Link className="nav-links" smooth to="/#footer" activeClassName="selected"
  activeStyle={{ color: 'red' }} onClick={this.handleClick}>Contact</Link></li>
            </ul>
            </nav>
        )
    }
}

export default Navbar;