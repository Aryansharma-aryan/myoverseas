import { useState, useRef } from "react";
import sukhmanpreet from "../assets/sukhmanpreet.jpeg";
import namanjot from "../assets/namanjot.jpeg";
import abhishek from "../assets/abhishek.jpeg";
import aasutosh from "../assets/aasutosh.jpeg";
import sandeep from "../assets/sandeep.jpeg";
import sukhmanpreett from "../assets/sukhmanpreetk.jpeg";
import karandeep from "../assets/karandeep.jpeg";
import mokshita from "../assets/mokshita.jpeg";
import arpreet from "../assets/arpreet.jpeg";

const successStories = [
  { name: "Sukhmanpreet", image: sukhmanpreet },
  { name: "Namanjot Kaur", image: namanjot },
  { name: "Abhishek", image: abhishek },
  { name: "Aasutosh", image: aasutosh },
  { name: "Sandeep", image: sandeep },
  { name: "Sukhmanpreet Kaur", image: sukhmanpreett },
  { name: "Karandeep Singh", image: karandeep },
  { name: "Mokshita", image: mokshita },
  { name: "Arpreet", image: arpreet },
];

const SuccessStory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  const cardsPerPage = 6;
  const totalPages = Math.ceil(successStories.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = successStories.slice(indexOfFirstCard, indexOfLastCard);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 bg-gradient-to-br from-[#0b0b0b] via-[#111111] to-[#1a1a1a] text-white font-[Poppins]"
    >
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#d4af37] to-[#ffce7a] drop-shadow-lg animate-fade-in-down hover:underline hover:underline-offset-8 transition-all duration-500">
          🌟 Success Stories
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed">
          Celebrating students who shaped their dreams with{" "}
          <span className="font-semibold text-white">Vertex Study Visa</span>.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {currentCards.map(({ name, image }, index) => (
          <div
            key={index}
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.03] shadow-2xl shadow-white/10"
          >
            {/* Image */}
            <div className="h-56 sm:h-64 md:h-72 overflow-hidden rounded-t-3xl">
              <img
                src={image}
                alt={name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Name */}
            <div className="p-5 sm:p-6 text-center">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
                {name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-4 py-2 rounded-full border ${
              currentPage === i + 1
                ? "bg-yellow-400 text-black font-semibold"
                : "bg-white/10 text-white hover:bg-white/20"
            } transition-all duration-300`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SuccessStory;
