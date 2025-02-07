import { LayoutGrid, Code, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Web Designer",
        icon: <LayoutGrid className="w-10 h-10" />,
        description:
            "Services that provide the best quality and at the request of the client, with professional work and customer support.",
    },
    {
        title: "DSA Problem Solving",
        icon: <Code className="w-10 h-10" />,
        description:
            "Services that provide the best quality and at the request of the client, with professional work and customer support.",
    },
    {
        title: "Android Developer",
        icon: <Smartphone className="w-10 h-10" />,
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
        <section id="services" className="max-w-7xl mx-auto px-6 py-16 lg:py-36 border-b border-black dark:border-white text-center">
            <h2 className="text-4xl font-bold">SERVICES</h2>
            <p className="text-gray-500 mt-2">What I Offer</p>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={fadeInVariants}
                        className="bg-gray-100 dark:bg-gray-800 p-6 rounded-3xl shadow-md flex flex-col items-center"
                    >
                        {service.icon}
                        <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
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