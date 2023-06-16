import "/workspaces/codespaces-react/src/components/Styles/Home.css"
import Navbar from '/workspaces/codespaces-react/src/components/Navbar.js';
import home from "/workspaces/codespaces-react/src/assets/backgroundimg1.jpg"
import About from '/workspaces/codespaces-react/src/components/About.js';
import Partners from '/workspaces/codespaces-react/src/components/Partners.js';
import Speakers from "./Speakers";

function Home(){
return(
    <>
    <Navbar />
    <div className="hero"  id="hero">
        <img className="backgroundimgblur" alt="hero-img" src={home}/>
    </div>
    <div className="hero-text">
        <h1><span className="spanred">TEDx</span> MIT Ujjain</h1>
        <p></p>
    </div>
    <About/>
    <Speakers/>
    <Partners/>
    </>
)
}

export default Home;