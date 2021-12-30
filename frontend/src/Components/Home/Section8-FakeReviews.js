import testimonialsBg from "../../assets/images/testimonials-bg.png";

const reviews = [
  {
    review:
      "I play Tournament every day, it's a great way to relax and win cash too!",
    username: "BRICE TONG",
    img: "https://picsum.photos/200/200",
    reward: "$306",
    location: "TEXAS, USA",
  },
  {
    review:
      "When I hang out with my friends, we play Tournament, its so much fun",
    username: "ALVA ADAIR",
    img: "https://picsum.photos/200/200",
    reward: "$496",
    location: "FRANKFURT, GERMANY",
  },
  {
    review: "I joined for the community but ended up winning cash, amazing.",
    username: "RAY SUTTON",
    img: "https://picsum.photos/200/200",
    reward: "$306",
    location: "ONTARIO, CANADA",
  },
];
const Reviews = () => {
  return (
    <div
      className="h-screen w-screen flex flex-col text-center items-center justify-center text-white gap-8"
      style={{
        backgroundImage: `url(${testimonialsBg})`,
        //  backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="font-bold text-6xl">OUR GAMERS REVIEWS</h1>
      <p className="font-semibold text-xl">
        Thousands of Happy Gamers All Around the World
      </p>
      <div className="flex items-center justify-center flex-wrap gap-8">
        {reviews.map((review) => {
          return (
            <div className="w-2/5 h-1/2 flex flex-col items-center justify-between border border-[#EDB8FF] bg-[#0E063D] rounded-2xl p-12 ">
              <p>{review.review}</p>
              <hr className="w-full m-4" />
              <div className="flex items-center justify-center gap-6">
                <img
                  src={review.img}
                  alt="user"
                  className="rounded-full w-1/5"
                />
                <div>
                  <p className="font-bold text-left text-lg">
                    {review.username}
                  </p>
                  <p className="text-[1.5vh] text-left text-[#64BE56]">
                    {review.location}
                  </p>
                </div>
                <p className=" text-[#00FADF]">{review.reward}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
