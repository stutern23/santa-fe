import { useState } from "react";
import Dashboard from "../../assets/ic_round-dashboard.svg";
import Chat from "../../assets/ic_round-chat.svg";
import Gift from "../../assets/mdi_gift.svg";
import Donate from "../../assets/bxs_donate-heart.svg";
import Setting from "../../assets/icon-park-solid_setting-two.svg";
import Logo from "../../assets/Frame 14 (1).svg";
import Icon from "../../assets/Rectangle.svg";
import Smallgift from "../../assets/Vector.svg";
import PlayBtn from "../../assets/Polygon 1.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div
        className={`bg-[rgba(133,128,128,0.68)] fixed top-0 bottom-0 left-0 right-0 w-full h-[100vh] z-[5] ${
          toggle ? `block` : `hidden`
        }`}
        onClick={() => setToggle((prevState) => !prevState)}
      ></div>
      <div
        className={`h-[100vh] bg-[#fff] z-[7] fixed border-r border-[rgba(255,255,255,0.83)] lg:w-[300px] ${
          toggle ? `w-[180px]` : `w-[60px]`
        }`}
      >
        <div className={`flex flex-col gap-[3rem]`}>
          <div className={`flex flex-col gap-[1.2rem] h-[100vh] mb-[4rem]`}>
            <div className={`my-8 flex flex-col gap-8 `}>
              <div className={`border-b pb-8 border-[#370000] px-3`}>
                <Link to="/">
                  <img src={Logo} alt="Brand Logo" />
                </Link>
              </div>

              <div
                className={`ml-auto px-3`}
                onClick={() => setToggle((prevState) => !prevState)}
              >
                <img
                  src={PlayBtn}
                  alt="toggle button"
                  className={`w-[12px] h-[12px]  cursor-pointer lg:hidden ${
                    toggle ? `rotate-0` : `rotate-[90deg]`
                  }`}
                />
              </div>
            </div>

            <div
              className={`mx-2 lg:mx-4 flex gap-[.5rem] items-center p-3 cursor-pointer hover:bg-[#ffbdbd]  lg:justify-start hover:transition-all hover:ease-in-out hover:duration-100 hover:delay-75 hover:rounded-[10px] ${
                toggle ? `justify-start gap-[.3rem]` : `justify-center`
              }`}
            >
              <Link to="/home">
                <img src={Dashboard} alt="Dashboard icon" />
              </Link>

              <Link
                to="/home"
                className={`text-[#370000] text-[.9rem] lg:text-[1rem]  font-[500] capitalize lg:block ${
                  toggle ? `block` : `hidden`
                }`}
              >
                dashboard
              </Link>
            </div>
            <div
              className={`mx-2 lg:mx-4 flex gap-[.5rem] items-center p-3 cursor-pointer hover:bg-[#ffbdbd] lg:justify-start hover:transition-all hover:ease-in-out hover:duration-100 hover:delay-75 hover:rounded-[10px] ${
                toggle ? `justify-start gap-[.3rem]` : `justify-center`
              }`}
            >
              <Link to="/home">
                <img src={Chat} alt="Chat icon" />
              </Link>

              <Link
                to="/chat"
                className={`text-[#370000] text-[.9rem] lg:text-[1rem]  font-[500] capitalize lg:block ${
                  toggle ? `block` : `hidden`
                }`}
              >
                chat with santa
              </Link>
            </div>
            <div
              className={`mx-2 lg:mx-4 flex gap-[.5rem] items-center p-3 cursor-pointer hover:bg-[#ffbdbd] lg:justify-start hover:transition-all hover:ease-in-out hover:duration-100 hover:delay-75 hover:rounded-[10px] ${
                toggle ? `justify-start gap-[.3rem]` : `justify-center`
              }`}
            >
              <Link to="/home">
                <img src={Gift} alt="Gift icon" />
              </Link>

              <Link
                to="/home"
                className={`text-[#370000] text-[.9rem] lg:text-[1rem]  font-[500] capitalize lg:block ${
                  toggle ? `block` : `hidden`
                }`}
              >
                free gifts
              </Link>
            </div>
            <div
              className={`mx-2 lg:mx-4 flex gap-[.5rem] items-center p-3 cursor-pointer hover:bg-[#ffbdbd] lg:justify-start  hover:transition-all hover:ease-in-out hover:duration-100 hover:delay-75 hover:rounded-[10px] ${
                toggle ? `justify-start gap-[.3rem]` : `justify-center`
              }`}
            >
              <Link to="/home">
                <img src={Donate} alt="Donate icon" />
              </Link>

              <Link
                to="/home"
                className={`text-[#370000] text-[.9rem] lg:text-[1rem]  font-[500] capitalize lg:block ${
                  toggle ? `block` : `hidden`
                }`}
              >
                Donate
              </Link>
            </div>
            <div
              className={`mx-2 lg:mx-4 flex gap-[.5rem] items-center p-3 cursor-pointer hover:bg-[#ffbdbd]  lg:justify-start hover:transition-all hover:ease-in-out hover:duration-100 hover:delay-75 hover:rounded-[10px] mb-4 ${
                toggle ? `justify-start gap-[.3rem]` : `justify-center`
              }`}
            >
              <Link to="/home">
                <img src={Setting} alt="Setting icon" />
              </Link>

              <Link
                to="/home"
                className={`text-[#370000] text-[.9rem] lg:text-[1rem]  font-[500] capitalize lg:block ${
                  toggle ? `block` : `hidden`
                }`}
              >
                Setting
              </Link>
            </div>
          </div>
          <div
            className={`${
              toggle ? `block` : `hidden`
            } mt-[8rem] bg-[#370000] p-2 mx-2 md:mx-4 rounded-[8px] flex items-center gap-[.5rem] absolute bottom-[10px]`}
          >
            <div>
              <img src={Icon} alt=" Icon of a boy" />
            </div>
            <div className={`flex flex-col justify-center`}>
              <h1
                className={`font-[500] text-[1.2rem] leading-[38px] text-[#fff] `}
              >
                Sunnyboy
              </h1>
              <div className={`flex gap-[.2rem] items-center`}>
                <div>
                  <img src={Smallgift} alt="A liitle gift package icon" />
                </div>
                <p className={`text-[.7rem] font-[500] text-[#fff]`}>
                  Gift collector
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
