"use client";

import React from "react";
import Image from "next/image";
import ServicesSection from "@/components/Services";

const HeroSection = () => {
  return (
    <section>
      <section
        className="min-h-screen flex items-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(200 85% 45%), hsl(185 60% 50%), hsl(170 50% 55%))",
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            className="h-full w-full"
          >
            <defs>
              <pattern
                id="medical-pattern"
                patternUnits="userSpaceOnUse"
                width="50"
                height="50"
              >
                <circle cx="25" cy="25" r="2" fill="currentColor" />
                <path
                  d="M25 15v20M15 25h20"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#medical-pattern)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Excellence in
                <span style={{ color: "#B3E5FC" }} className="block">
                  African Healthcare
                </span>
              </h1>

              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Experience world-class medical care with our team of dedicated
                African healthcare professionals. Book appointments, manage
                prescriptions, and access telemedicine services - all in one
                platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => (window.location.href = "/appointments")}
                  className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:cursor"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(200,85%,45%), hsl(185,60%,50%))",
                    color: "hsl(0,0%,100%)",
                    boxShadow: "0 4px 16px hsl(200,85%,45% / 0.12)",
                  }}
                >
                  Book Appointment
                </button>

                <button
                  onClick={() => (window.location.href = "/doctors")}
                  className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                  style={{
                    background: "hsl(210,15%,92%)",
                    color: "hsl(210,50%,25%)",
                    border: "2px solid hsl(200,85%,45%)",
                  }}
                >
                  Meet Our Doctors
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-white/80">Expert Doctors</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white mb-2">10k+</div>
                  <div className="text-white/80">Happy Patients</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-white/80">Care Available</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/hero-doctor.jpg"
                  alt="Professional African female doctor in modern hospital setting"
                  width={600}
                  height={512}
                  className="w-full h-[24rem] md:h-[28rem] lg:h-[32rem] object-cover rounded-3xl shadow-2xl"
                />
                {/* Optional subtle background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 rounded-3xl blur-3xl -z-10 opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
    </section>
  );
};

export default HeroSection;