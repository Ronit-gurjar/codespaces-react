import "/workspaces/codespaces-react/src/components/Styles/Home.css"
import Navbar from '/workspaces/codespaces-react/src/components/Navbar.js';
import home from "/workspaces/codespaces-react/src/assets/backgroundimg1.jpg"
import About from '/workspaces/codespaces-react/src/components/About.js';
import Partners from '/workspaces/codespaces-react/src/components/Partners.js';
import Speakers from "./Speakers";

function setCountdown(eventDate) {
    const countdownTimer = setInterval(updateCountdown, 1000);
  
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = eventDate - now;
  
      // Calculate time components
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the countdown or a message if the event has already occurred
      if (distance >= 0) {
        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      } else {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "00:00:00:";
      }
    }
  }

  // Set the date and time of your event (year, month (0-11), day, hour, minute, second)
  const eventDate = new Date(2023, 6, 15, 17, 0, 0).getTime();
  setCountdown(eventDate);

function Home(){
return(
    <>
    <Navbar />
    <div className="hero"  id="hero">
        <img className="backgroundimgblur" alt="hero-img" src={home}/>
    </div>
    <div className="hero-text">
        <h1><span className="spanred">TEDx</span> MIT Ujjain</h1>
        
        <div className="countdiv"><p id="countdown"></p></div>
    </div>
    <About/>
    <Speakers/>
    <Partners/>
    </>
)
}

export default Home;