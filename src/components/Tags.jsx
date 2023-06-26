function Tags({ text, padding }) {
  return (
    <div
      className={`flex  bg-[#f2f2f2] text-[#757575]  rounded-full justify-center items-center text-[13px] font-medium cursor-pointer ${
        padding ? padding : "px-2 py-1 lg:px-4 lg:py-2"
      }`}
    >
      {text}
    </div>
  );
}

export default Tags;
// 676666
