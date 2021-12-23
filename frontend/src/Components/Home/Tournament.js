import Button from "../SubComponents/Button";

const Tournament = (props) => {
  return (
    <div>
      <img src={props.tournament.image} alt={props.tournament.title} />
      <div>
        <h3>{props.tournament.title}</h3>
        <div>
          <p>{props.tournament.countdown}</p>
          <p>{props.tournament.date}</p>
        </div>
        <hr />
        <div>
          {props.tournament.rules.map((rule) => (
            <div>
              <p>{rule.title}</p>
              <p>{rule.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p>PRIZE</p>
        <p>{props.tournament.prize}</p>
        <Button name="VIEW TOURNAMENT" />
        <p>Top 3 Players Win a Cash Prize</p>
      </div>
    </div>
  );
};
export default Tournament;
