import bannerBg from "../../images/banner-bg.png";

const Banner = () => {
  return (
    <div
      className="h-screen relative"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      <div className="absolute top-1/2 left-1/2 font-bold -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center text-white gap-2">
        <h3 className="text-[#00fadf] text-5xl ">PLAY UNLIMITED</h3>
        <h1 className="text-7xl m-8">TOURNAMENTS</h1>
        <p className="text-lg font-semibold w-3/4 m-auto">
          Compete in Free and Paid entry Tournaments. Transform your games to
          real money eSports
        </p>
      </div>
    </div>
  );
};

export default Banner;
