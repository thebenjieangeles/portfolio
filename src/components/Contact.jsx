import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto pt-20">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/0752b92b-83cd-424a-a623-beb0538c2abc"
          method="POST"
          className="flex flex-col w-full md:w-6/12 lg:w-5/12"
        >
          <Title>Contact me</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center border-2 inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-orange-500 drop-shadow-md hover:stroke-white"
          >
            Hire me!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
