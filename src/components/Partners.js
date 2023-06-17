import p1 from "/src/assets/p2.png"
import aws from "/src/assets/aws.jpg";
import su from "/src/assets/su.png";
import "/components/Styles/Partners.css"

function Partners(){
    return(
        <>
        <div className="partner-page" id="partners">
        <div className="partner-section">
            <h2>Our Partners</h2>
            <div className="partner-images">
            {/* Add partner company images here */}
            <img src={p1} alt="Partner 1" />
            <img src={aws} alt="Partner 2" />
            <img src={su} alt="Partner 3" />
            </div>
        </div>
        </div>
        </>
    );
}

    
export default Partners;