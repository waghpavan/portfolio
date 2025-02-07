import { LayoutGrid, Code, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Web Designer",
        icon: <LayoutGrid className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
        description:
            "Creating visually appealing, user-friendly websites with modern designs and responsive layouts.",
    },
    {
        title: "DSA Problem Solving",
        icon: <Code className="w-12 h-12 text-green-600 dark:text-green-400" />,
        description:
            "Efficiently solving data structure and algorithm problems with optimized solutions and deep understanding.",
    },
    {
        title: "Android Developer",
        icon: <Smartphone className="w-12 h-12 text-purple-600 dark:text-purple-400" />,
        description:
            "Developing high-quality, optimized Android applications with smooth performance and user-friendly interfaces.",
    },
];

const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("services");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.75) {
                    setIsVisible(true);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="services" className="max-w-7xl mx-auto px-6 py-16 lg:py-36 border-b border-gray-300 dark:border-white text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">SERVICES</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">What I Offer</p>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={fadeInVariants}
                        className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-center"
                    >
                        {service.icon}
                        <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-white">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;