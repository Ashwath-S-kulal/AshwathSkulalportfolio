import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z53g819', 'template_fsz6lad', form.current, {
        publicKey: 'cxgtYC_TgvRZn-eOq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contact" className="px-6 py-12 bg-gray-800 text-white mt-5 mx-5 mb-5">
      <div className="mb-10">
        <h2 className="text-3xl font-bold border-b-4 border-blue-600 inline-block pb-1">
          Contact
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-700 shadow-lg p-6 rounded-lg">
          <div className="flex items-start mb-6">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
              <FaMapMarkerAlt size={20} />
            </div>
            <div>
              <h4 className="font-bold">Address</h4>
              <p className="text-xs md:text-base">Haikady, Brahmavara tq, udupi dist, karnataka</p>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
              <FaPhoneAlt size={20} />
            </div>
            <div>
              <h4 className="font-bold">Call Us</h4>
              <p className="text-xs md:text-base">+91 8431294514</p>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
              <FaEnvelope size={20} />
            </div>
            <div>
              <h4 className="font-bold ">Email Us</h4>
              <p className="text-xs md:text-base">ashwathkulal2004@gmail.com</p>
            </div>
          </div>

          <div className="h-48 w-full overflow-hidden rounded-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d521.7661014532139!2d74.89523619457073!3d13.554766676198343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1755878798866!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy" >
            </iframe>
          </div>
        </div>

        <div className="bg-gray-700 shadow-lg p-6 rounded-lg">
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-600 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                name="user_name"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-600 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                name="user_email"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="bg-gray-600 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              name="user_title"
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="bg-gray-600 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              name="message"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
              value="Send"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
