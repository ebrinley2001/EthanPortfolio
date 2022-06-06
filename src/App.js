import Layout from './components/Layout/Layout.js';
import Home from './components/HomePage/Home.js';
import About from './components/AboutPage/About.js';
import Resume from './components/ResumePage/Resume.js';
import './App.css';
import 'normalize.css';

function App() {
  return (
    <>
      <Layout/>
      <div className="Layout">
        <Home />
        <About />
        <Resume />
      </div>
    </>
  );
}

export default App;
