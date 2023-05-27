import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from './pages/About';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
