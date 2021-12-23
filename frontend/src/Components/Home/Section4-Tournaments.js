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
      <h1>BROWSE TOURNAMENTS</h1>
      <p>
        Find the perfect tournaments for you. Head to head matches where you
        pick the game, rules and prize.
      </p>
      <div>
        {props.tournaments.map((tournament) => (
          <Tournament key={tournament.title} tournament={tournament} />
        ))}
      </div>
    </div>
  );
};
export default Tournaments;
