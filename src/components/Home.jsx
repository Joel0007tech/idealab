import {React, useState} from "react";
import { NavLinks, company} from ".";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/WhatsApp Image 2023-11-03 at 9.00.00 PM.jpeg";
import {IoMdPin} from "react-icons/io";
import {HiMail, HiPhone} from "react-icons/hi";
import {BiCodeAlt} from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = ({
  cardLink="Learn More"
}) => {

  const [open, setOpen] = useState(null);

  return (
    <div>
      <nav className="flex justify-around p-7 sm:hidden" >
        <img src={logo} alt="logo" className="h-[70px] w-[100px]"  data-aos="zoom-in"
          data-aos-duration="2000"/>
        <ul
          className="flex justify-center gap-6 pt-4"
          data-aos="fade-down"
          data-aos-duration="2000"
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
      <div className='sm:block sm:w-full hidden'>
            <div className='flex p-3 justify-between'>
              <BiCodeAlt className='text-2xl text-black relative float-left' onClick={()=> setOpen(!open)}/>
              </div>
              {open && (
                  <ul className='flex flex-col gap-6 p-10 mt-12 sm:mt-0' data-aos="fade-up" data-aos-duration="1000">
                  {NavLinks.map((lists) => (
                 <li key={lists} className='text-white hover:text-green-500 text-center'>
                  <ScrollLink to={lists.destination} className=' cursor-pointer' smooth={true} duration={500}>{lists.text}</ScrollLink>
                 </li> )
                  )}
              </ul>
                )
              }
        </div>
      <section className="pt-3">
        <h3 className="bg-black w-[1400px] sm:w-[300px] p-3 text-center m-auto font-bold text-white text-2xl">
          ICT For kids Training Programs
        </h3>
      </section>
      <section className="flex justify-center p-7 ">
        <div className="flex flex-col gap-5">
          <div className="flex gap-6 sm:flex sm:flex-col">
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
          <div className="flex gap-6 sm:flex sm:flex-col">
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
        <div className="flex sm:flex sm:flex-col">
          <div className="flex gap-5 sm:flex sm:flex-col">
            <input type="text" name="" id="" className=" p-1 w-[500px] sm:w-[250px] border rounded"/>
            <a href="http://" className="text-black bg-white border 
            rounded pl-7 pr-7 p-1 pt-4 text-md sm:w-[100px] sm:m-auto">Search</a>
          </div>
         <div className="flex flex-col pl-8 relative bottom-7 sm:flex sm:flex-col">
          <div className="flex gap-6 sm:flex sm:flex-col">
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
       <div className="flex pt-14 p-14 gap-9 justify-between sm:flex sm:flex-col">
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
      <div className="flex flex-col gap-6 pt-3" 
      data-aos="fade-up"
          data-aos-duration="1000">
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
        <div className="flex gap-3" data-aos="fade-up"
          data-aos-duration="1000">
          <IoMdPin className="text-green-700 text-2xl"/>
        <p className="text-white text-lg text-center relative bottom-1">Zone B, Block 2, Shop 8, OAU <br/>
      central market</p>
      </div>
      <div className="flex gap-3" data-aos="fade-up" 
      data-aos-duration="1000">
        <HiPhone className="text-green-700 text-2xl"/>
      <a href="wa.me/2347064289990" className="text-white text-center font-semibold hover:underline text-[19px] relative bottom-1">+234-813-662-1141</a>
      </div>
      <div className="flex gap-3" data-aos="fade-up" 
      data-aos-duration="1000">
        <HiMail className=" text-green-700 text-2xl"/>
      <a href="http://" className="text-white text-center font-semibold hover:underline text-[19px] relative bottom-1">mail</a>
      </div>
      </div>
      
     </div>
       </div>
      <p className="text-white text-center">© 2023 idealab. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
