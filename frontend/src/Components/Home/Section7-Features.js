import featuresBg from "../../assets/images/features-bg.png";

const Features = (props) => {
  const features = [
    {
      title: "PREMIUM SUPPORT",
      description:
        "Our dedicated admins are there to answer in no time, avg response time is 5mins.",
      image: "https://picsum.photos/200/200",
    },
    {
      title: "INSTANT DEPOSITS",
      description:
        "Make a deposit and receive your funds instantly to your account.",
      image: "https://picsum.photos/200/200",
    },
    {
      title: "CLIMB THE LEADERBOARDS",
      description:
        "Compete in monthly leaderboard challenges for real cash and prizes.",
      image: "https://picsum.photos/200/200",
    },
    {
      title: "MAKE 2X YOUR $$",
      description:
        "Our dedicated admins are there to answer in no time, avg response time is 5mins.",
      image: "https://picsum.photos/200/200",
    },
    {
      title: "MAKE UP TO 10X YOUR $$",
      description:
        "Make up to 10X your money on multiplayer tourneys. With paid and free entry.",
      image: "https://picsum.photos/200/200",
    },
    {
      title: "PLAY AT YOUR LEVEL",
      description:
        "With ranked divisions we help you find the right level to compete.",
      image: "https://picsum.photos/200/200",
    },
  ];
  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen "
      style={{
        backgroundImage: `url(${featuresBg})`,
      }}
    >
      <h1 className="text-7xl font-bold">Features</h1>
      <p className=" w-1/3 text-lg font-semibold">
        The biggest esports tournaments anytime, anywhere
      </p>
      <div className="flex flex-col items-center justify-center w-full h-full">
        {features.map((feature) => (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src={feature.image}
              alt={feature.title}
              className="overflow-hidden transition-all w-80 h rounded-xl hover:scale-105"
            />

            <h1 className="text-2xl font-bold">{feature.title}</h1>
            <p className=" w-1/3 text-lg font-semibold">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
