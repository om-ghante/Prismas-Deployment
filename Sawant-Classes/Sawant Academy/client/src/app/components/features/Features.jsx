import React from "react";
import { Features } from "../../content/data";

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900">Best Featured Services</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eligendi provident hic corporis, fugit optio, 
            mollitia maiores nesciunt quas consequuntur eum fuga doloribus earum reprehenderit accusamus officiis odit! Nam, porro.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {Features.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md px-6 py-8 text-left relative"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-md">
                  <Icon size={24} />
                </div>
                <span className="text-3xl font-bold text-blue-100">
                  {service.id}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <a href="#" className="text-blue-600 font-medium text-sm underline">
                Learn More...
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;
