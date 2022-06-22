import "./App.css";
import Banner from "./Components/Banner";
import Header from "./layout/Header";
import Description from "./Components/Description";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Protfolio";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Footer from "./layout/Footer";
import TopButton from "./Components/TopButton";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Description />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
      <TopButton />
    </div>
  );
};

export default App;
