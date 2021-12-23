import Tournament from "./Tournament";
import tournamentsBg from "../../assets/images/tournaments-bg.png";

const Tournaments = (props) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 p-8 text-white "
      style={{
        backgroundImage: `url(${tournamentsBg})`,
      }}
    >
      <h1 className="mt-20 font-bold text-7xl">BROWSE TOURNAMENTS</h1>
      <p className="w-1/3 text-xl text-center">
        Find the perfect tournaments for you. Head to head matches where you
        pick the game, rules and prize.
      </p>
      <div className="flex ">
        {props.tournaments.map((tournament) => (
          <Tournament key={tournament.title} tournament={tournament} />
        ))}
      </div>
    </div>
  );
};
export default Tournaments;
