import { useState, useEffect } from "react";
import { SquareUser, Briefcase, BookOpen, Layers, Phone, Handshake, Moon, Sun } from "lucide-react";

const Navbar = () => {
    const [active, setActive] = useState("Profile");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isTablet, setIsTablet] = useState(window.innerWidth < 1024);
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

    // Handle Resize for Mobile & Tablet Detection
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth < 1024);
        };
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
        { name: "Profile", icon: <SquareUser size={22} /> },
        { name: "Skills", icon: <Layers size={22} /> },
        { name: "Qualification", icon: <BookOpen size={22} /> },
        { name: "Services", icon: <Handshake size={22} /> },
        { name: "Projects", icon: <Briefcase size={22} /> },
        { name: "Contact", icon: <Phone size={22} /> },
    ];

    return (
        <div className={`fixed top-0 w-full z-50 transition-all ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
            {/* Desktop & Tablet Navbar */}
            {!isMobile && (
                <nav className="flex justify-between items-center px-6 sm:px-12 md:px-20 lg:px-32 xl:px-64 py-4 max-w-7xl mx-auto">
                    <h1 className="text-3xl font-semibold tracking-wide">Pavan</h1>
                    <ul className="flex gap-6 sm:gap-8 md:gap-10 mt-2">
                        {navItems.map((item) => (
                            <li
                                key={item.name}
                                className={`cursor-pointer text-sm md:text-[15px] transition-colors duration-300 ${
                                    active === item.name ? "font-semibold" : "text-gray-500 dark:text-gray-300"
                                }`}
                                onClick={() => handleScroll(item.name)}
                            >
                                {item.name}
                            </li>
                        ))}

                        {/* Dark Mode Toggle Button */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full transition-all duration-300 bg-gray-300 dark:bg-gray-700"
                        >
                            {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-500" />}
                        </button>
                    </ul>
                </nav>
            )}

            {/* Mobile Bottom Navbar */}
            {isMobile && (
                <div>
                    {/* Dark Mode Floating Button */}
                    <div className="fixed bottom-24 right-6 rounded-full shadow-md border-t dark:border-gray-300 transition-all duration-300">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full bg-gray-300 dark:bg-gray-800 transition-all duration-300"
                        >
                            {darkMode ? <Sun size={24} className="text-yellow-500" /> : <Moon size={24} className="text-gray-500" />}
                        </button>
                    </div>

                    {/* Mobile Bottom Navbar */}
                    <div className={`fixed bottom-0 w-full shadow-md flex justify-around py-3 border-t transition-all duration-300 ${darkMode ? "bg-gray-900 text-white border-gray-300" : "bg-white text-black border-gray-300"}`}>
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                className={`flex flex-col items-center hover:text-black text-gray-500 dark:text-gray-300 transition-colors duration-300 ${
                                    active === item.name ? "font-semibold text-black dark:text-white" : ""
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
