import About from "./Components/About";
import Blog from "./Components/Blog";
import Portfolio from "./Components/Portfolio";
import Service from "./Components/Service";
import Hero from "./Components/Hero";
import Tabs from "./Components/Tabs";

const Home = () => {
  return (
    <>
      <div className="bg-mainBg">
        <Hero />
      </div>
      <Service />
      <About />
      <Tabs />
      <Portfolio />
      <Blog />
    </>
  );
};

export default Home;
