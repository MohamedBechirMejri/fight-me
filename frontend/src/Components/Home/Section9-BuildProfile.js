import Button from "../SubComponents/Button";
import profileInfo from "../../assets/images/profile-info.png";

const BuildProfile = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center text-white text-left p-12 gap-8">
      <div className="flex flex-col gap-8 items-start">
        <h1 className="text-5xl font-extrabold">BUILD YOUR ESPORTS PROFILE</h1>
        <p className="font-semibold w-3/5 text-lg">
          Showcase your achievements, match history and win rate while you build
          your reputation on Begam.
        </p>
        <Button name="It's Free" />
      </div>
      <img src={profileInfo} alt="profile-info" className="w-1/4 " />
    </div>
  );
};

export default BuildProfile;
