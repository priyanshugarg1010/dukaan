import search from "../assets/search.svg";
import download from "../assets/download.svg";
import sort from "../assets/sort.svg";

const Sort = () => {
  return (
    <div className="transactions">
      <div className="table_head">
        <div className="search">
          <img src={search} alt="" />
          <input type="text" placeholder="Search by order ID" />
        </div>

        <div className="table_work">
          <div className="sort cursor-pointer ">
            Sort
            <img src={sort} alt="" />
          </div>
          <div className="download cursor-pointer">
            <img src={download} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
