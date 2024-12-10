import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;