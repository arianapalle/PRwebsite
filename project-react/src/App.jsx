import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header/>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route path="/About" element={<About/>}></Route>
            </Routes>
      </Router>

      <Footer/>
    </>

  );
}

export default App;
