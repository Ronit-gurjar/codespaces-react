import "/workspaces/codespaces-react/src/components/Styles/Home.css"
import Navbar from '/workspaces/codespaces-react/src/components/Navbar.js';
import home from "/workspaces/codespaces-react/src/assets/redforest3.png"
import About from '/workspaces/codespaces-react/src/components/About.js';
import Partners from '/workspaces/codespaces-react/src/components/Partners.js';
import Speakers from "./Speakers";

function Home(){
return(
    <>
    <Navbar />
    <div className="hero"  id="hero">
        <img alt="hero-img" src={home}/>
    </div>
    <div className="hero-text">
        <h1>TEDx MIT UJJAIN</h1>
        <p>15.7.2023</p>
    </div>
    <About/>
    <Speakers/>
    <Partners/>
    </>
)
}

export default Home;