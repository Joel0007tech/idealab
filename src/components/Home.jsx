import {React, useState} from "react";
import { NavLinks, company} from ".";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/WhatsApp Image 2023-11-03 at 9.00.00 PM.jpeg";
import firstImage from "../assets/first idealab.jpg";
import secondImage from "../assets/online class.jpg";
import thirdImage from "../assets/pressing computer.jpg"
import {IoMdPin} from "react-icons/io";
import {HiMail, HiPhone} from "react-icons/hi";
import {AiOutlineMenu} from "react-icons/ai";
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
          <p className="text-yellow-300 font-extrabold relative top-4 right-52 text-lg">idea
          <span className="text-white font-extrabold">Lab</span></p>
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
      <div className='sm:block sm:w-full hidden overflow-hidden'>
            <div className='flex p-3 justify-between'>
            <img src={logo} alt="logo" className="h-[40px] w-[60px]"  data-aos="zoom-in"
          data-aos-duration="2000"/>
           <p className="text-yellow-300 font-bold relative top-4 right-24 text-lg">idea<span className="text-white font-bold">Lab</span></p>
              <AiOutlineMenu className='text-2xl text-black relative float-left' onClick={()=> setOpen(!open)}/>
              </div>
              {open && (
                  <ul className='flex flex-col gap-6 p-10 mt-12 sm:mt-0 bg-black' data-aos="fade-left" data-aos-duration="1000">
                  {NavLinks.map((lists) => (
                 <li key={lists} className='text-white hover:text-yellow-500 text-center'>
                  <ScrollLink to={lists.destination} className=' cursor-pointer' smooth={true} duration={500}>{lists.text}</ScrollLink>
                 </li> )
                  )}
              </ul>
                )
              }
        </div>
      <section className="pt-3">
        <h3 className="bg-black w-[1400px] sm:w-[300px] p-3 text-center m-auto font-bold text-white text-2xl sm:text-lg">
          ICT For kids Training Programs
        </h3>
      </section>
      <section className="flex justify-center p-7 bg-slate-200">
        <div className="flex flex-col gap-5">
          <div className="flex gap-6 sm:flex sm:flex-col">
            <div className="flex flex-col hover:border-[7px] border-solid border-slate-300 p-8 gap-3 bg-white rounded-2xl"
             data-aos="flip-down"
          data-aos-duration="2000">
             <h3 className="text-xl text-black font-bold">Summer/Holiday Classes <br/>
             for Kids</h3>
             <img src={firstImage} alt="summer"  className=" border rounded-3xl"/>
             <p className="m-auto">______________</p>
             <a href="http://" className="m-auto hover:text-yellow-500">{cardLink}</a>
            </div>
            <div className="flex flex-col hover:border-[7px] border-solid border-slate-300 p-8 gap-3 bg-white rounded-2xl"
             data-aos="flip-down"
          data-aos-duration="2000">
             <h3 className="text-xl text-black font-bold">Weekend/ Saturday<br/>
             Classes</h3>
             <img src={secondImage} alt="weekend" className=" border rounded-3xl"/>
             <p className="m-auto">______________</p>
             <a href="http://" className="m-auto hover:text-yellow-500">{cardLink}</a>
            </div>
            <div className="flex flex-col hover:border-[7px] border-solid border-slate-300 p-8 gap-3 bg-white rounded-2xl"
             data-aos="flip-down"
          data-aos-duration="2000">
             <h3 className="text-xl text-black font-bold">Evening/ After School<br/>
              Classes</h3>
              <img src={thirdImage} alt="evening"  className=" border rounded-3xl"/>
              <p className="m-auto">______________</p>
             <a href="http://" className="m-auto hover:text-yellow-500">{cardLink}</a>
            </div>
          </div>
          <div className="flex gap-6 sm:flex sm:flex-col">
            <div className="flex flex-col hover:border-[7px] border-solid border-slate-300 p-8 gap-3  bg-white rounded-2xl"
             data-aos="flip-up"
          data-aos-duration="2000">
             <h3 className="text-xl text-black font-bold">Languages</h3>
             <img src={thirdImage} alt="online"  className=" border rounded-3xl"/>
             <p className="m-auto">✔ English</p>
             <p className="m-auto">✔ Hausa</p>
             <p className="m-auto">✔ Igbo</p>
             <p className="m-auto">✔ Yoruba</p>
             <p className="m-auto">______________</p>
             <a href="http://" className="m-auto hover:text-yellow-500">{cardLink}</a>
            </div>
            <div className="flex flex-col hover:border-[7px] border-solid border-slate-300 p-8 gap-3 bg-white rounded-2xl"
             data-aos="flip-up"
          data-aos-duration="2000">
             <h3 className="text-xl text-black font-bold">live online training</h3>
             <img src={firstImage} alt="live"  className=" border rounded-3xl"/>
             <p className="m-auto">______________</p>
             <a href="http://" className="m-auto hover:text-yellow-500">{cardLink}</a>
            </div>
            <div className="flex flex-col hover:border-[7px] border-solid border-slate-300 p-8 gap-3 bg-white rounded-2xl"
             data-aos="flip-up"
          data-aos-duration="2000">
             <h3 className="text-xl text-black font-bold">School ICT Seminars</h3>
             <img src={secondImage} alt="ict"  className=" border rounded-3xl"/>
             <p className="m-auto">______________</p>
             <a href="http://" className="m-auto hover:text-yellow-500">{cardLink}</a>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-blue-900 p-20 bottom-0 w-full sm:p-2 sm:bg-slate-600">
       <div className="flex flex-col">
        <div className="flex sm:flex sm:flex-col sm:pt-4">
          <div className="flex gap-5 sm:flex sm:flex-col sm:m-auto">
            <input type="text" name="" id="" className="p-1 w-[500px] sm:w-[250px] sm:p-4 border rounded"/>
            <a href="http://" className="text-black bg-white border w-[130px] text-center
            rounded pl-7 pr-7 p-1 pt-4 sm:pt-3 sm:p-3 sm:m-auto hover:text-white hover:bg-green-600 hover:border-none">Search</a>
          </div>
         <div className="flex flex-col pl-8 relative bottom-7 sm:flex sm:flex-col sm:justify-center sm:pt-16">
          <div className="flex gap-6 sm:flex sm:flex-col sm:m-auto">
            <a href="http://" className=" text-white hover:text-red-800 text-lg font-semibold sm:text-sm">Home</a>
            <a href="http://" className=" text-white hover:text-red-800 text-lg font-semibold sm:text-sm">Our Courses</a>
            <a href="http://" className=" text-gray-500 text-lg font-semibold sm:text-sm">Training Packages</a>
            <a href="http://" className="hover:text-red-800 text-lg font-semibold text-white sm:text-sm">About Us</a>
            <a href="http://" className=" text-white hover:text-red-800 text-lg font-semibold sm:text-sm">Contact Us</a>
          </div>
          <a href="http://" className=" text-white hover:text-red-800 text-center text-lg
           font-semibold relative top-8 sm:text-sm sm:right-4">
            Blog & News</a>  
          </div>  
        </div>
       </div>
       <div className="flex pt-14 2xl:p-14 gap-9 justify-between sm:flex sm:flex-col">
       <img src={logo} alt="logo" className="h-[120px] w-[130px] sm:m-auto"/>
       <div className="flex flex-col sm:flex sm:flex-col">
       <h3 className="text-3xl font-bold text-white text-center sm:text-lg">THE COMPANY</h3>
       <ul
          className="flex flex-col justify-center gap-6 pt-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {company.map((lists) => (
            <li
              key={lists}
              className="text-green-500 text-center font-semibold hover:underline text-[19px] sm:text-sm"
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
      <h3 className="text-3xl font-bold text-white text-center sm:text-lg">OUR COURSES</h3>
      <div className="flex flex-col gap-6 pt-3" 
      data-aos="fade-up"
          data-aos-duration="1000">
      <a href="http://" className="text-green-500 text-center font-semibold hover:underline text-[19px] sm:text-sm">
        Summary/ Holiday Classes for kids</a>
      <a href="http://" className="text-green-500 text-center font-semibold hover:underline text-[19px] sm:text-sm">
        Weekend/ Saturday Classes</a>
      <a href="http://" className="text-green-500 text-center font-semibold hover:underline text-[19px] sm:text-sm">
        Evening/ After School Classes</a>
      </div>
      
     </div>
     <div className="flex flex-col">
      <h3 className="text-3xl font-bold text-white text-center sm:text-lg">CONTACT US</h3>
      <div className="flex flex-col gap-6 pt-3 sm:flex sm:flex-col">
        <div className="flex gap-3 sm:m-auto" data-aos="fade-up"
          data-aos-duration="1000">
          <IoMdPin className="text-green-700 text-2xl sm:text-md"/>
        <p className="text-white 2xl:text-lg text-center 2xl:relative 2xl:bottom-1 sm:text-sm
        sm:relative sm:top-1">Zone B, Block 2, Shop 8, OAU <br/>
      central market</p>
      </div>
      <div className="flex gap-3 sm:m-auto" data-aos="fade-up" 
      data-aos-duration="1000">
        <HiPhone className="text-green-700 text-2xl"/>
      <a href="wa.me/2347064289990" className="text-white font-normal
       hover:underline text-[19px] relative bottom-1 sm:text-sm sm:relative sm:top-1">+234-813-662-1141</a>
      </div>
      <div className="flex gap-3 sm:m-auto" data-aos="fade-up" 
      data-aos-duration="1000">
        <HiMail className=" text-green-700 text-3xl"/>
      <a href="http://" className="text-white font-normal hover:underline text-[19px] relative bottom-1 sm:text-sm
      sm:relative sm:top-1">
        idealabacademy@gmail.com
        </a>
      </div>
      </div>
      
     </div>
       </div>
      <p className="text-white text-center sm:text-sm relative top-12 sm:relative sm:top-0">© 2023 idealab. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
