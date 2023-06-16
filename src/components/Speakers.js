import SpeakerCard from "./Utility/SpeakerCard";
import "/workspaces/codespaces-react/src/components/Styles/Speakers.css"
import modi from "/workspaces/codespaces-react/src/assets/modi.png"
function Speakers(){
    return(
        <>
        <div className="Speaker">
            <div className="SpeakerCard">
            <SpeakerCard id="card1" img={modi} title="Narendra Modi" 
            description="Mere bhai or behno!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
            link="https://twitter.com/narendramodi"/>
            </div>
        </div>
        </>
    )
    }
    
export default Speakers;