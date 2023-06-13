import Hero from "./Hero";
import Navbar from "./Navbar";
import "./Styles/Home.css"
import home from "/workspaces/codespaces-react/src/assets/redforest3.png"

function Home(){
return(
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg={home}
    title="TEDx MIT UJJAIN"
    text="15.7.2023"
    />
    </>
)
}

export default Home;