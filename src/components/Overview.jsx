import downarrowblack from "../assets/downarrowblack.svg";
import Card from "./Card";

const Overview = () => {
  return (
    <>
      <div className="overview">
        <div className="flex justify-between items-center">Overview</div>
        <div className="border border-gray-400 rounded-md bg-white p-2 text-base flex justify-between items-center gap-2">
          <span className="text-sm text-gray-600">Last Month</span>
          <img src={downarrowblack} alt="" />
        </div>
      </div>

      <div className="flex flex-row justify-between items-center gap-5 ">
        <Card title="Online orders" number="231" />
        <Card title="Amount received" number="₹23,92,312.19" />
      </div>
      <div className="p-5 text-2xl font-normal pl-0">
        Transactions | This Month
      </div>
    </>
  );
};

export default Overview;
