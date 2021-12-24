import { get_game_list } from "../api/apiCalls";
import Banner from "./Home/Section1-Banner";
import AvailableGames from "./Home/Section2-AvailableGames";
import HowItWorks from "./Home/Section3-HowItWorks";
import Tournaments from "./Home/Section4-Tournaments";


const Home = () => {
 
  return (
    <div>
      <Banner />
      <AvailableGames />
      <HowItWorks />
      <Tournaments />
    </div>
  );
};

export default Home;
