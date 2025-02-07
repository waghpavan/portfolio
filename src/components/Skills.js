import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillsData = {
    "Full Stack Developer": [
        { name: "HTML", level: "Intermediate", icon: "html5" },
        { name: "CSS", level: "Intermediate", icon: "css3" },
        { name: "JavaScript", level: "Intermediate", icon: "javascript" },
        { name: "React", level: "Basic", icon: "react" },
        { name: "ExpressJS", level: "Basic", icon: "express" },
        { name: "NodeJs", level: "Basic", icon: "nodejs" },
        { name: "MongoDB", level: "Basic", icon: "mongodb" },
        { name: "MYSQL", level: "Intermediate", icon: "mysql" }
    ],
    "Languages": [
        { name: "C Programming", level: "Intermediate", icon: "c" },
        { name: "CPP", level: "Intermediate", icon: "cpp" },
        { name: "JavaScript", level: "Intermediate", icon: "javascript" },
        { name: "JAVA", level: "Advance", icon: "java" },
        { name: "Python", level: "Intermediate", icon: "python" },
        { name: "MYSQL", level: "Intermediate", icon: "mysql" }
    ],
    "Databases & Tools": [
        { name: "SQL", level: "Intermediate", icon: "mysql" },
        { name: "MongoDB", level: "Basic", icon: "mongodb" },
        { name: "Firebase", level: "Basic", icon: "firebase" },
        { name: "Git", level: "Intermediate", icon: "git" },
        { name: "GitHub", level: "Intermediate", icon: "github" },
        { name: "Postman", level: "Basic", icon: "postman" },
        { name: "AWS", level: "Basic", icon: "aws" }
    ],
    "Technologies/Libraries": [
        { name: "Bootstrap", level: "Intermediate", icon: "bootstrap" },
        { name: "Tailwind CSS", level: "Intermediate", icon: "tailwindcss" },
        { name: "ReactJS", level: "Basic", icon: "react" },
        { name: "NodeJS", level: "Basic", icon: "nodejs" },
        
        { name: "Android Studio", level: "Basic", icon: "androidstudio" }
    ],
    "Other Skills": [
        { name: "Problem Solving", level: "Advanced", icon: "problem-solving" },
        { name: "Operating Systems", level: "Intermediate", icon: "os" },
        { name: "Data Structures and Algorithms", level: "Intermediate", icon: "dsa" },
        { name: "Database Management System", level: "Intermediate", icon: "dbms" }
    ],
};

const iconMap = {
    html5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    tailwindcss: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    androidstudio: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
    mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    postman: "https://www.svgrepo.com/show/354202/postman-icon.svg",
    aws: require("../assets/aws.png"),
    firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
};

const SkillCard = ({ skill }) => (
    <motion.div 
        className="group flex flex-col items-center text-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    >
        { iconMap[skill.icon] && <img
        src={iconMap[skill.icon]}
        alt={skill.name}
        className="w-14 h-14 transition-transform duration-300 ease-in-out group-hover:animate-bounce-up-down"
        />
    }
        <p className="mt-2 font-medium">{skill.name}</p>
        <span className="text-sm text-gray-500">{skill.level}</span>
    </motion.div>
);

const Skills = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div 
            id="skills" 
            className="container my-8 pb-16 border-b dark:border-white border-black max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32"
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-center pt-8 lg:pt-36 text-4xl font-bold">Skills</h2>

            {Object.entries(skillsData).map(([category, skills], index) => (
                <motion.div 
                    key={index} 
                    className="mt-10"
                    initial={{ opacity: 0, x: 100 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                    <h3 className="text-2xl font-semibold mb-4 text-center sm:text-left">{category}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                        {skills.map((skill, idx) => (
                            <SkillCard key={idx} skill={skill} />
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Skills;