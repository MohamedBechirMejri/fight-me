import bannerBg from "../../images/banner-bg.png";
import Button from "../SubComponents/Button";

const Banner = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      {/* TODO: fix text on small screens */}
      <div className="flex-col items-center justify-center gap-2 font-bold text-center text-white">
        <h3 className="text-[#00fadf] text-5xl ">PLAY UNLIMITED</h3>
        <h1 className="m-8 text-7xl">TOURNAMENTS</h1>
        <p className="w-3/4 m-auto text-lg font-semibold">
          Compete in Free and Paid entry Tournaments. Transform your games to
          real money eSports
        </p>
        <Button name="GET STARTED" />
      </div>
    </div>
  );
};

export default Banner;
