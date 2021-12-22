import Button from "../SubComponents/Button";
import Game from "./Game";

const AvailableGames = (props) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col w-[50vw] h-[70vh] bg-gradient-to-b from-[#4609C3] to-[#0E063D] rounded-3xl p-20 text-white gap-8">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-extrabold">AVAILABLE GAMES</h1>
            <p className="text-lg ">We are constantly adding new games</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          {props.games.map((game) => (
            <Game key={game.title} title={game.title} image={game.image} />
          ))}
        </div>
        <Button name="VIEW ALL" />
      </div>
    </div>
  );
};

export default AvailableGames;
