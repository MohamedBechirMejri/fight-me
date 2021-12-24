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
      <Tournaments
        tournaments={[
          {
            image: "https://picsum.photos/200/300",
            title: "Tournament 1",
            countdown: "10d 2h 18m",
            date: "Apr 21, 5:00 AM EDT",
            rules: [
              {
                title: "ENTRY/PLAYER",
                description: "10 CREDITS",
              },
              {
                title: "TEAM SIZE",
                description: "2 VS 2",
              },
              {
                title: "MAX TEAMS",
                description: "64",
              },
              {
                title: "ENROLLED",
                description: "11",
              },
              {
                title: "SKILL LEVEL",
                description: "ALL",
              },
            ],
            prize: "$739",
          },
          {
            image: "https://picsum.photos/200/300",
            title: "Tournament 1",
            countdown: "10d 2h 18m",
            date: "Apr 21, 5:00 AM EDT",
            rules: [
              {
                title: "ENTRY/PLAYER",
                description: "10 CREDITS",
              },
              {
                title: "TEAM SIZE",
                description: "2 VS 2",
              },
              {
                title: "MAX TEAMS",
                description: "64",
              },
              {
                title: "ENROLLED",
                description: "11",
              },
              {
                title: "SKILL LEVEL",
                description: "ALL",
              },
            ],
            prize: "$854",
          },
          {
            image: "https://picsum.photos/200/300",
            title: "Tournament 1",
            countdown: "10d 2h 18m",
            date: "Apr 21, 5:00 AM EDT",
            rules: [
              {
                title: "ENTRY/PLAYER",
                description: "10 CREDITS",
              },
              {
                title: "TEAM SIZE",
                description: "2 VS 2",
              },
              {
                title: "MAX TEAMS",
                description: "64",
              },
              {
                title: "ENROLLED",
                description: "11",
              },
              {
                title: "SKILL LEVEL",
                description: "ALL",
              },
            ],
            prize: "$105",
          },
          {
            image: "https://picsum.photos/200/300",
            title: "Tournament 1",
            countdown: "10d 2h 18m",
            date: "Apr 21, 5:00 AM EDT",
            rules: [
              {
                title: "ENTRY/PLAYER",
                description: "10 CREDITS",
              },
              {
                title: "TEAM SIZE",
                description: "2 VS 2",
              },
              {
                title: "MAX TEAMS",
                description: "64",
              },
              {
                title: "ENROLLED",
                description: "11",
              },
              {
                title: "SKILL LEVEL",
                description: "ALL",
              },
            ],
            prize: "$473",
          },
          {
            image: "https://picsum.photos/200/300",
            title: "Tournament 1",
            countdown: "10d 2h 18m",
            date: "Apr 21, 5:00 AM EDT",
            rules: [
              {
                title: "ENTRY/PLAYER",
                description: "10 CREDITS",
              },
              {
                title: "TEAM SIZE",
                description: "2 VS 2",
              },
              {
                title: "MAX TEAMS",
                description: "64",
              },
              {
                title: "ENROLLED",
                description: "11",
              },
              {
                title: "SKILL LEVEL",
                description: "ALL",
              },
            ],
            prize: "$778",
          },
        ]}
      />
    </div>
  );
};

export default Home;
