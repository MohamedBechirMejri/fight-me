import Button from "../SubComponents/Button";

const Tournament = (props) => {
  return (
    <div className="flex border rounded-lg border-[#edb8ff] bg-[#0e063d] p-0 items-center justify-between pl-0 overflow-hidden">
      <img
        // style={{ height: "720px", " width": "1280px" }}
        src={props.tournament.image}
        alt={props.tournament.title}
        className="w-1/3 m-0 rounded-lg shadow-lg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-4xl font-extrabold text-center">
          {props.tournament.title}
        </h3>
        <div className="flex gap-2">
          <p className="p-2 font-medium bg-[#21156E] rounded">
            Starts in
            <span className="text-[#00FADF]">
              {" "}
              {props.tournament.countdown}
            </span>
          </p>
          <p className="p-2 font-medium bg-[#21156E] rounded">
            {props.tournament.date}
          </p>
        </div>
        <hr className=" border-[#281d61]" />
        <div className="flex justify-center gap-2">
          {props.tournament.rules.map((rule) => (
            <div className="flex flex-col items-center justify-center p-1 border  border-[#281d61]">
              <p className="text-xs">{rule.title}</p>
              <p className="text-[#00FADF]">{rule.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 p-4 m-0 border h-4/5 border-[#281d61] ">
        <p>PRIZE</p>
        <p className="text-xl">{props.tournament.prize}</p>
        <Button name="VIEW TOURNAMENT" />
        <p className="w-3/5 text-center">Top 3 Players Win a Cash Prize</p>
      </div>
    </div>
  );
};
export default Tournament;
