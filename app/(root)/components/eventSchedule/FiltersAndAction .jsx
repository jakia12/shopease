const FiltersAndAction = () => {
  const years = Array.from({ length: 10 }, (_, i) => 2020 + i);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className=" mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Selects */}
        <div className="flex gap-4 w-full md:w-auto">
          {/* Month Select */}
          <select className="border border-gray-300 px-4 py-2 rounded-md text-[#fff] bg-transparent">
            {months.map((month, idx) => (
              <option key={idx} value={month}>
                {month}
              </option>
            ))}
          </select>

          {/* Year Select */}
          <select className="border border-gray-300 px-4 py-2 rounded-md text-[#fff] bg-transparent">
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Right: Yellow Button */}
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold text-lg transition flex items-center justify-center">
          <img src="" alt="" />
          <span>Patrick SFB</span>
        </button>
      </div>
    </div>
  );
};

export default FiltersAndAction;
