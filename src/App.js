import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Works from './components/Works.js/works';
import Contect from './components/Contact/contect';
import Experience from './components/Experience/experience';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      <Works />
      <Contect />
      <Footer />
    </div>
  );
}

export default App;
