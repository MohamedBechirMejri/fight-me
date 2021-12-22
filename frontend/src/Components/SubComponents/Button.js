export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className=" px-8 py-2 font-semibold border-none text-lg rounded-full   bg-gradient-to-tl from-[#F029A0]  to-[#F0B000] before:w-full before:h-full before:absolute before:top-0 relative before:bg-gradient-to-br transition-all before:transition-all before:-z-10 overflow-hidden before:-left-full before:from-[#F029A0] before:to-[#F0B000] hover:before:left-0"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {props.name}
    </button>
  );
}
