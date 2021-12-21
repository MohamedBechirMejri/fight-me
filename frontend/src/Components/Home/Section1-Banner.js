import bannerBg from "../../images/banner-bg.png";

const Banner = () => {
  return (
    <div
      className="h-screen "
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    ></div>
  );
};

export default Banner;
