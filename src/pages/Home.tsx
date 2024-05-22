import About from "../components/homeComp/About";
import HeroSection from "../components/homeComp/HeroSection";

const Home = () => {
  return (
    <div className="container px-4 md:px-10">
      <HeroSection />
      <About />
    </div>
  );
};

export default Home;
