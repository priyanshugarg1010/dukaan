/* eslint-disable react/prop-types */
const Card = ({ title, number }) => {
  return (
    <div className="pending_payout flex shadow-md box">
      <div className="pending_body">
        <div className=" flex flex-row mt-2 ml-2 p-2 gap-2">
          <div className="title">{title}</div>
        </div>

        <div className="pending_amount">
          <div className=" text-3xl font-normal text-black m-2">{number}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
