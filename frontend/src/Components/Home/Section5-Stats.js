import uniqid from "uniqid";
import counterBg from "../../assets/images/counter-bg.png";

const Stats = () => {
  const stats = [
    {
      title: "MATCHES PLAYED",
      value: "14",
      beforeVal: "",
      afterVal: "K",
      img: "https://picsum.photos/200/200",
    },
    {
      title: "WINNINGS PAID",
      value: "16",
      beforeVal: "$",
      afterVal: "M",
      img: "https://picsum.photos/200/200",
    },
    {
      title: "ACTIVE LADDERS",
      value: "180",
      beforeVal: "",
      afterVal: "",
      img: "https://picsum.photos/200/200",
    },
    {
      title: "XP EARNED",
      value: "168",
      beforeVal: "",
      afterVal: "B",
      img: "https://picsum.photos/200/200",
    },
  ];
  return (
    <div className="h-screen w-screen p-8 flex flex-wrap gap-8 items-center justify-center text-center text-white " style={{
      backgroundImage: `url(${counterBg})`,
    }}>
      {stats.map((stat) => {
        return (
          <div
            key={uniqid()}
            className="rounded-2xl p-8 px-20 border flex flex-col items-center justify-center gap-2 "
          >
            <img
              src={stat.img}
              alt=""
              className="rounded-full w-1/3 ring-[1.5em] m-8 ring-[#4609C3]"
            />

            <h2 className="text-4xl font-bold">
              {stat.beforeVal}
              {stat.value}
              {stat.afterVal}
            </h2>
            <p className="text-[#64BE56]">{stat.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
