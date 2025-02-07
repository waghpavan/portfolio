import { useState, useEffect } from "react";
import { Home, Briefcase, BookOpen, Layers, Phone, Handshake, Moon, Sun } from "lucide-react";
import Bar from "./Bar";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

    // Handle Resize for Mobile/Desktop Switching
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Apply Dark Mode
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    // Function to handle smooth scrolling
    const handleScroll = (section) => {
        setActive(section);
        document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    };

    const navItems = [
        { name: "Home", icon: <Home size={22} /> },
        { name: "Skills", icon: <Layers size={22} /> },
        { name: "Qualification", icon: <BookOpen size={22} /> },
        { name: "Services", icon: <Handshake size={22} /> },
        { name: "Projects", icon: <Briefcase size={22} /> },
        { name: "Contact", icon: <Phone size={22} /> },
    ];

    return (
        <div className="dark:bg-gray-900 dark:text-white transition-all z-100" >
            {/* Desktop Navbar */}
            {!isMobile && (
                <nav className="flex fixed top-0 w-full justify-between bg-hsl(207, 4%, 28%) items-center px-64 py-8 dark:shadow-gray-700">
                    {/* Logo */}
                    <h1 className="text-lg font-semibold tracking-wide">Pavan</h1>

                    {/* Navigation Links */}
                    <ul className="flex gap-10 mt-2 text-gray-500 dark:text-gray-300">
                        {navItems.map((item) => (
                            <li
                                key={item.name}
                                className={`cursor-pointer text-[15px] mt-2 ${active === item.name ? "text-black dark:text-white " : ""
                                    }`}
                                onClick={() => handleScroll(item.name)}
                            >
                                {item.name}
                            </li>
                        ))}
                    <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                        {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-500" />}
                    </button>
                    </ul>

                    {/* Dark Mode Toggle */}
                </nav>
            )}

            {/* Mobile Bottom Navbar */}
            {isMobile && (
                <div>
                    <div className="fixed p-4 bottom-24 right-6 rounded-full bg-white dark:bg-gray-800 shadow-md flex border-t dark:border-gray-700">
                        <div className="flex items-center">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md flex justify-around py-3 border-t dark:border-gray-700">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                className={`flex flex-col items-center text-gray-500 hover:text-black dark:text-gray-300 ${active === item.name ? "text-black dark:text-white font-semibold" : ""
                                    }`}
                                onClick={() => handleScroll(item.name)}
                            >
                                {item.icon}
                                <span className="text-xs">{item.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

            )}
        </div>
    );
};

export default Navbar;
