import Banner from "./Home/Section1-Banner";
import AvailableGames from "./Home/Section2-AvailableGames";
import HowItWorks from "./Home/Section3-HowItWorks";
import Tournaments from "./Home/Section4-Tournaments";
import Stats from "./Home/Section5-Stats";

const Home = () => {
  return (
    <div>
      <Banner />
      <AvailableGames />
      <HowItWorks />
      <Tournaments />
      <Stats/>
    </div>
  );
};

export default Home;
