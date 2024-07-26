import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-5">
        I'm Parth Chauhan, a versatile web developer with expertise in both frontend and backend technologies. My passion lies in crafting clean, minimalistic designs and implementing effective branding strategies to create engaging and user-centric experiences. I am proficient in Java, Python, C, C++, SQL, MongoDB, computer networks, OS, NoSQL, and DSA.</p>

        <br />

        <p className="text-xl">I thrive on bringing ideas to life by building solutions from scratch and am always excited to explore and master new technologies. My approach is centered around coding with precision and creativity, ensuring each project is both functional and aesthetically pleasing.</p><br />
        <p className="text-xl">Currently, I'm open to freelance opportunities and eager to collaborate on new ventures. Let’s connect to discuss how we can work together to enhance your project and achieve outstanding results.</p>
      </div>
    </div>
  );
};

export default About;
