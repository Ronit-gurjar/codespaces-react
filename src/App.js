import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
