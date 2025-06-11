import React from "react";
import { welcomeSection } from "../../content/data";

const WelcomeSection = () => {
  const { title, description, signature } = welcomeSection;

  return (
    <section className="bg-gray-100 py-20 px-4 text-center text-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-6xl font-semibold mb-4">{title}</h2>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
