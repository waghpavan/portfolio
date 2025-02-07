import { useState, useEffect, useRef} from "react";
import { motion, useAnimation } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const controls = useAnimation();
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("contact");
            if (section) {
                const { top } = section.getBoundingClientRect();
                if (top < window.innerHeight * 0.75) {
                    setVisible(true);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (visible) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [visible, controls]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qgc1lf6', 'template_0tmqjwl', form.current, {
        publicKey: '1J5GlnLISTKVyQZwX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

        console.log("Form submitted:", formData);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <motion.div
            id="contact"
            className="container mx-auto border-b border-black dark:border-white py-8 px-6 sm:px-12 md:px-20 lg:px-32"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <h2 className="text-center text-4xl mt-10 font-bold">Contact Me</h2>
            <div className="grid grid-cols-1 mtb-10 md:grid-cols-2 gap-12 mt-8">
                {/* Contact Details */}
                <div className="space-y-6 mt-10">
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <p><a href="mailto:pavandagaduwagh@gmail.com" className="text-blue-500 hover:underline">
                            pavandagaduwagh@gmail.com
                        </a>
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">WhatsApp</h3>

                        <p><a className="text-blue-500 hover:underline" href="https://api.whatsapp.com/send?phone=8180989902&text=Hello,%20more%20information!" target="_blank" rel="noopener noreferrer">+91 8180989902</a></p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Instagram</h3>
                        <p><a className="text-blue-500 hover:underline" href="https://www.instagram.com/pavanwagh__/">pavanwagh__</a></p>
                    </div>
                </div>
                {/* Contact Form */}
                <form onSubmit={handleSubmit} ref={form} className="space-y-4 mt-10">
                    <h1 className="font-bold text-lg">Direct Mail</h1>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInput}
                        placeholder="Write your Name"
                        className="w-full border dark:text-gray-600 rounded-lg p-3"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInput}
                        placeholder="Write your Email"
                        className="w-full border dark:text-gray-600  rounded-lg p-3"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInput}
                        placeholder="Write your Message"
                        className="w-full border dark:text-gray-600 rounded-lg p-3 h-32"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full dark:bg-gray-600 bg-black text-white p-3 rounded-lg hover:bg-gray-900"
                    >Submit</button>
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;