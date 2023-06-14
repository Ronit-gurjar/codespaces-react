import Hero from "./Utility/Hero";
import "/workspaces/codespaces-react/src/components/Styles/Home.css"
import home from "/workspaces/codespaces-react/src/assets/redforest3.png"

function Home(){
return(
    <>
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