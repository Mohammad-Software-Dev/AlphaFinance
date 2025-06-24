import DividendsChart from "./DividendsChart"; // Import your ApexCharts chart

const DividendsCard = ({
  title = "Dividends",
  value = "125,927",
  percentage = "+4%",
}) => (
  <div className="w-full md:px-4">
    <header>
      <h4 className="font-normal text-black mb-3">{title}</h4>
      <div className="flex items-end gap-2">
        <h6 className=" font-semibold ">{value}</h6>
        <span className="font-bold text-xs md:text-base text-verified-green">
          {percentage}
        </span>
      </div>
    </header>

    <DividendsChart />
  </div>
);

export default DividendsCard;
