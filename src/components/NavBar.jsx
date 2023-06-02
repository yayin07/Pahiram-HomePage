import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import pahiram from "../img/pahiram.png";
import notif from "../img/notif.png";
import cart from "../img/cart.png";

const NavBar = () => {
  return (
    <div className="navbar bg-gray-600  py-4 ">
      <div className=" flex justify-between pl-12 pr-12 ">
        {/* ------------Logo------ */}
        <div className="mt-2">
          <img className="w-full h-100 " src={pahiram} alt="logo pahiram" />
        </div>

        {/* ----Search Box------------ */}
        <form class="flex mt-2 ">
          <button className=" flex  ">
            <div className="bg  w-[140px] text-white rounded-l-md  flex  justify-between py-2 px-4 ">
              <div> Categories</div>
              <div>
                <MdKeyboardArrowDown className="text-white text-2xl  " />
              </div>
            </div>
          </button>

          {/* -----input search -- box-------- */}
          <div>
            <div className=" text-gray-500  "></div>
            <div className="flex  justify-end items-center  ">
              <input
                type="text"
                placeholder="Search "
                className=" rounded-r-md pt-2 pb-2 w-[750px] pl-4 relative pr-2"
              />

              <div className="md:absolute  pr-4">
                <RiSearchLine className="text-gray-400  h-12" />
              </div>
            </div>
          </div>
        </form>

        {/* ----Navigate---------------- */}
        <div className="flex nav text-white ">
          <div className="flex mt-4  space-x-10">
            <div className="flex space-x-2">
              <div className="mt-1">
                <img className=" " src={notif} alt="Notification" />
              </div>
              <div>Notification</div>
            </div>

            <div className="flex space-x-2">
              <div className="mt-1">
                <img className=" " src={cart} alt="Cart" />
              </div>
              <div>Cart</div>
            </div>
            <div className="flex pr-10">
              <div>Contact Us</div>
            </div>
          </div>
          <button class="navsignin rounded-md border-2 px-4 mt-2 mb-2">
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
