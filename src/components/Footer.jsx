import React from "react";
import pahiram from "../img/pahiram.png";
import linkin from "../img/in.png";
import insta from "../img/insta.png";
import fb from "../img/fb.png";
import loca from "../img/loca.png";
import phone from "../img/phone.png";
import email from "../img/email.png";

const Footer = () => {
  return (
    <div>
      <div className="foot-bg text-white md:p-3 py-4 text-xl ">
        <div>Back to top</div>
      </div>

      {/* bottom */}
      <div className="bg-foot md:flex  md:justify-between text-white pl-10 pr-10 pt-6 pb-10 ">
        <div>
          <img
            className="md:w-full md:h-100 "
            src={pahiram}
            alt="logo pahiram"
          />
        </div>

        <div className="text-left space-y-2">
          <h1 className="top">Let Us Help You</h1>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates And Polities</p>
          <p>Returns and Replacements</p>
          <p>Help</p>
          <p>About Pahiram</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>

        <div className="text-left space-y-2">
          <h1 className="top"> Contacts</h1>

          <div className="flex">
            <div>
              <img src={loca} alt="location" />
            </div>
            <div className="pl-4">
              <p>2nd Floor Zeta Building #25D, 191, Salcedo</p>
              <p>St. Lagaspi Village, San Lorenzo 1, 1229,</p>
              <p>Makati</p>
            </div>
          </div>

          <div className="flex">
            <div>
              <img src={phone} alt="phone" />
            </div>
            <div className="pl-4">
              <p>757-64342 / +639999425510</p>
            </div>
          </div>

          <div className="flex">
            <div>
              <img src={email} alt="email" />
            </div>
            <div className="pl-2">
              <p>Corporate@ticketnation.ph</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex md:justify-end">
            <div className="top pb-2"> Follow us on</div>
          </div>
          <div className="flex md:justify-end space-x-4">
            <div>
              <img className="md:w-full md:h-100 w-12 " src={linkin} alt="In" />
            </div>
            <div>
              <img
                className="md:w-full md:h-100 w-12 "
                src={insta}
                alt="insta"
              />
            </div>
            <div>
              <img className="md:w-8 md:h-100 w-12" src={fb} alt="fb" />
            </div>
          </div>
        </div>
      </div>

      <hr className="w-100"></hr>

      <div className="foot-bottom flex  text-white pt-8 pb-8">
        <div className="pl-10 sm:text-xl">
          <h1> Copyright 2022 - Pahiram </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
