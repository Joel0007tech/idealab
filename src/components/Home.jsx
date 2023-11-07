import React from "react";
import { NavLinks } from ".";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/WhatsApp Image 2023-11-03 at 9.00.00 PM.jpeg";

const Home = () => {
  return (
    <div>
      <nav className="flex justify-around p-7">
        <img src={logo} alt="logo" className="h-[70px] w-[100px]" />
        <ul
          className="flex justify-center gap-6 pt-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {NavLinks.map((lists) => (
            <li
              key={lists}
              className="text-black text-center hover:text-yellow-500 text-[17px]"
            >
              <ScrollLink
                to={lists.destination}
                className=" cursor-pointer"
                smooth={true}
                duration={500}
              >
                {lists.text}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
      <section className="pt-3">
        <h3 className="bg-black w-[1400px] p-3 text-center m-auto font-bold text-white text-2xl">
          ICT For kids Training Programs
        </h3>
      </section>
      <section className="flex justify-center p-7">
        <div className="flex flex-col gap-5">
          <div className="flex gap-6">
            <div className="flex flex-col hover:border-[3px] border-solid border-slate-300 p-5 bg-white rounded-lg">
             <h3 className="text-2xl text-black font-bold">Summer/Holiday Classes <br/>
             for Kids</h3>
             <a href="http://">Learn More</a>
            </div>
            <div className="flex flex-col hover:border-[3px] border-solid border-slate-300 p-5 bg-white rounded-lg">
             <h3 className="text-2xl text-black font-bold">Weekend/ Saturday<br/>
             Classes</h3>
             <a href="http://">Learn More</a>
            </div>
            <div className="flex flex-col hover:border-[3px] border-solid border-slate-300 p-5 bg-white rounded-lg">
             <h3 className="text-2xl text-black font-bold">Evening/ After School<br/>
              Classes</h3>
             <a href="http://">Learn More</a>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col hover:border-[3px] border-solid border-slate-300 p-5 bg-white rounded-lg">
             <h3 className="text-2xl text-black font-bold">Online Video Courses</h3>
             <a href="http://">Learn More</a>
            </div>
            <div className="flex flex-col hover:border-[3px] border-solid border-slate-300 p-5 bg-white rounded-lg">
             <h3 className="text-2xl text-black font-bold">live online training</h3>
             <a href="http://">Learn More</a>
            </div>
            <div className="flex flex-col hover:border-[3px] border-solid border-slate-300 p-5 bg-white rounded-lg">
             <h3 className="text-2xl text-black font-bold">School ICT Seminars</h3>
             <a href="http://">Learn More</a>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-blue-700">
       <div className="flex">
       
       </div>
      </footer>
    </div>
  );
};

export default Home;
