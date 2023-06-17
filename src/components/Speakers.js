import SpeakerCard from "./Utility/SpeakerCard";
import "/components/Styles/Speakers.css";
import modi from "/src/assets/modi.png";
function Speakers() {
  return (
    <>
      <div className="Speaker">
        <h1 className="Heading">Speakers</h1>
        <div className="SpeakerCard">
          <SpeakerCard
            id="card1"
            img={modi}
            title="Narendra Modi"
            description="Mere bhai or behno!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
            link="https://twitter.com/narendramodi"
          />
        </div>
      </div>
    </>
  );
}

export default Speakers;
