import { Link } from "react-router-dom";

const Game = (props) => {
  return (
    <Link to="/">
      <img
        src={props.image}
        alt={props.title}
        className="transition-all rounded-xl hover:scale-105"
      />
    </Link>
  );
};

export default Game;
