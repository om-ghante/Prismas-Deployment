import React from "react";
import { directorMessageData } from "../../content/data";

const DirectorMessage = () => {
  const { image, title, tagline, message } = directorMessageData;

  return (
    <section className="bg-white text-black py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Photo */}
        <img
          src={image}
          alt="Director"
          className="w-48 h-48 rounded-full object-cover shadow-lg mb-6"
        />

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>

        {/* Tagline */}
        <p className="text-blue-700 font-semibold mb-4 text-sm sm:text-base">
          {tagline}
        </p>

        {/* Message */}
        <p className="text-gray-700 text-sm text-justify text-center sm:text-base max-w-8xl">
          {message}
        </p>
      </div>
    </section>
  );
};

export default DirectorMessage;
