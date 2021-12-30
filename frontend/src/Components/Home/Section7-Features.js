import featuresBg from "../../assets/images/features-bg.png";
import featuresIcon1 from "../../assets/images/features-icon-1.png";
import featuresIcon2 from "../../assets/images/features-icon-2.png";
import featuresIcon3 from "../../assets/images/features-icon-3.png";
import featuresIcon4 from "../../assets/images/features-icon-4.png";
import featuresIcon5 from "../../assets/images/features-icon-5.png";
import featuresIcon6 from "../../assets/images/features-icon-6.png";

const Features = (props) => {
  const features = [
    {
      title: "PREMIUM SUPPORT",
      description:
        "Our dedicated admins are there to answer in no time, avg response time is 5mins.",
      image: `${featuresIcon1}`,
    },
    {
      title: "INSTANT DEPOSITS",
      description:
        "Make a deposit and receive your funds instantly to your account.",
      image: `${featuresIcon2}`,
    },
    {
      title: "CLIMB THE LEADERBOARDS",
      description:
        "Compete in monthly leaderboard challenges for real cash and prizes.",
      image: `${featuresIcon3}`,
    },
    {
      title: "MAKE 2X YOUR $$",
      description:
        "Our dedicated admins are there to answer in no time, avg response time is 5mins.",
      image: `${featuresIcon4}`,
    },
    {
      title: "MAKE UP TO 10X YOUR $$",
      description:
        "Make up to 10X your money on multiplayer tourneys. With paid and free entry.",
      image: `${featuresIcon5}`,
    },
    {
      title: "PLAY AT YOUR LEVEL",
      description:
        "With ranked divisions we help you find the right level to compete.",
      image: `${featuresIcon6}`,
    },
  ];
  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center text-white text-center gap-8"
      style={{
        backgroundImage: `url(${featuresBg})`,
      }}
    >
      <h1 className="text-7xl font-bold">Features</h1>
      <p className=" w-1/3 text-lg font-semibold">
        The biggest esports tournaments anytime, anywhere
      </p>
      <div className="flex flex-wrap justify-center items-center ">
        {features.map((feature) => (
          <div className="flex flex-col items-center justify-center gap-4 w-1/3 mt-8">
            <img
              src={feature.image}
              alt={feature.title}
              className=" max-w-[5em] align-middle p-4 rounded-full bg-[#4609C3] ring-[1em] ring-[#240873] m-2 "
            />

            <h1 className="text-2xl font-bold">{feature.title}</h1>
            <p className=" w-1/2 text-lg font-medium">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
