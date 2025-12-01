export default function ColorBox2({ bg, isRevealed, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        w-[180px] h-[180px]
        rounded-2xl cursor-pointer
        transition-all duration-300
        shadow-lg shadow-white/20
      "
      style={{
        backgroundColor: isRevealed ? bg : "#0a0a0a",
      }}
    ></div>
  );
}
