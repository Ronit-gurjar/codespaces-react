import { Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';

import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Team' element={<Team/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
