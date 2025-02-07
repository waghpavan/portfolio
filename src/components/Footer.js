import { FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    const handleScroll = (section) => {
        document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    };

    const navItems = [
        { name: "Profile" },
        { name: "Skills" },
        { name: "Projects" },
    ];

    return (
        <footer className="flex flex-col items-center justify-center text-center py-8 space-y-4 text-gray-700 dark:text-gray-300">
            {/* Name and Role */}
            <h2 className="text-2xl font-semibold">Pavan</h2>
            <p className="text-sm">Full stack Developer</p>

            {/* Navigation Links */}
            <div className="p-8 flex gap-6 font-bold">
            {navItems.map((item) => (
                <li
                    key={item.name}
                    className={`flex cursor-pointer text-sm md:text-[15px] transition-colors duration-300 list-none "text-gray-500 dark:text-gray-300 hover:underline"
                        }`}
                    onClick={() => handleScroll(item.name)}
                >
                    {item.name}
                </li>
            ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-8 mt-12 text-2xl animate-fade-in">
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
            </div>

            {/* Copyright */}
            <p className="text-xs dark:text-gray-300 text-gray-500 mt-4">© Copyright Pavan 2025. All rights reserved</p>
        </footer>
    );
};

export default Footer;
