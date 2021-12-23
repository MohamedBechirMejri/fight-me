import Banner from "./Home/Section1-Banner";
import AvailableGames from "./Home/Section2-AvailableGames";
import HowItWorks from "./Home/Section3-HowItWorks";

const Home = () => {
  return (
    <div>
      <Banner />
      <AvailableGames
        games={[
          {
            image: "https://picsum.photos/200/300",
            title: "Game 1",
          },
          {
            image: "https://picsum.photos/200/300",
            title: "Game 2",
          },
          {
            image: "https://picsum.photos/200/300",
            title: "Game 3",
          },
          {
            image: "https://picsum.photos/200/300",
            title: "Game 4",
          },
        ]}
      />
      <HowItWorks />
    </div>
  );
};

export default Home;
