import Tournament from "./Tournament";
import tournamentsBg from "../../assets/images/tournaments-bg.png";
import axios from "axios";
import { useEffect, useState } from "react";
const Tournaments = (props) => {
  const [tournament_list, SetTournament_list] = useState([]);
  const [loading, SetLoading] = useState(false);
  const get_tournament_list = async () => {
    try {
      const tournament_api =
        "https://aqueous-falls-70675.herokuapp.com/api/v1/collect/tournaments/TournamentsAvailable";
      axios.get(tournament_api).then((response) => {
        if (response.status === 201) {
          SetTournament_list(response.data.results);
          const tournament = {
            tournament: response.data.results,
          };
          localStorage.setItem("tournament", JSON.stringify(tournament));

          SetLoading(true);
        } else {
          console.log(response.data.errors);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    get_tournament_list();
  }, []);
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

      {loading ? (
        <div className="flex ">
          {tournament_list.map((tournament) => (
            <Tournament key={tournament.title} tournament={tournament} />
          ))}
        </div>
      ) : (
        <div className="flex ">
          <img
            className=""
            style={{ maxWidth: "100px", maxHeight: "100px" }}
            src="https://cutewallpaper.org/24/loading-gif-png/loadinggifpng5-superior-lawn-care.png"
            alt="change this later"
          ></img>
        </div>
      )}
    </div>
  );
};
export default Tournaments;
