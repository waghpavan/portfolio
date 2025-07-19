import { useState, useEffect } from "react";
import { FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import ProfileImage from "../assets/Profile.jpg";

const Profile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="profile" className="mb-0 dark:text-white dark:border-white border-black border-b flex flex-col mt-10 items-center text-center py-8 md:py-8 lg:py-12">
      {/* Title */}
      <h1 className="text-2xl mt-10 md:text-3xl lg:text-2xl font-semibold leading-snug animate-fade-in-left">
        Hi, I'm <span className="text-4xl">Pavan Wagh</span> <br />
        <span className="">Full Stack Developer</span> <br />
      </h1>

      {/* Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center mt-8 max-w-5xl mx-auto px-4">
        {/* Left Info */}
        <div className="text-center md:text-left space-y-6 max-w-xs sm:max-w-sm animate-fade-in-left">
          {[
            { title: "BIOGRAPHY", content: "Hi, I'm Pavan Wagh, a Full Stack Developer passionate about designing beautiful web interfaces and solving DSA problems. Based in Pune" },
            { title: "CONTACT", content: "Pune, Maharashtra, India\npavandagaduwagh@gmail.com\n+91 8180989902" },
            { title: "SERVICES", content: "Website Design & Development\nAndroid Developer\nDSA Problem Solving" }
          ].map(({ title, content }) => (
            <div key={title}>
              <h2 className="text-lg text-left font-semibold dark:text-gray-300">{title}</h2>
              <p className="text-sm text-left ml-6 whitespace-pre-line">{content}</p>
            </div>
          ))}
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative w-44 h-56 sm:w-48 sm:h-60 md:w-56 md:h-72 bg-gradient-to-b from-blue-500 to-pink-500 rounded-2xl p-1 animate-fade-in animate-pop">
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl border-4 border-white shadow-lg"
            />
          </div>
        </div>

        {/* Right Info */}
        <div className="text-center md:text-right space-y-6 max-w-xs sm:max-w-sm animate-fade-in-right">
          {[
            { title: "YEARS OF EXPERIENCE", value: "06+ Months" },
            { title: "COMPLETED PROJECTS", value: "05+" },
            { title: "COMPANIES WORKED", value: "02+" }
          ].map(({ title, value }) => (
            <div key={title}>
              <h2 className="text-lg font-semibold dark:text-gray-300">{title}</h2>
              <p className="text-2xl font-bold">{value}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Social Media Icons */}
      <div className="flex justify-center gap-8 mt-4 text-2xl animate-fade-in">
        <a href="https://www.linkedin.com/in/pavan-wagh-b86285293/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />

        </a>
        <a href="https://github.com/waghpavan" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/pavanwagh/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
        </a>
        <a href="https://api.whatsapp.com/send?phone=8180989902&text=Hello,%20more%20information!" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://drive.google.com/file/d/1ORzHHFiXmAyaqxdMddCZDWZXBRO4TP98/view?usp=drive_link" target="_blank" download="PavanWagh.pdf" rel="noopener noreferrer">
          <FiDownload /> 
        </a>
      </div>
    </section>
  );
};

export default Profile;
