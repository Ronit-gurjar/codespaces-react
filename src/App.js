import { Route, Routes} from 'react-router-dom';
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
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Team' element={<Team/>}/>
      </Routes>
      <About/>
      <Partners/>
      <Footer/>
      
    </div>
  );
}

export default App;
