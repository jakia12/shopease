const Banner = () => {
  return (
    <div
      className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/images/bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-4xl font-bold">
            Shop the Trends. Save in Style.
          </h1>
          <p className="text-lg mt-2">Get it now for an exclusive price!</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
