import Button from "../SubComponents/Button";
import HowItWorksBg from "../../assets/images/how-works-bg.png";
import uniqid from "uniqid";

const steps = [
  {
    number: 1,
    title: "SIGNUP",
    icon: "",
  },
  {
    number: 2,
    title: "DEPOSIT",
    icon: "",
  },
  {
    number: 3,
    title: "COMPETE",
    icon: "",
  },
  {
    number: 4,
    title: "GET PAID",
    icon: "",
  },
];
const HowItWorks = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen gap-8 font-extrabold text-white"
      style={{
        backgroundImage: `url(${HowItWorksBg})`,
      }}
    >
      <h1 className="text-7xl">HOW IT WORKS</h1>
      <p>It's easier than you think. Follow 4 simple easy steps</p>
      <div className="flex gap-24">
        {steps.map((step) => (
          <div className="relative" key={uniqid()}>
            <div className="flex items-center justify-center w-24 h-24 bg-[#4609C3] rounded-2xl">
              later
            </div>
            <p className="absolute flex items-center justify-center w-8 h-8   rounded-full -top-2 -right-2 bg-gradient-to-tl from-[#F029A0]  to-[#F0B000]">
              {step.number}
            </p>
            <h2 className="mt-4 text-xl text-center">{step.title}</h2>
          </div>
        ))}
      </div>
      <Button name="JOIN NOW!" />
    </div>
  );
};

export default HowItWorks;
