import Button from "../SubComponents/Button";
import { Link } from "react-router-dom";
import playersWeekBg from "../../assets/images/players-week-bg.png";
import topLevelBg from "../../assets/images/top-level.png";
import playersCircle from "../../assets/images/players-circle.png";

const PlayersOfTheWeek = () => {
  const players = [
    {
      name: "Lebron James",
      image: "https://picsum.photos/200/200",
      rank: 2,
      points: "17,947",
      reward: "+30 credits",
      profileLink: "/players/lebron-james",
      lvl: "10",
    },
    {
      name: "Kobe Bryant",
      image: "https://picsum.photos/200/200",
      rank: 1,
      points: "27,947",
      reward: "+50 credits",
      profileLink: "/player/kobe-bryant",
      lvl: "15",
    },

    {
      name: "Stephen Curry",
      image: "https://picsum.photos/200/200",
      rank: 3,
      points: "7,947",
      reward: "+10 credits",
      profileLink: "/players/stephen-curry",
      lvl: "04",
    },
  ];
  return (
    <div
      className="h-screen w-screen text-white flex flex-col items-center justify-center gap-12 text-center"
      style={{
        backgroundImage: `url(${playersWeekBg})`,
      }}
    >
      <h1 className="text-7xl font-bold">Players of the week</h1>
      <p className=" w-1/3 text-lg font-semibold">
        We take a look at the best player of the week awarded on Monday for the
        previous Monday to Sunday
      </p>
      <div className="flex items-center gap-12">
        {players.map((player) => {
          return (
            <div
              className={
                player.rank === 1
                  ? "flex flex-col items-center justify-center p-8 border border-[#EDB8FF] rounded-3xl gap-7  bg-[#0e063d80] -mt-8"
                  : "flex flex-col items-center justify-center p-8 border border-[#EDB8FF] rounded-3xl gap-7 bg-[#0e063d80] "
              }
              style={{
                "box-shadow": "rgb(237 184 255) 0px 0px 10px",
              }}
            >
              <div
                className="flex flex-col items-center justify-center"
                style={{
                  backgroundImage: `url(${playersCircle})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "12em",
                }}
              >
                <img
                  src={player.image}
                  alt={player.name + " image"}
                  className="rounded-full w-1/2 mt-6"
                />
                <div>
                  <h2
                    className="text-xl  p-3 -mt-8"
                    style={{
                      backgroundImage: `url(${topLevelBg})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {player.lvl}
                  </h2>
                </div>
              </div>

              <h2 className="text-2xl font-bold">{player.name}</h2>
              <p className="text-[#64BE56] font-semibold">
                {player.points} XP Earned
              </p>
              <p className="text-[#00FADF]  font-semibold">{player.reward}</p>
              <Link to={player.profileLink}>
                <Button name="VIEW PROFILE" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayersOfTheWeek;
