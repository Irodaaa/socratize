import About from './components/About';
import AllInOne from './components/AllInOne';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Pricing from './components/Pricing';
import Support from './components/Support'
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
        <SocialLinks/>
      <About />
      <Support />
      <AllInOne />
      {/*<Pricing />*/}
      {/*<Footer />*/}
    </>
  );
}

export default App;