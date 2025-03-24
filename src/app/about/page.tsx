"use client"; // Required for client-side hooks like useEffect

import { useEffect, useRef } from "react";
import JSConfetti from "js-confetti";
import { About } from "../../utils/about";

const AboutPage: React.FC = () => {
  const confettiRef = useRef<JSConfetti | null>(null);

  useEffect(() => {
    confettiRef.current = new JSConfetti();
  }, []);

  const handleConfetti = () => {
    if (confettiRef.current) {
      confettiRef.current.addConfetti({
        confettiColors: ["#FFD700", "#FF4500", "#00BFFF", "#32CD32"],
        confettiRadius: 6,
        confettiNumber: 150,
      });
    }
  };

  return (
    <section className="about section py-12 bg-gradient-to-r from-blue-600 to-purple-800 text-white">
      {/* Section Title */}
      <div className="container mx-auto text-center mb-16" data-aos="fade-up">
        <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 animate-text drop-shadow-lg">
          About
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mx-auto max-w-2xl font-mono opacity-90">
          Swati Singh is a highly skilled Full-Stack Developer with expertise in MERN Stack, Java, Laravel, C, C++, and Python.
          She holds a B.C.A in Computer Science and has extensive hands-on experience with PHP, React.js, Laravel, and Node.js,
          enabling her to develop scalable and efficient web applications.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mx-auto max-w-2xl font-mono mt-6 opacity-80">
          She has contributed to several innovative projects, including:
        </p>
        <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed mx-auto max-w-2xl font-mono mt-4 space-y-2">
          <li className="hover:text-yellow-400 transition duration-300">
            Multi-User Blog System – Built using Laravel, enabling seamless user interaction and content management.
          </li>
          <li className="hover:text-yellow-400 transition duration-300">
            Educational Institute Management Panel – A comprehensive system for managing student and faculty data.
          </li>
        </ul>

        {/* Confetti Button */}
        <button
          onClick={handleConfetti}
          className="mt-6 px-6 py-3 text-lg font-semibold rounded-lg bg-yellow-400 text-black hover:bg-yellow-500 transition duration-300 shadow-md"
        >
           Thanks
        </button>
      </div>

      {About?.map((item, index) => (
        <div
          key={index}
          className="container mx-auto mb-16 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 shadow-lg transition-transform duration-500 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        >
          <div className="h-[600px] flex flex-col lg:flex-row gap-4 items-stretch">
  {/* Image Section */}
  <div className="h-[30%] lg:h-full lg:w-1/2">
    <img
      src={item.profile}
      alt={item.nameDetails}
      className="h-full w-full object-cover rounded-lg shadow-xl duration-500 hover:shadow-2xl"
    />
  </div>

  {/* Content Section */}
  <div className="h-[70%] lg:h-full lg:w-1/2 overflow-auto p-6 content text-center md:text-left bg-gray-900 bg-opacity-30 rounded-lg">
    <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-lg">
      {item.post}
    </h2>
    <p className="italic text-lg text-gray-200 mb-6">{item.nameDetails}</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Column 1 */}
      <ul className="space-y-4 text-lg">
        <li className="flex items-center text-gray-200">
          <span className="text-yellow-400 mr-2">➤</span>
          <strong>Birthday:</strong>&nbsp; <span>{item.bday}</span>
        </li>
        <li className="flex items-center text-gray-200">
          <span className="text-yellow-400 mr-2">➤</span>
          <strong>Website:</strong>&nbsp; <span>{item.website}</span>
        </li>
        <li className="flex items-center text-gray-200">
          <span className="text-yellow-400 mr-2">➤</span>
          <strong>Phone:</strong>&nbsp; <span>{item.contact}</span>
        </li>
        <li className="flex items-center text-gray-200">
          <span className="text-yellow-400 mr-2">➤</span>
          <strong>City:</strong>&nbsp; <span>{item.city}</span>
        </li>
      </ul>

      {/* Column 2 */}
      <ul className="space-y-4 text-lg">
        <li className="flex items-center text-gray-200">
          <span className="text-yellow-400 mr-2">➤</span>
          <strong>Age:</strong>&nbsp; <span>{item.age}</span>
        </li>
        <li className="flex items-center text-gray-200">
          <span className="text-yellow-400 mr-2">➤</span>
          <strong>Degree:</strong>&nbsp; <span>{item.degree}</span>
        </li>
        <li className="flex items-center text-gray-200">
          <span className="text-yellow-400 mr-2">➤</span>
          <strong>Email:</strong>&nbsp; <span>{item.email}</span>
        </li>
        <li className="flex items-center text-gray-200">
          <span className="text-yellow-400 mr-2">➤</span>
          <strong>Freelance:</strong>&nbsp; <span>{item.freelance}</span>
        </li>
      </ul>
    </div>

    <p className="mt-6 text-lg text-gray-200 opacity-90">
      {item.description}
    </p>
  </div>
</div>

        </div>
      ))}
    </section>
  );
};

export default AboutPage;
