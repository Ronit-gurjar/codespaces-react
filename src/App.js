import { BrowserRouter, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Partners from './components/Partners';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      <Partners/>
      <Routes path="/Team" component={<Team/>}></Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
