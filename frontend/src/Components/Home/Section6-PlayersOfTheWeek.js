import Button from "../SubComponents/Button";
import { Link } from "react-router-dom";
import playersWeekBg from "../../assets/images/players-week-bg.png";

const PlayersOfTheWeek = () => {
  const players = [
    {
      name: "Kobe Bryant",
      image: "https://picsum.photos/200/200",
      rank: 1,
      points: "27,947",
      reward: "+20 credits",
      profileLink: "/player/kobe-bryant",
    },
    {
      name: "Lebron James",
      image: "https://picsum.photos/200/200",
      rank: 2,
      points: "27,947",
      reward: "+20 credits",
      profileLink: "/players/lebron-james",
    },
    {
      name: "Stephen Curry",
      image: "https://picsum.photos/200/200",
      rank: 3,
      points: "27,947",
      reward: "+20 credits",
      profileLink: "/players/stephen-curry",
    },
    {
      name: "Kevin Durant",
      image: "https://picsum.photos/200/200",
      rank: 4,
      points: "27,947",
      reward: "+20 credits",
      profileLink: "/players/kevin-durant",
    },
    {
      name: "James Harden",
      image: "https://picsum.photos/200/200",
      rank: 5,
      points: "27,947",
      reward: "+20 credits",
      profileLink: "/players/james-harden",
    },
  ];
  return (
    <div
      className="h-screen w-screen "
      style={{
        backgroundImage: `url(${playersWeekBg})`,
      }}
    >
      <h1>Players of the week</h1>
      <p>
        We take a look at the best player of the week awarded on Monday for the
        previous Monday to Sunday
      </p>
      <div>
        {players.map((player) => {
          return (
            <div className="flex flex-col items-center justify-center">
              <div>
                <img
                  src={player.image}
                  alt={player.name + " image"}
                  className="rounded-full w-1/3 ring-[1.5em] m-8 ring-[#4609C3]"
                />
                <div>
                  <h2 className="text-4xl font-bold">{player.rank}</h2>
                </div>
              </div>

              <h2 className="text-4xl font-bold">{player.name}</h2>
              <p className="text-[#64BE56]">{player.points}</p>
              <p className="text-gray-600">{player.reward}</p>
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
