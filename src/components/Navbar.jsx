import "../style.css";
import question from "../assets/question.svg";
import dropdown from "../assets/dropdown.svg";
import message from "../assets/message.svg";
import search from "../assets/search.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_first">
        <span>Payments</span>
        <div>
          <img src={question} alt="" />
        </div>
        <a
          style={{ textDecoration: "none", fontSize: "14px", color: "#504f4f" }}
          href="#"
        >
          <u>How it works?</u>
        </a>
      </div>

      <div className="navbar_second">
        <div>
          <img src={search} alt="" />
        </div>
        <input
          type="text"
          id="search-input"
          placeholder="Search features, tutorials, etc."
          className="navbar_input"
        />
      </div>

      <div className="navbar_third">
        <div
          className=" cursor-pointer"
          style={{
            display: "flex",
            backgroundColor: "#e6e6e6",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={message} alt="" />
        </div>
        <div className=" cursor-pointer">
          <img src={dropdown} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
