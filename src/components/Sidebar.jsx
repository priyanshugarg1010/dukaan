import "../style.css";
import { links } from "../data/sidebarLinks";
import downarrow from "../assets/downarrow.svg";
import logo from "../assets/logo.svg";
import wallet from "../assets/wallet.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_logo">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="logo_name">
          <div
            className=""
            style={{ lineHeight: "22px", fontWeight: 500, color: "#fff" }}
          >
            <span>Nishyan</span>
          </div>
          <a
            href=""
            style={{
              fontSize: "14px",
              textDecoration: "underline",
              lineHeight: "16px",
              opacity: "0.8",
            }}
          >
            Visit store
          </a>
        </div>
        <div className="logo_dropdown">
          <img src={downarrow} alt="" />
        </div>
      </div>

      {links.map((link, index) => (
        <div key={index} className="sidebar_div">
          <div className="sidebar_div_arr">
            <img src={link.svg} alt="" />
            <a className="sidebar_link" href={link.href}>
              {link.text}
            </a>
          </div>
        </div>
      ))}

      <div
        className="sidebar_credit w-44 h-14 cursor-pointer"
        style={{ position: "absolute" }}
      >
        <div className="sidebar_credit_logo">
          <div className="credit_logo_back">
            <img src={wallet} alt="" />
          </div>
        </div>
        <div className="sidebar_credit_name">
          <div className="">Available credits</div>
          <div className="" style={{ fontWeight: "bold" }}>
            222.10
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
