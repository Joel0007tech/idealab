import {React, useState} from "react";
import { NavLinks, company} from ".";
import { Link as ScrollLink } from "react-scroll";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoPython } from "react-icons/io";
import { SiScratch } from "react-icons/si";
import { Element } from 'react-scroll';
import logo from "../assets/WhatsApp Image 2023-11-03 at 9.00.00 PM.jpeg";
import firstImage from "../assets/first idealab.jpg";
import secondImage from "../assets/online class.jpg";
import thirdImage from "../assets/pressing computer.jpg"
import innovasionImg from "../assets/kids-technology.jpeg"
import techImg from "../assets/OIP.jfif"
import entImg from "../assets/R.jfif"
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
  const circle ={
    image:{
      width: 200,
      height: 200,
      borderRadius: 1000
    }
  }

  return (
    <div>
      <nav className="flex justify-around p-7 sm:hidden bg-slate-300" >
        <img src={logo} alt="logo" className="h-[70px] w-[100px]" data-aos="zoom-in"
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
      <div className='sm:block sm:w-full hidden overflow-hidden sm:bg-slate-500'>
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
      <section>
        <h3 className="bg-black w-full sm:w-full p-3 text-center m-auto font-bold text-white text-2xl sm:text-lg">
          ICT For kids Training Programs
        </h3>
      </section>
      <section className="pt-3 bg-slate-200 sm:p-3">
        <div className="text-center">
          <h3 className="text-2xl font-bold sm:font-semibold sm:text-md sm:mt-3">It is time to prepare your kids for the digital age</h3>
          <h4 className="text-xl font-semibold sm:text-lg sm:mt-3">Empower the Next Generation of Creators and Problem-Solvers</h4>
          <p className="leading-relaxed pt-2 text-md sm:text-sm">IdeaLab Academy is Nigeria’s leading STEM education institute providing sustainable skills to the <br/> 
          next generation. We believe that skill acquisition and the traditional school system can go hand-in-hand.<br/> 
          Currently, we offer courses like Python coding, HTML/CSS, Scratch coding, graphic design, Digital Art, Entrepreneurship,<br/>
          Chess and monopoly, and creative writing. Our classes include weekend coding courses, holiday coding camps and STEM workshops
          From the age of 5,<br/>
          we believe the seed of the next big thing in technology and innovation can be planted and nurtured for a sustainable future.</p>
          <h5 className="font-semibold text-xl pt-3">Our Approach</h5>
          <p className="text-md sm:text-sm sm:mt-3 sm:pb-3">We believe that it is not enough to learn skills. Our students should be able to use their skills to innovate<br/>
           and create value. Our model is anchored on a three-pronged approach of <em className="2xl:hidden sm:block"> <strong>TECHNOLOGY, INNOVATION & ENTREPRENEURSHIP.</strong></em></p>
           {/* <br className="2xl:hidden sm:block"/> */}
            {/* <span className="text-yellow-500 bg-black p-1 pt-0 pr-2 pl-2 border
            rounded-md cursor-pointer sm:p-2 sm:pl-2 sm:pr-2 sm:mt-6 sm:hidden">
            Technology</span> <br className="2xl:hidden sm:block"/>
           <span className="text-white 2xl:bg-yellow-700 p-1 pt-0 pr-2 pl-2 2xl:border 2xl:rounded-md ml-1 cursor-pointer sm:p-2 sm:pl-2 sm:pr-2
            sm:mt-3 sm:hidden">Innovation
           </span><br className="2xl:hidden sm:block"/><span className="2xl:bg-white p-1 pt-0 pr-2 pl-2 border rounded-md ml-1 cursor-pointer
            sm:p-2 sm:pl-2 sm:pr-2 sm:mt-3 sm:hidden">
            and Entrepreneurship</span></p> */}
            <div className="grid grid-cols-2 justify-center mt-5 sm:flex sm:flex-col sm:gap-2">
            <div className="flex flex-col gap-3 border rounded-md bg-slate-300 mt-3 p-4 pt-6 w-fit m-auto sm:w-80">
              <img src={techImg} alt="tech-image" className="m-auto" style={circle.image}/>
              <h3 className="font-semibold text-xl text-yellow-500 bg-black p-2 pr-5 pl-5 pb-2 pt-1 border rounded-md w-fit m-auto mt-6">Technology</h3>
            <p className="text-md mt-1">Our first step is giving kids the tech skills required to be up to date in a fast changing world</p>
            </div>
            <div className="flex flex-col gap-3 border rounded-md bg-slate-300 mt-3 p-4 pt-6 pb-4 w-fit m-auto sm:w-80">
              <img src={innovasionImg} alt="innovationimage" className="m-auto" style={circle.image}/>
              <h3 className="font-semibold text-xl text-white bg-yellow-700 p-2 pr-5 pl-5 pb-2 pt-1 border rounded-md w-fit m-auto mt-6">Innovation</h3>
            <p className="text-md mt-1">We instill in our students the ability to harness their skills and use them to solve societal problems</p>
            </div>
            </div>
            <div className="flex flex-col gap-3 border rounded-md bg-slate-300 mt-3 p-4 pt-6 w-fit m-auto sm:w-80"> 
            <img src={entImg} alt="entrepreneurimage" className="m-auto" style={circle.image}/>
              <h3 className="font-semibold text-xl bg-white p-2 pr-5 pl-5 pb-2 pt-1 border rounded-md w-fit m-auto mt-4">Entrepreneurship</h3>
            <p className="text-md mt-1">We train them to develop the entrepreneurial skill-set and mindset that will enable
             them launch their<br/> innovation into profitable
             business</p>
             </div>
        </div>
        <p className="text-md mt-10 text-center italic">"Learning to code stretches your mind, and helps you think better. It creates a way of thinking about<br/> 
        things that I think is helpful in all domains."<br/>
         <span>---Bill Gates <br/>
             Co-founder Microsoft---</span> 
              </p>
              <div className="mt-10 p-9 bg-slate-500 w-full justify-center">
                <h5 className="text-center text-2xl font-bold">Why Idealab?</h5>
                <div className="flex flex-row gap-3 justify-center pt-4 sm:flex sm:flex-col">
                <div className="flex flex-col p-5 bg-yellow-700 gap-3 mt-4 border-black rounded-b-2xl">
                  <h4 className="font-bold">DESIGN THINKING APPROACH</h4>
                  <p className="font-semibold">We believe that the main aim of learning to<br/> 
                  code is to solve problems, so we take our students<br/> 
                  through the five-step design thinking process<br/> Empathize, Define,
                    Ideate, Prototype and Test<br/> which is a human-centred approach
                    to innovation<br/> and problem-solving made popular by Stanford<br/> 
                    University’s Design School.</p>
                </div>
                <div className="flex flex-col p-5 bg-yellow-700 gap-3 mt-4 border-black rounded-b-2xl w-fit">
                  <h4 className="font-bold text-center">EXPERIENCED, AND FRIENDLY INSTRUCTORS</h4>
                  <p className="font-semibold">All our instructors are STEM (Science, Technology,<br/> Engineering, Mathematics) graduates
                  who are<br/> passionate about what they do. Our work culture<br/> ensures that we attract fun-loving,
                  down-to-earth<br/> instructors who work to make learning fun,<br/> inspiring, and productive for our
                   students.</p>
                </div>
                <div className="flex flex-col p-5 bg-yellow-700 gap-3 mt-4 border-black rounded-b-2xl">
                  <h4 className="font-bold">PROJECT-BASED LEARNING</h4>
                  <p className="relative bottom-1 font-semibold">Our lessons connect what our students learn to <br/> 
                 real-world scenarios. Students learn with the same<br/> 
                 approach they will eventually use in their hobbies,<br/> 
                 passions, and careers. This ingrains essential <br/>
                 problem-solving techniques within them early on,<br/>drastically increasing their chances of success in
                 <br/>whatever career they choose once their education<br/> has completed.</p>
                </div>
              </div>
              </div>
        </section>
        <Element name="courses">
          <h3 className="text-center font-bold text-2xl pt-7">OUR COURSES</h3>
          <div className="flex flex-col justify-center gap-3 p-10">
            <div className="flex flex-row gap-3 p-4 bg-slate-500 border rounded-lg justify-center m-auto w-fit sm:flex sm:flex-col">
            <AiFillHtml5 className="w-60 h-60 sm:w-28 sm:h-28 sm:m-auto"/>
            <div className="flex flex-col gap-5 p-5">
            <h3 className="text-center font-bold text-xl">HTML</h3>
            <p className="font-semibold sm:text-center"><em>HyperText Markup Language (HTML) is the standard markup<br/> language for documents
             designed to be displayed in a web<br/> browser. It defines the content and structure
            of web content.<br/> It is often assisted by technologies such as Cascading<br/> Style Sheets
            and scripting languages such as JavaScript.</em></p>
            <a href="https://www.bing.com/search?EID=MBHSC&form=BGGCDF&pc=BG00&q=html" target="_blank" 
            className="bg-black text-white font-semibold p-2 pl-4 pr-4 border rounded-md w-fit m-auto 
            border-none cursor-pointer hover:bg-slate-50 hover:text-black">View More</a>
            </div>
            </div>
            <div className="flex flex-row gap-3 p-4 bg-slate-500 border rounded-lg justify-center m-auto w-fit mr-28 sm:m-auto sm:flex sm:flex-col">
            <IoLogoPython className="w-60 h-60 sm:w-28 sm:h-28 sm:m-auto"/>
            <div className="flex flex-col gap-5 p-5">
            <h3 className="text-center font-bold text-xl">PYTHON PROGRAMMING</h3>
            <p className="font-semibold sm:text-center"><em>Python is a high-level, general-purpose programming<br/> language. Its design
            philosophy emphasizes code readability with the use<br/> of significant indentation.
            Python is dynamically typed and<br/> garbage-collected. It supports multiple programming
            paradigms,<br/> including structured, object-oriented and functional programming.<br/> It is
            often described as a "batteries included"<br/> language due to its comprehensive standard library.</em></p>
            <a href="https://www.bing.com/search?EID=MBHSC&form=BGGCDF&pc=BG00&q=python+programming" target="_blank"
             className="bg-black text-white font-semibold p-2 pl-4 pr-4 border rounded-md w-fit m-auto 
            border-none cursor-pointer hover:bg-slate-50 hover:text-black">View More</a>
            </div>
            </div>
            <div className="flex flex-row gap-3 p-4 bg-slate-500 border rounded-lg justify-center m-auto w-fit sm:flex sm:flex-col">
              <SiScratch className="w-60 h-60 sm:w-28 sm:h-28 sm:m-auto"/>
              <div className="flex flex-col gap-5 p-5">
              <h3 className="text-center font-bold text-xl">SCRATCH PROGRAMMING</h3>
              <p className="font-semibold sm:text-center"><em>Scratch is a high-level, block-based visual programming language<br/> and
               website aimed primarily at children as an<br/> educational tool, with a target
                audience of ages 8 to 16.<br/> Users on the site can create projects on the
                website using<br/> a block-like interface. Scratch was conceived and designed<br/>
                through collaborative National Science Foundation grants<br/> awarded to Mitchel
               Resnick and Yasmin Kafai.</em></p>
               <a href="https://www.bing.com/search?EID=MBHSC&form=BGGCDF&pc=BG00&q=scratch+programming" target="_blank" 
               className="bg-black text-white font-semibold p-2 pl-4 pr-4 border rounded-md w-fit m-auto 
               border-none cursor-pointer hover:bg-slate-50 hover:text-black">View More</a>
              </div>
            </div>
          </div>
          </Element>
      <Element className="p-7 bg-slate-200" name="Training">
        <h3 className="text-black font-bold text-2xl text-center">OUR PACKAGES</h3>
        <div className="flex flex-col gap-5 pt-10">
          <div className="flex gap-6 sm:flex sm:flex-col justify-center">
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
          <div className="flex gap-6 sm:flex sm:flex-col justify-center">
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
      </Element>
      <Element className="w-full bg-slate-500 m-auto p-10 mb-4" name="about">
          <h1 className="mb-5 font-bold text-black text-3xl text-center">ABOUT US </h1>
          <p className="leading-relaxed text-black font-semibold text-center">At IdeaLab Academy, we are saddled with the responsibility of empowering the next generation of<br/>
           innovators, creators, and leaders. As educators and mentors, we saw first-hand the transformative power<br/>
          of hands-on learning and the importance of developing in-demand skills at an early age. Driven by a mission<br/>
          to make quality education accessible to all, we set out to build an engaging, affordable, and inclusive learning<br/>
           environment that would inspire young minds to explore their interests and unlock their full potential.</p>
           <h5 className="mt-10 text-black font-semibold text-center text-xl">Our Courses;</h5>
           <div className="mt-5 gap-3 flex flex-row justify-center sm:flex sm:flex-col">
           <p className="p-3 border-none rounded-md w-fit font-bold text-md pl-5 pr-5 bg-white sm:m-auto">HTML/CSS</p>
           <p className="p-3 border-none rounded-md w-fit font-bold text-md pl-5 pr-5 bg-white sm:m-auto">PYTHON</p>
           <p className="p-3 border-none rounded-md w-fit font-bold text-md pl-5 pr-5 bg-white sm:m-auto">SCRATCH CODING</p>
           <p className="p-3 border-none rounded-md w-fit font-bold text-md pl-5 pr-5 bg-white sm:m-auto">GRAPHIC DESIGN</p>
           <p className="p-3 border-none rounded-md w-fit font-bold text-md pl-5 pr-5 bg-white sm:m-auto">CHESS</p>
           <p className="p-3 border-none rounded-md w-fit font-bold text-md pl-5 pr-5 bg-white sm:m-auto">DIGITAL ART</p>
           </div>
      </Element>
      <Element className="bg-slate-400 p-20 bottom-0 w-full sm:p-2 sm:bg-slate-600" name="contact">
       <div className="flex flex-col">
        <div className="flex sm:flex sm:flex-col sm:pt-4">
          <div className="flex gap-5 sm:flex sm:flex-col sm:m-auto">
            <input type="text" name="" id="" className="p-1 w-[500px] sm:w-[250px] sm:p-4 border rounded"/>
            <a href="http://" className="text-black bg-white border w-[130px] text-center
            rounded pl-7 pr-7 p-1 pt-4 sm:pt-3 sm:p-3 sm:m-auto hover:text-white hover:bg-green-600 hover:border-none">Search</a>
          </div>
         <div className="flex flex-col pl-8 relative bottom-7 sm:flex sm:flex-col sm:justify-center sm:pt-16">
          <div className="flex gap-6 sm:flex sm:flex-col sm:m-auto">
            <a href="http://" className=" text-white hover:text-black text-lg font-semibold sm:text-sm">Home</a>
            <a href="http://" className=" text-white hover:text-black text-lg font-semibold sm:text-sm">Our Courses</a>
            <a href="http://" className=" text-black text-lg font-semibold sm:text-sm">Training Packages</a>
            <a href="http://" className="hover:text-black text-lg font-semibold text-white sm:text-sm">About Us</a>
            <a href="http://" className=" text-white hover:text-black text-lg font-semibold sm:text-sm">Contact Us</a>
          </div>
          <a href="http://" className=" text-white hover:text-black text-center text-lg
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
              className="text-green-900 text-center font-semibold hover:underline text-[19px] sm:text-sm"
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
      <h3 className="text-3xl font-bold text-white text-center sm:text-lg">OUR PACKAGES</h3>
      <div className="flex flex-col gap-6 pt-3" 
      data-aos="fade-up"
          data-aos-duration="1000">
      <a href="http://" className="text-green-900 text-center font-semibold hover:underline text-[19px] sm:text-sm">
        Summary/ Holiday Classes for kids</a>
      <a href="http://" className="text-green-900 text-center font-semibold hover:underline text-[19px] sm:text-sm">
        Weekend/ Saturday Classes</a>
      <a href="http://" className="text-green-900 text-center font-semibold hover:underline text-[19px] sm:text-sm">
        Evening/ After School Classes</a>
      </div>
      
     </div>
     <div className="flex flex-col">
      <h3 className="text-3xl font-bold text-white text-center sm:text-lg">CONTACT US</h3>
      <div className="flex flex-col gap-6 pt-3 sm:flex sm:flex-col">
        <div className="flex gap-3 sm:m-auto" data-aos="fade-up"
          data-aos-duration="1000">
          <IoMdPin className="text-green-900 text-2xl sm:text-md"/>
        <p className="text-white 2xl:text-lg text-center 2xl:relative 2xl:bottom-1 sm:text-sm
        sm:relative sm:top-1">Zone B, Block 2, Shop 8, OAU <br/>
      central market</p>
      </div>
      <div className="flex gap-3 sm:m-auto" data-aos="fade-up" 
      data-aos-duration="1000">
        <HiPhone className="text-green-900 text-2xl"/>
      <a href=" https://wa.me/+2348136621141?text=Hello%20there!, my name is____" className="text-white font-normal
       hover:underline text-[19px] relative bottom-1 sm:text-sm sm:relative sm:top-1" target="_blank">+234-813-662-1141</a>
      </div>
      <div className="flex gap-3 sm:m-auto" data-aos="fade-up" 
      data-aos-duration="1000">
        <HiMail className="text-green-900 text-3xl"/>
      <a href="mailto:idealabacademy@gmail.com" className="text-white font-normal hover:underline text-[19px] relative bottom-1 sm:text-sm
      sm:relative sm:top-1">
        idealabacademy@gmail.com
        </a>
      </div>
      </div>
      
     </div>
       </div>
      <p className="text-white text-center sm:text-sm relative top-12 sm:relative sm:top-0">© 2023 idealab. All rights reserved.</p>
      </Element>
    </div>
  );
};

export default Home;
