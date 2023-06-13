import "./Styles/Hero.css"
import background from "/workspaces/codespaces-react/src/assets/redforest.png"
function Hero(){
return(
    <>
    <div className="hero">
        <img alt="hero-img" src={background}/>
    </div>
    </>
)
}

export default Hero;