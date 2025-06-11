import React from "react";
import { courseList } from "../../content/data";
import { FaPlus } from "react-icons/fa";

const Courses = () => {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-14">
          Our Courses
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {courseList.map((course, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>

              <button
                aria-label="Learn more"
                className="absolute  right-5 bg-purple-700 text-white p-3 rounded-full shadow-md hover:bg-purple-800 transition"
              >
                <FaPlus className="text-sm" />
              </button>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;