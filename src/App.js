import { Route, Routes, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Team' element={<Team/>}/>
      </Routes>
      <Footer/>
      <Navbar />
    </div>
  );
}

export default App;
