import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";

import wapp from "../assets/icons/whatsapplogo.png";

import "../index.css";

const ContactUs = () => {
    const [isSent, setIsSent] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_2ixcckd",
            "template_958jran",
            e.target,
            "PpclgJ5f40Y7f_m8H"
        )
            .then(
                (result) => {
                    document.getElementById("contact_form").reset();
                    setIsSent(true);
                    alert('Thank you I will get back to you as soon as possible !');
                },
                (error) => {
                    console.error(error);
                    setIsSent(false);
                }
            );
    };

    return (
        <div
        id='contactus'
            style={{
                backgroundImage:
                    "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
                boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
            }}

            className="w-full h-[100%] bg-gray-300 p-12"
        >
            <div className="w-[100%] lg:w-[60%] mx-auto">
                <h2
                    className="message md:text-4xl bg-primary-600 p-2 rounded-t-xl heading-font bg-gray-400 mx-auto w-[100%] lg:w-[80%]"
                >
                    <Typewriter words={["Let's get in touch!"]} loop={true} />
                    &nbsp;
                </h2>
            </div>
            <div className="w-[100%] lg:w-[60%] mx-auto flex flex-col justify-center">
                <form
                    id="contact_form"
                    ref={form}
                    method="POST"
                    target="_blank"
                    onSubmit={sendEmail}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                    className="w-[100%] lg:w-[80%] h-full mx-auto flex flex-col gap-4 text-grayscale-200 p-4 mb-6 shadow-2xl rounded-b-xl"
                >
                    <div className="w-full flex flex-col">
                        <label className="form-font" htmlFor="firstname">First Name</label>
                        <input
                            className="p-[0.5em] rounded-xl text-grayscale-950"
                            placeholder="Enter your First Name"
                            id="firstname"
                            type="text"
                            name="from_name"
                            required
                        />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="form-font" htmlFor="lastname">Last Name</label>
                        <input
                            className="p-[0.5em] rounded-xl text-grayscale-950"
                            placeholder="Enter your Last Name"
                            id="lastname"
                            type="text"
                            name="from_last"
                            required
                        />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="form-font" htmlFor="email">E-mail</label>
                        <input
                            className="p-[0.5em] rounded-xl text-grayscale-950"
                            placeholder="Enter your E-mail"
                            id="email"
                            type="email"
                            name="from_email"
                            required
                        />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="form-font">Message</label>
                        <textarea
                            className="p-[0.5em] rounded-xl text-grayscale-950"
                            placeholder="Enter your message..."
                            name="message"
                            required
                        ></textarea>
                    </div>
                    <div className="w-full flex justify-center">
                        <input
                            className="w-[100px] h-[50px] rounded-xl cursor-pointer bg-gray-400 hover:bg-gray-700 hover:text-white btn-font"
                            type="submit"
                            value={!isSent ? 'Send' : 'Done!'}

                        />
                    </div>
                </form>
                <div className="mx-auto flex flex-row rounded-xl bg-gray-400 hover:bg-gray-700 p-3">
                    <img src={wapp} alt="" className="mx-auto" />
                    <a href="https://wa.me/919468891220">
                        <button className="h-[50px] cursor-pointer hover:text-white w-[100%] btn-font flex items-center pl-2">Connect on whatsapp</button>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;