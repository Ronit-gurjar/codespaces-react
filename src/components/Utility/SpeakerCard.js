import "/src/components/Styles/SpeakerCard.css";

function SpeakerCard(props) {
  return (
    <>
      <div className="SpeakerCard" id={props.id}>
        <img
          className="SpeakerCard-img"
          alt="SpeakerCard-poster"
          src={props.img}
        />
        <div className="SpeakerCard-text">
          <h2 className="SpeakerCard-title">{props.title}</h2>
          <div className="Speacker-details">
            <h4>TALK ON:-</h4>
            <p className="SpeakerCard-description">{props.description}</p>
            <a className="SpeakerCard-link" href={props.link}>
              <i class="fa fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpeakerCard;
