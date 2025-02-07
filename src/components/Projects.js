import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
    {
        title: "Big Buddy Foundation",
        image: require("../assets/BigBuddy.png"),
        duration: "3 Months",
        description: "An educational website providing resources for students and teachers to enhance digital learning.",
        github: "https://github.com/darshanDW/skill-development-website",
        visit: "https://skill-development-website-1.onrender.com/"
    },
    {
        title: "PrideAgroSolution",
        image: require("../assets/Pride.png"),
        duration: "4 Months",
        description: "An agricultural platform designed to assist farmers with smart solutions. A e-commerce platform for farmers to buy and sell their products.",
        github: "https://github.com/PrideAgroSolutions/Pride",
        visit: "https://pridefrontend.onrender.com/"
    },
    {
        title: "Smart Learning Platform",
        image: require("../assets/Smart.png"),
        duration: "2 Months",
        description: "AI-driven platform offering personalized learning experiences with modular course structures.",
        github: "https://github.com/waghpavan/smartlearner",
        visit: "/"
    },
    {
        title: "Android App for Police Management",
        image: require("../assets/Android.png"),
        duration: "2 Months",
        description: "Developed an app to assist police in event and personnel management during the Pandharpur Yatra.",
        github: "/",
        visit: "https://drive.google.com/file/d/1yo4TkjNIjvg_Oozy0_AfW2Q-VFiopY1w/view?usp=drive_link"
    },
    {
        title: "Credit Data Analysis and Fraud Detection",
        image: require("../assets/Credit.png"),
        duration: "3 Months",
        description: "Machine learning models for detecting fraudulent transactions, improving banking security.",
        github: "https://colab.research.google.com/drive/131HfdLpZ10YufVkrT7udok2C2qXiyZY7?usp=sharing#scrollTo=4k7Q4yd8WMuA",
        visit: "https://colab.research.google.com/drive/131HfdLpZ10YufVkrT7udok2C2qXiyZY7?usp=sharing#scrollTo=4k7Q4yd8WMuA"
    }
];

const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {

    return (
        <section id="projects" className="max-w-7xl border-b border-gray-300 dark:border-white mx-auto px-6 py-16 lg:py-36 text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">PROJECTS</h2>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
                    >
                        <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-xl" />
                        <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-white">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">{project.duration}</p>
                        <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">{project.description}</p>
                        <div className="mt-4 flex justify-center gap-4">
                            {project.github !== "/" && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    GitHub
                                </a>
                            )}
                            {project.visit !== "/" && (
                                <a
                                    href={project.visit}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 hover:underline"
                                >
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
