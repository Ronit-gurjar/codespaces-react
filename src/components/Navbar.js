import { Component } from "react";
import "./Styles/NavbarStyle.css"
import { Link } from "react-router-dom";
import  {HashLink} from "react-router-hash-link";
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
                <li><Link className="nav-links" to="/" onClick={this.handleClick}>Home</Link></li>
                <li><HashLink className="nav-links" smooth to="/#about" activeClassName="selected"
  activeStyle={{ color: 'red' }} onClick={this.handleClick}>About</HashLink></li>
                <li><HashLink className="nav-links" smooth to="/#speakers" activeClassName="selected"
  activeStyle={{ color: 'red' }} onClick={this.handleClick}>Speakers</HashLink></li>
                <li><HashLink className="nav-links" smooth to="/#partners" activeClassName="selected"
  activeStyle={{ color: 'red' }} onClick={this.handleClick}>Partners</HashLink></li>
                <li><Link className="nav-links" to="/Team"  onClick={this.handleClick}>Team</Link></li>
                <li><HashLink className="nav-links" smooth to="/#footer" activeClassName="selected"
  activeStyle={{ color: 'red' }} onClick={this.handleClick}>Contact</HashLink></li>
            </ul>
            </nav>
        )
    }
}

export default Navbar;