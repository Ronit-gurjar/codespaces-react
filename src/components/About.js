import "./Styles/About.css"
import Card from "./Utility/Card";
import tedx_img from "/workspaces/codespaces-react/src/assets/tedx1.jpeg";

function About(){
    return(
        <>
        
        <div className="About" id="about">
            <Card id="card1" img={tedx_img} title="About TEDx" 
            description="TEDx is a grassroots initiative, created in the spirit of TED's overall mission to research and discover “ideas worth spreading.”"
            link="https://www.ted.com/about/programs-initiatives/tedx-program"/>

            <Card id="card2" img={tedx_img} title="About TEDx MIT UJJAIN" 
            description="TEDx is a grassroots initiative, created in the spirit of TED's overall mission to research and discover “ideas worth spreading.”"
            />
        </div>
        </>
    )
    }
    
export default About;