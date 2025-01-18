import React from 'react';
import { FaChartBar, FaGlobe, FaUsers, FaBullseye, FaRegLightbulb, FaWrench } from 'react-icons/fa';


export default function Services() {
  const services = [
    {
      icon: <FaChartBar className="h-12 w-12 text-blue-600" />,
      title: "Business Strategy",
      description: "Develop comprehensive business strategies to achieve your goals and maximize growth potential."
    },
    {
      icon: <FaGlobe className="h-12 w-12 text-blue-600" />,
      title: "Global Expansion",
      description: "Expert guidance for expanding your business into new markets and territories."
    },
    {
      icon: <FaUsers className="h-12 w-12 text-blue-600" />,
      title: "Team Development",
      description: "Build and nurture high-performing teams that drive business success."
    },
    {
      icon: <FaBullseye className="h-12 w-12 text-blue-600" />,
      title: "Market Analysis",
      description: "In-depth market research and analysis to identify opportunities and threats."
    },
    {
      icon: <FaRegLightbulb className="h-12 w-12 text-blue-600" />,
      title: "Innovation Consulting",
      description: "Transform your business through innovative solutions and digital transformation."
    },
    {
      icon: <FaWrench className="h-12 w-12 text-blue-600" />,
      title: "Process Optimization",
      description: "Streamline operations and improve efficiency through process optimization."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive business solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure successful delivery of our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[ 
              { number: "01", title: "Discovery", description: "Understanding your needs" },
              { number: "02", title: "Strategy", description: "Developing the plan" },
              { number: "03", title: "Implementation", description: "Executing the solution" },
              { number: "04", title: "Review", description: "Measuring success" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-block bg-blue-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
