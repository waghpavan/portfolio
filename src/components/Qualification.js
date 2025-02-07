import { GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const qualifications = {
    education: [
        {
            title: "B.Tech in Information Technology",
            institute: "Vishwakarma Institute of Information Technology, Pune",
            duration: "2023 - 2026",
            details: "8.25 CGPA",
        },
        {
            title: "Diploma in Information Technology",
            institute: "Sveri's College of Engineering (Polytechnic), Pandharpur",
            duration: "2020 - 2023",
            details: "91.00%",
        },
        {
            title: "10th Class",
            institute: "Shiv Chhatrapati Public School, Nandore",
            duration: "2019 - 2020",
            details: "84.20%",
        },
    ],
    experience: [
        {
            title: "Training & Internship",
            company: "TechnoWings IT Solutions - Solapur",
            duration: "1 / July / 2022 - 30 / Aug / 2022",
            month: "2 Months",
        },
        {
            title: "Web Developer Intern",
            company: "Big Buddies Foundation - Pune",
            duration: "1 / Sept / 2024 - 30 / Nov / 2024",
            month: "3 Months",
        },
    ],
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Qualification = () => {
    const { ref: educationRef, inView: educationInView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const { ref: workRef, inView: workInView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section id="qualification" className="max-w-5xl mx-auto lg:pt-36 border-b border-black dark:border-white px-6 py-16">
            <h2 className="text-4xl font-bold text-center">QUALIFICATION</h2>
            <p className="text-center text-gray-500 mt-2">Experience & Education</p>

            <div className="lg:flex justify-around gap-8 mt-6 text-gray-800 dark:text-gray-200">
                <motion.div ref={educationRef} initial="hidden" animate={educationInView ? "visible" : "hidden"} variants={fadeInLeft} className="lg:ml-20">
                    <div className="flex center gap-2">
                        <GraduationCap className="w-6 h-6" />
                        <span className="font-semibold">Education</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
                        <div>
                            {qualifications.education.map((edu, index) => (
                                <div key={index} className="mb-6 w-80">
                                    <h3 className="text-xl font-semibold">{edu.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{edu.institute}</p>
                                    <p className="text-gray-500 dark:text-gray-300">{edu.duration}</p>
                                    <p className="text-gray-500 dark:text-gray-300">{edu.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div ref={workRef} initial="hidden" animate={workInView ? "visible" : "hidden"} variants={fadeInRight} className="lg:ml-12">
                    <div className="flex items-center gap-2">
                        <Briefcase className="w-6 h-6" />
                        <span className="font-semibold">Work</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
                        <div>
                            {qualifications.experience.map((exp, index) => (
                                <div key={index} className="mb-6 w-56">
                                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                                    <p className="text-gray-500 dark:text-gray-300">{exp.duration}</p>
                                    <p className="text-gray-600 dark:text-gray-300">{exp.month}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Qualification;