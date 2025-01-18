import React from 'react';
import { FaArrowRight,FaUsers, FaShieldAlt, FaAward, FaChartBar, FaStar } from 'react-icons/fa';
import { MdTrendingUp } from 'react-icons/md';
import { WaveBackground, CirclePattern, GridPattern, FloatingShapes } from '../components/AnimatedVectors';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <FloatingShapes />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Transform Your Business Vision Into Reality
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              We provide innovative solutions to help your business grow and succeed in today's competitive market.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto animate-fade-in-up animation-delay-400">
              Get Started
              <FaArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <GridPattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring years of experience and expertise to help your business succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              {
                icon: <MdTrendingUp className="h-8 w-8 text-blue-600" />,
                title: "Business Growth",
                description: "Strategic solutions to accelerate your business growth"
              },
              {
                icon: <FaUsers className="h-8 w-8 text-blue-600" />,
                title: "Expert Team",
                description: "Dedicated professionals with industry expertise"
              },
              {
                icon: <FaShieldAlt className="h-8 w-8 text-blue-600" />,
                title: "Proven Results",
                description: "Track record of successful business transformations"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-50 rounded-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <CirclePattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[ 
              { number: "500+", label: "Clients Served" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "25+", label: "Years Experience" },
              { number: "100+", label: "Expert Consultants" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2 animate-fade-in-up">{stat.number}</div>
                <div className="text-gray-400 animate-fade-in-up animation-delay-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative py-20 bg-white overflow-hidden">
        <WaveBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              {
                icon: <FaChartBar className="h-12 w-12 text-blue-600" />,
                title: "Strategic Planning",
                description: "Develop comprehensive strategies for sustainable growth"
              },
              {
                icon: <FaAward className="h-12 w-12 text-blue-600" />,
                title: "Business Consulting",
                description: "Expert advice to optimize your business operations"
              },
              {
                icon: <FaStar className="h-12 w-12 text-blue-600" />,
                title: "Market Analysis",
                description: "In-depth market research and competitor analysis"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8 animate-fade-in-up">
            Ready to Take Your Business to the Next Level?
          </h2>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors animate-fade-in-up animation-delay-200">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}
