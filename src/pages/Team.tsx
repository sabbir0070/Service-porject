import React from 'react';
import { FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Team() {
  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      bio: "20+ years of experience in business consulting and strategy",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "john@businesspro.com"
      }
    },
    {
      name: "Sarah Johnson",
      role: "Head of Consulting",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      bio: "Expert in business transformation and process optimization",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@businesspro.com"
      }
    },
    {
      name: "Michael Chen",
      role: "Strategy Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      bio: "Specializes in market analysis and global expansion strategies",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@businesspro.com"
      }
    },
    {
      name: "Emily Brown",
      role: "Innovation Lead",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      bio: "Drives digital transformation and innovation initiatives",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@businesspro.com"
      }
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the experts behind our success
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600">
                      <FaLinkedinIn className="h-5 w-5" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-blue-600">
                      <FaTwitter className="h-5 w-5" />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-blue-600">
                      <FaEnvelope className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals to join our growing team.
            If you're passionate about helping businesses succeed, we'd love to hear from you.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
}
