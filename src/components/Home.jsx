import React from "react";
import F1 from "../img/F1.png";
import F2 from "../img/F2.png";
import F3 from "../img/F3.png";
import F4 from "../img/F4.png";
import F5 from "../img/F5.png";
import F6 from "../img/F6.png";
import F7 from "../img/F7.png";
import F8 from "../img/F8.png";
import F9 from "../img/F9.png";
import F10 from "../img/F10.png";
import F11 from "../img/F11.png";
import F12 from "../img/F12.png";
import Pesos from "../img/Pesos.png";

const Home = () => {
  return (
    <div>
      <div className="bghome text-white bg-no-repeat bg-cover block  ">
        <div className="flex justify-center items-center  ">
          <div className=" pt-48  ">
            <p>Lorem ipsum dolor sit amet consectetur. Potenti id erat</p>
            <p> consequat purus magna a pellentesque.</p>
          </div>
        </div>

        {/* ............gradient............ */}
        <div className=" bg-gradient-to-t from-white ">
          <div className=" flex justify-between relative pl-12 pr-12">
            <div className="pt-20">
              <div className="BG px-5 rounded-md ">
                <div className="Orange text-left pb-2 pt-4 "> Top Deals</div>
                <img className="md:w-100 md:h-100 " src={F1} alt="F1" />
                <div className="Blue text-left pb-4 pt-2"> See all Details</div>
              </div>
            </div>

            <div className="pt-20">
              <div className="BG px-5 rounded-md">
                <div className="Orange text-left pb-2 pt-4 ">Free Shipping</div>
                <img className="md:w-full md:h-100 " src={F2} alt="F2" />
                <div className="Blue text-left pb-4 pt-2 "> Learn More</div>
              </div>
            </div>

            <div className="pt-20">
              <div className="BG px-5  rounded-md">
                <div className="Orange text-left pb-2 pt-4  ">
                  Shop by Categories
                </div>
                <img className="md:w-full md:h-100 " src={F3} alt="F3" />
                <div className="Blue text-left pb-4 pt-2 ">
                  Shop by Categories
                </div>
              </div>
            </div>

            <div className="pt-20">
              <div className="sign rounded-md text-black text-sm  pb-8">
                <p className="pt-6 pb-2">Sign up for the best experience</p>
                <button className="bg-orange-500 rounded-sm px-24 py-2 text-white">
                  Sign up
                </button>
              </div>
              <img className="md:w-full md:h-100 pt-4 " src={F4} alt="F4" />
            </div>
          </div>
        </div>
      </div>

      <div className="pahiram text-left pl-12 pt-6 pb-6">
        <h1>Popular products in Pahiram</h1>
      </div>

      {/* ..............................f2................ */}
      <div>
        <div className=" flex justify-between pl-12 pr-12">
          <div>
            <div className="bg-neutral-100 px-5 rounded-md pt-8 ">
              <img className="md:w-full md:h-100 " src={F5} alt="F5" />
              <div>
                <div className="lorem text-left pb-4 pt-4">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <p>Lacus placerat tempor sit tortor velit.</p>
                </div>
                <div className="flex justify-between pb-6">
                  <div className="flex space-x-4">
                    <div className="pl-4">
                      <img
                        className="md:w-full md:h-100 "
                        src={Pesos}
                        alt="Pesos"
                      />
                    </div>
                    <div className="price">500</div>
                  </div>
                  <div className=" text-neutral-500">1.3K Sold</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-neutral-100 px-5  rounded-md pt-8 ">
              <img className="md:w-full md:h-100 " src={F6} alt="F6" />
              <div>
                <div className="lorem text-left pb-4 pt-4">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <p>Lacus placerat tempor sit tortor velit.</p>
                </div>
                <div className="flex justify-between pb-6">
                  <div className=" flex space-x-4">
                    <div className="pl-4">
                      <img
                        className="md:w-full md:h-100 "
                        src={Pesos}
                        alt="Pesos"
                      />
                    </div>
                    <div className="price">500</div>
                  </div>
                  <div className=" text-neutral-500">1.3K Sold</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-neutral-100 px-5 pt-8 rounded-md ">
              <img className="md:w-full md:h-100 " src={F7} alt="F7" />
              <div>
                <div className="lorem text-left pb-4 pt-4">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <p>Lacus placerat tempor sit tortor velit.</p>
                </div>

                <div className="flex justify-between pb-6">
                  <div className=" flex space-x-4">
                    <div className="pl-4">
                      <img
                        className="md:w-full md:h-100 "
                        src={Pesos}
                        alt="Pesos"
                      />
                    </div>
                    <div className="price">200</div>
                  </div>
                  <div className=" text-neutral-500">1.3K Sold</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-neutral-100 px-5 rounded-md pt-8 ">
              <img className="md:w-full md:h-100 " src={F8} alt="F8" />
              <div>
                <div className="lorem text-left pb-4 pt-4">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <p>Lacus placerat tempor sit tortor velit.</p>
                </div>

                <div className="flex justify-between pb-6">
                  <div className=" flex space-x-4">
                    <div className="pl-4">
                      <img
                        className="md:w-full md:h-100 "
                        src={Pesos}
                        alt="Pesos"
                      />
                    </div>
                    <div className="price">350</div>
                  </div>
                  <div className="text-neutral-500">1.3K Sold</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ....................f3.................. */}
      <div>
        <div className=" flex justify-between pl-12 pr-12 mt-12">
          <div>
            <div className="bg-neutral-100 px-5 rounded-md pt-8 ">
              <img className="md:w-full md:h-100 " src={F9} alt="F9" />
              <div>
                <div className="lorem text-left pb-4 pt-4">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <p>Lacus placerat tempor sit tortor velit.</p>
                </div>
                <div className="flex justify-between pb-6">
                  <div className="flex space-x-4">
                    <div className="pl-4">
                      <img
                        className="md:w-full md:h-100 "
                        src={Pesos}
                        alt="Pesos"
                      />
                    </div>
                    <div className="price">1,500</div>
                  </div>
                  <div className=" text-neutral-500">1.3K Sold</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-neutral-100 px-5  rounded-md pt-8 ">
              <img className="md:w-full md:h-100 " src={F10} alt="F10" />
              <div>
                <div className="lorem text-left pb-4 pt-4">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <p>Lacus placerat tempor sit tortor velit.</p>
                </div>
                <div className="flex justify-between pb-6">
                  <div className="flex space-x-4">
                    <div className="pl-4">
                      <img
                        className="md:w-full md:h-100 "
                        src={Pesos}
                        alt="Pesos"
                      />
                    </div>
                    <div className="price">18,000</div>
                  </div>
                  <div className=" text-neutral-500">1.3K Sold</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-neutral-100 px-5 pt-8 rounded-md ">
              <img className="md:w-full md:h-100 " src={F11} alt="F11" />
              <div>
                <div className="lorem text-left pb-4 pt-4">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <p>Lacus placerat tempor sit tortor velit.</p>
                </div>

                <div className="flex justify-between pb-6">
                  <div className=" flex space-x-4">
                    <div className="pl-4">
                      <img
                        className="md:w-full md:h-100 "
                        src={Pesos}
                        alt="Pesos"
                      />
                    </div>
                    <div className="price">17,000</div>
                  </div>
                  <div className=" text-neutral-500">1.3K Sold</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-neutral-100 px-5 rounded-md pt-8 ">
              <img className="md:w-full md:h-100 " src={F12} alt="F12" />
              <div>
                <div className="lorem text-left pb-4 pt-4">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <p>Lacus placerat tempor sit tortor velit.</p>
                </div>

                <div className="flex justify-between pb-6">
                  <div className=" flex space-x-4">
                    <div className="pl-4">
                      <img
                        className="md:w-full md:h-100 "
                        src={Pesos}
                        alt="Pesos"
                      />
                    </div>
                    <div className="price">550</div>
                  </div>
                  <div className="text-neutral-500">1.3K Sold</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .........See more........ */}
      <div className=" flex justify-center mt-12 mb-2">
        <button className="bg-o px-72 py-1 rounded-sm text-white">
          SEE MORE
        </button>
      </div>

      <div className="pahiram text-left pl-12 pt-2 pb-6">
        <h1>SALE!!!</h1>
      </div>

      {/* ...............page 2................ */}
      <div>
        <div className=" flex justify-between pl-12 pr-12">
          <div>
            <div className="bg-neutral-100 px-5 rounded-md pt-8 ">
              <img className="md:w-full md:h-100 " src={F5} alt="F5" />
              <div>
                <div className="lorem text-left pb-4 pt-4">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <p>Lacus placerat tempor sit tortor velit.</p>
                </div>
                <div className="flex justify-between pb-6">
                  <div className="flex space-x-4">
                    <div className="pl-4">
                      <img
                        className="md:w-full md:h-100 "
                        src={Pesos}
                        alt="Pesos"
                      />
                    </div>
                    <div className="price">500</div>
                  </div>
                  <div className=" text-neutral-500">1.3K Sold</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-neutral-100 px-5  rounded-md pt-8 ">
              <img className="md:w-full md:h-100 " src={F6} alt="F6" />
              <div>
                <div className="lorem text-left pb-4 pt-4">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <p>Lacus placerat tempor sit tortor velit.</p>
                </div>
                <div className="flex justify-between pb-6">
                  <div className=" flex space-x-4">
                    <div className="pl-4">
                      <img
                        className="md:w-full md:h-100 "
                        src={Pesos}
                        alt="Pesos"
                      />
                    </div>
                    <div className="price">500</div>
                  </div>
                  <div className=" text-neutral-500">1.3K Sold</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-neutral-100 px-5 pt-8 rounded-md ">
              <img className="md:w-full md:h-100 " src={F7} alt="F7" />
              <div>
                <div className="lorem text-left pb-4 pt-4">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <p>Lacus placerat tempor sit tortor velit.</p>
                </div>

                <div className="flex justify-between pb-6">
                  <div className=" flex space-x-4">
                    <div className="pl-4">
                      <img
                        className="md:w-full md:h-100 "
                        src={Pesos}
                        alt="Pesos"
                      />
                    </div>
                    <div className="price">200</div>
                  </div>
                  <div className=" text-neutral-500">1.3K Sold</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-neutral-100 px-5 rounded-md pt-8 ">
              <img className="md:w-full md:h-100 " src={F8} alt="F8" />
              <div>
                <div className="lorem text-left pb-4 pt-4">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <p>Lacus placerat tempor sit tortor velit.</p>
                </div>

                <div className="flex justify-between pb-6">
                  <div className=" flex space-x-4">
                    <div className="pl-4">
                      <img
                        className="md:w-full md:h-100 "
                        src={Pesos}
                        alt="Pesos"
                      />
                    </div>
                    <div className="price">350</div>
                  </div>
                  <div className="text-neutral-500">1.3K Sold</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* .........See more........ */}
      <div className=" flex justify-center mt-12 mb-12">
        <div className="bg-o px-72 rounded-sm py-1 text-white">SEE MORE</div>
      </div>
    </div>
  );
};

export default Home;
