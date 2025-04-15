export default function TopNav() {
  return (
    <div className="max-w-[90%] w-[95%] mx-auto  text-white py-[12px] px-4">
      <div className=" flex items-center justify-between">
        {/* Logo on the Left */}
        <div></div>

        {/* Buttons on the Right */}
        <div className="flex items-center space-x-3">
          <button className="bg-[#F8DA55] text-[#171717] px-4 py-[10px]  rounded-lg hover:bg-gray-200 transition mr-[10px]">
            Cape Canaveral
          </button>
          <button className="bg-transparent text-[F8DA55] px-6 py-[10px]  rounded-lg border border-[#F8DA55] transition">
            Patrick SFB
          </button>
        </div>
      </div>
    </div>
  );
}
