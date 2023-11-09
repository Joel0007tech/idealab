import React from "react";
import { NavLinks, company} from ".";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/WhatsApp Image 2023-11-03 at 9.00.00 PM.jpeg";
import {IoMdPin} from "react-icons/io";
import {GoMail} from "react-icons/go"
import {BsTelephone} from "react-icons/bs"

const Home = ({
  cardLink="Learn More"
}) => {
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
             <a href="http://">{cardLink}</a>
            </div>
            <div className="flex flex-col hover:border-[3px] border-solid border-slate-300 p-5 bg-white rounded-lg">
             <h3 className="text-2xl text-black font-bold">Weekend/ Saturday<br/>
             Classes</h3>
             <a href="http://">{cardLink}</a>
            </div>
            <div className="flex flex-col hover:border-[3px] border-solid border-slate-300 p-5 bg-white rounded-lg">
             <h3 className="text-2xl text-black font-bold">Evening/ After School<br/>
              Classes</h3>
             <a href="http://">{cardLink}</a>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col hover:border-[3px] border-solid border-slate-300 p-5 bg-white rounded-lg">
             <h3 className="text-2xl text-black font-bold">Online Video Courses</h3>
             <a href="http://">{cardLink}</a>
            </div>
            <div className="flex flex-col hover:border-[3px] border-solid border-slate-300 p-5 bg-white rounded-lg">
             <h3 className="text-2xl text-black font-bold">live online training</h3>
             <a href="http://">{cardLink}</a>
            </div>
            <div className="flex flex-col hover:border-[3px] border-solid border-slate-300 p-5 bg-white rounded-lg">
             <h3 className="text-2xl text-black font-bold">School ICT Seminars</h3>
             <a href="http://">{cardLink}</a>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-blue-900 p-20 bottom-0 w-full">
       <div className="flex flex-col">
        <div className="flex">
          <div className="flex gap-5">
            <input type="text" name="" id="" className=" p-1 w-[500px] border rounded"/>
            <a href="http://" className="text-black bg-white border 
            rounded pl-7 pr-7 p-1 pt-4 text-md">Search</a>
          </div>
         <div className="flex flex-col pl-8 relative bottom-7">
          <div className="flex gap-6">
            <a href="http://" className=" text-white hover:text-red-800 text-lg font-semibold">Home</a>
            <a href="http://" className=" text-white hover:text-red-800 text-lg font-semibold">Our Courses</a>
            <a href="http://" className=" text-gray-500 text-lg font-semibold">Training Packages</a>
            <a href="http://" className="hover:text-red-800 text-lg font-semibold text-white">About Us</a>
            <a href="http://" className=" text-white hover:text-red-800 text-lg font-semibold">Contact Us</a>
          </div>
          <a href="http://" className=" text-white hover:text-red-800 text-center text-lg font-semibold relative top-8">
            Blog & News</a>  
          </div>  
        </div>
       </div>
       <div className="flex pt-14 p-14 gap-9 justify-between">
       <img src={logo} alt="logo" className="h-[120px] w-[130px]" />
       <div className="flex flex-col">
       <h3 className="text-3xl font-bold text-white text-center">THE COMPANY</h3>
       <ul
          className="flex flex-col justify-center gap-6 pt-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {company.map((lists) => (
            <li
              key={lists}
              className="text-green-500 text-center font-semibold hover:underline text-[19px]"
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
       </div>
     <div className="flex flex-col">
      <h3 className="text-3xl font-bold text-white text-center">OUR COURSES</h3>
      <div className="flex flex-col gap-6 pt-3">
      <a href="http://" className="text-green-500 text-center font-semibold hover:underline text-[19px]">
        Summary/ Holiday Classes for kids</a>
      <a href="http://" className="text-green-500 text-center font-semibold hover:underline text-[19px]">
        Weekend/ Saturday Classes</a>
      <a href="http://" className="text-green-500 text-center font-semibold hover:underline text-[19px]">
        Evening/ After School Classes</a>
      </div>
      
     </div>
     <div className="flex flex-col">
      <h3 className="text-3xl font-bold text-white text-center">CONTACT US</h3>
      <div className="flex flex-col gap-6 pt-3">
        <div className="flex">
          <IoMdPin/>
        <p className="text-white text-lg text-center">Zone B, Block 2, Shop 8, OAU <br/>
      central market</p></div>
      <div className="flex"><BsTelephone/></div>
      <a href="wa.me/2347064289990" className="text-white text-center font-semibold hover:underline text-[19px]">+234-813-662-1141</a>
      <div className="flex"><GoMail/>
      <a href="http://" className="text-green-500 text-center font-semibold hover:underline text-[19px]">mail</a></div>
      </div>
      
     </div>
       </div>
      
      </footer>
    </div>
  );
};

export default Home;
