import uniqid from "uniqid";

export default function Stats() {
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
    <div>
      {stats.map((stat) => {
        return (
          <div key={uniqid()}>
            <div>
              <img src={stat.img} alt="" />
            </div>
            <h2>
              {stat.beforeVal}
              {stat.value}
              {stat.afterVal}
            </h2>
            <p>{stat.title}</p>
          </div>
        );
      })}
    </div>
  );
}
