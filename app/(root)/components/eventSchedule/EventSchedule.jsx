import FiltersAndAction from "./FiltersAndAction ";

const EventSchedule = () => {
  return (
    <section className="pt-[90px] pb-[90px] ">
      <div className="text-center bg-[#fff]">
        <h2 className="font-[700] text-[50px] text-[#111] font-libre">
          Event <span className="text-[#EE263D]">Schedule</span>
        </h2>
      </div>
      <div className="w-full bg-[#171717] py-[100px]">
        <div className="max-w-[90%] w-[95%] mx-auto">
          <FiltersAndAction />
          {/* Your schedule content goes here */}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
