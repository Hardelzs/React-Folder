import React from "react";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };


  return (
    <div className="">
      <div className="max-w-[1400px] m-auto md:pl-20 p-4 py-16">
        <div 
        onClick={scrollToTop}
        className="absolute border border-black rounded-full p-4 w-8 h-8 right-10 -mt-10 font-3xl flex items-center justify-center  cursor-pointer">
          <p className="hover:font-extrabold"><FaArrowUp /></p>
        </div>


        <div className="grid gap-16 md:flex md:gap-20">
          {/* first one  */}


          <div className="w-full md:max-w-96 gap-5 flex flex-col">
            <div className="flex items-center gap-3">
              {" "}
    
              <p className="font-mono font-extrabold text-3xl">HdrMovie</p>
            </div>
            <div className="font-mono ">
              Be the first to know about the updates
            </div>
            <div>
              <input
              placeholder="Email Address..."
              className="border border-black p-2 px-6 rounded-md font-mono focus:outline-none border-r-0"/>
              <button className="border border-black p-2 px-6 rounded-md font-mono border-l-0">
                JOIN US
              </button>
            </div>
          </div>

          {/* second one  */}
          <div className="grid grid-cols-2 md:flex md:gap-32">
            <div className="">
              <ul className="flex flex-col gap-10">
                <li>Home</li>
                <li>Aboutus</li>
                <li>Service</li>
                <li>Contact</li>
                <li>Givenow</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Home</li>
                <li>Aboutus</li>
                <li>Service</li>
                <li>Contact</li>
                <li>Givenow</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Home</li>
                <li>Aboutus</li>
                <li>Service</li>
                <li>Contact</li>
                <li>Givenow</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Home</li>
                <li>Aboutus</li>
                <li>Service</li>
                <li>Contact</li>
                <li>Givenow</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="m-auto md:pl-20 w-full p-4 flex items-center justify-center gap-10 md:gap-80">
        <div>© 2025 HdrMovie</div>

        <div className="flex gap-4 justify-between items-center">
          <a
            href="https://x.com/hardelz23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="cursor-pointer" size={20} />
          </a>
          <a
            href="https://web.facebook.com/hardelz23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="cursor-pointer" size={20} />
          </a>
          <a
            href="https://www.instagram.com/hardelz23/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="cursor-pointer" size={20} />
          </a>
          <a
            href="https://linkedin.com/in/your_linkedin_handle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="cursor-pointer" size={20} />
          </a>
          <a
            href="https://linkedin.com/in/your_linkedin_handle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="cursor-pointer" size={20} />
          </a>
          <a
            href="https://linkedin.com/in/your_linkedin_handle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoTiktok className="cursor-pointer" size={20} />
          </a>
          <a
            href="https://linkedin.com/in/your_linkedin_handle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="cursor-pointer" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
