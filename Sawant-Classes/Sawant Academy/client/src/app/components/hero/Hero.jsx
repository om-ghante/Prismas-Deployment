import React from "react";
import {
  heroTitle,
  studentCount,
  rating,
  activeStudents,
  totalCourses,
  testimonial,
  ctaButtons,
  user,
  heroSubtitle,
  heroSubtitle2,
  heroSubtitle1
} from "../../content/data";

const HeroSection = () => {
  return (
    <section className="w-full bg-white text-black py-20 px-4 sm:px-6 md:px-24 relative overflow-hidden">
      {/* Background Grid in Faded Circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-white/70 via-white/10 to-transparent" />
          <div className="grid grid-cols-7 grid-rows-7 w-full h-full">
            {Array.from({ length: 49 }).map((_, i) => (
              <div
                key={i}
                className="border border-gray-400 opacity-70"
                style={{ borderColor: 'rgba(0,0,0,0.1)' }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col items-center text-center space-y-1">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold leading-tight max-w-4xl">
          {heroSubtitle1}
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
          {heroTitle}
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold leading-tight max-w-4xl">
          {heroSubtitle2}
        </h1>

        {/* Middle Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-center mt-10 text-left">
          {/* Left Box */}
          <div className="space-y-4 flex flex-col items-start">
            <div className="flex items-center gap-2">
              <span className="text-2xl">😊</span>
              <p className="text-lg font-semibold">
                {studentCount} Happy Student
              </p>
            </div>
            <p className="text-gray-700 font-medium max-w-xs">{testimonial}</p>
            <p className="font-semibold text-sm text-gray-600 mt-4">{user.name}</p>
          </div>

          {/* Center Image */}
          <div className="flex justify-center relative">
            <img
              src={user.image}
              alt="user"
              className="w-48 sm:w-56 md:w-64 h-auto object-cover rounded-lg     relative z-10"
            />
          </div>

                    {/* Right Stats */}
          <div className="space-y-6 text-right md:text-right sm:text-center">
            <div className="flex flex-col md:flex-col items-center md:items-end gap-1">
              <div className="flex flex-col items-center sm:items-end gap-1 md:hidden">
                <p className="text-sm text-gray-600">5 Star Rating</p>
                <p className="text-yellow-500 text-xl">{"★".repeat(rating)}</p>
                <p className="text-xs text-gray-500 mt-1">Avg rating 4.8 makes us world best</p>
              </div>

              <div className="hidden md:block">
                <p className="text-sm text-gray-600">5 Star Rating</p>
                <p className="text-yellow-500 text-xl">{"★".repeat(rating)}</p>
                <p className="text-xs text-gray-500 mt-1">Avg rating 4.8 makes us kolhapur's best</p>
              </div>
            </div>

            <div className="md:flex flex-col md:flex-row md:justify-between gap-4 items-center">
              <div className="text-center md:text-left">
                <p className="text-xl font-semibold">{activeStudents}+</p>
                <p className="text-sm text-gray-500">Total active student</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xl font-semibold">{totalCourses}</p>
                <p className="text-sm text-gray-500">Total Course</p>
              </div>
            </div>

            <div className="hidden md:block absolute -top-6 right-0 rotate-12 text-xs text-gray-400">
              <div className="border-2 border-gray-400 rounded-full px-4 py-2">
                GET IN TOUCH
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
