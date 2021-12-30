import Banner from "./Home/Section1-Banner";
import AvailableGames from "./Home/Section2-AvailableGames";
import HowItWorks from "./Home/Section3-HowItWorks";
import Tournaments from "./Home/Section4-Tournaments";
import Stats from "./Home/Section5-Stats";
import PlayersOfTheWeek from "./Home/Section6-PlayersOfTheWeek";
import Features from "./Home/Section7-Features";
import Reviews from "./Home/Section8-FakeReviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <AvailableGames />
      <HowItWorks />
      <Tournaments />
      <Stats />
      <PlayersOfTheWeek />
      <Features />
      <Reviews/>
    </div>
  );
};

export default Home;
