import "/workspaces/codespaces-react/src/components/Styles/Home.css"
import home from "/workspaces/codespaces-react/src/assets/redforest3.png"

function Home(){
return(
    <>
    
    <div className="hero"  id="hero">
        <img alt="hero-img" src={home}/>
    </div>
    <div className="hero-text">
        <h1>TEDx MIT UJJAIN</h1>
        <p>15.7.2023</p>
    </div>
    </>
)
}

export default Home;