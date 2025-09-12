"use client";

import React from "react";
import Image from "next/image";

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Amara Okoye",
      specialty: "Internal Medicine",
      experience: "12 years",
      rating: 4.9,
      location: "Lagos, Nigeria",
      image: "/images/doctor1.jpg",
      languages: ["English", "Igbo", "Yoruba"],
      education: "University of Lagos, Harvard Medical School",
      about:
        "Specialist in preventive care and chronic disease management with extensive experience in African healthcare systems.",
      status: "available",
    },
    {
      id: 2,
      name: "Dr. Fatima Abdullahi",
      specialty: "Pediatrics",
      experience: "8 years",
      rating: 4.8,
      location: "Accra, Ghana",
      image: "/images/doctor2.jpg",
      languages: ["English", "Hausa", "French"],
      education: "University of Ghana, Johns Hopkins",
      about:
        "Passionate pediatrician dedicated to child health and development with focus on nutrition and preventive care.",
      status: "available",
    },
    {
      id: 3,
      name: "Dr. Kwame Asante",
      specialty: "Cardiology",
      experience: "15 years",
      rating: 4.9,
      location: "Cape Town, South Africa",
      image: "/images/doctor3.jpg",
      languages: ["English", "Akan", "Zulu"],
      education: "University of Cape Town, Mayo Clinic",
      about:
        "Leading cardiologist specializing in interventional cardiology and heart disease prevention in African populations.",
      status: "busy",
    },
    {
      id: 4,
      name: "Dr. Aisha Kone",
      specialty: "General Surgery",
      experience: "10 years",
      rating: 4.9,
      location: "Dakar, Senegal",
      image: "/images/doctor4.jpg",
      languages: ["French", "English", "Wolof"],
      education: "Université Cheikh Anta Diop, Sorbonne",
      about:
        "Expert surgeon with specialization in minimally invasive techniques and emergency surgical procedures.",
      status: "available",
    },
    {
      id: 5,
      name: "Dr. Chinonso Okafor",
      specialty: "Neurology",
      experience: "7 years",
      rating: 4.7,
      location: "Nairobi, Kenya",
      image: "/images/doctor5.jpg",
      languages: ["English", "Swahili", "Igbo"],
      education: "University of Nairobi, Stanford Medical School",
      about:
        "Neurologist specializing in disorders of the nervous system with a focus on patient-centered care in African populations.",
      status: "available",
    },
    {
      id: 6,
      name: "Dr. Tesfaye Daniel",
      specialty: "Obstetrics & Gynecology",
      experience: "11 years",
      rating: 4.8,
      location: "Addis Ababa, Ethiopia",
      image: "/images/doctor6.jpg",
      languages: ["English", "Amharic", "French"],
      education: "Addis Ababa University, Oxford Medical School",
      about:
        "Women's health specialist focusing on maternal care and reproductive health in African communities.",
      status: "offline",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return (
          <span
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{ backgroundColor: "hsl(145,65%,45%)", color: "white" }}
          >
            Available
          </span>
        );
      case "busy":
        return (
          <span
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{ backgroundColor: "hsl(35,85%,55%)", color: "white" }}
          >
            Busy
          </span>
        );
      case "offline":
        return (
          <span
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{
              backgroundColor: "hsl(210,15%,95%)",
              color: "hsl(210,25%,45%)",
            }}
          >
            Offline
          </span>
        );
      default:
        return (
          <span
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{
              backgroundColor: "hsl(210,15%,95%)",
              color: "hsl(210,25%,45%)",
            }}
          >
            Offline
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(210,20%,98%)] text-[hsl(210,50%,15%)]">
      {/* Header Section */}
      <section
        className="py-24 px-6 sm:px-8 lg:px-12 text-center rounded-b-3xl shadow-lg"
        style={{
          background:
            "linear-gradient(135deg, hsl(200,85%,45%), hsl(185,60%,50%), hsl(170,50%,55%))",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6">
          Meet Our Expert
          <span style={{ color: "#B3E5FC" }} className="block">
            African Doctors
          </span>
        </h1>
  
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Our team of highly qualified African healthcare professionals brings
          together excellence, cultural understanding, and world-class medical
          expertise to serve your health needs.
        </p>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              style={{
                backgroundColor: "white",
                color: "hsl(210,50%,15%)",
                borderRadius: "1rem",
                padding: "1.5rem",
                boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                transition: "all 0.3s",
              }}
              className="hover:scale-105"
            >
              <div className="relative mb-6">
                <Image
                  src={doctor.image}
                  alt={`Dr. ${doctor.name} - ${doctor.specialty} specialist`}
                  width={300}
                  height={288}
                  className="w-full h-72 object-cover object-center rounded-xl"
                />
                <div className="absolute top-4 right-4">
                  {getStatusBadge(doctor.status)}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    {doctor.name}
                  </h3>
                  <p
                    style={{
                      fontWeight: "600",
                      fontSize: "1.125rem",
                      color: "hsl(200,85%,45%)",
                    }}
                  >
                    {doctor.specialty}
                  </p>
                  <p style={{ color: "hsl(210,25%,45%)" }}>{doctor.location}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill={
                          i < Math.floor(doctor.rating)
                            ? "hsl(35,85%,55%)"
                            : "#d1d5db"
                        }
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    <span
                      style={{
                        marginLeft: "0.5rem",
                        fontSize: "0.875rem",
                        color: "hsl(210,25%,45%)",
                      }}
                    >
                      {doctor.rating}
                    </span>
                  </div>
                  <span
                    style={{ fontSize: "0.875rem", color: "hsl(210,25%,45%)" }}
                  >
                    {doctor.experience} exp.
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "hsl(210,25%,45%)",
                    lineHeight: "1.5",
                  }}
                >
                  {doctor.about}
                </p>

                <div className="space-y-2">
                  <div style={{ fontSize: "0.875rem" }}>
                    <span
                      style={{ fontWeight: "600", color: "hsl(210,50%,15%)" }}
                    >
                      Languages:
                    </span>
                    <span
                      style={{
                        color: "hsl(210,25%,45%)",
                        marginLeft: "0.5rem",
                      }}
                    >
                      {doctor.languages.join(", ")}
                    </span>
                  </div>
                  <div style={{ fontSize: "0.875rem" }}>
                    <span
                      style={{ fontWeight: "600", color: "hsl(210,50%,15%)" }}
                    >
                      Education:
                    </span>
                    <span
                      style={{
                        color: "hsl(210,25%,45%)",
                        marginLeft: "0.5rem",
                      }}
                    >
                      {doctor.education}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(200,85%,45%), hsl(185,60%,50%))",
                      color: "white",
                      padding: "0.75rem 2rem",
                      borderRadius: "1rem",
                      fontWeight: "600",
                      flex: 1,
                      transition: "all 0.3s",
                    }}
                    disabled={doctor.status !== "available"}
                  >
                    Book Appointment
                  </button>
                  <button
                    style={{
                      backgroundColor: "hsl(210,15%,92%)",
                      border: "2px solid hsl(200,85%,45%)",
                      color: "hsl(210,50%,25%)",
                      padding: "0.75rem 1rem",
                      borderRadius: "1rem",
                      transition: "all 0.3s",
                    }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{ backgroundColor: "hsl(210,15%,95%)" }}
        className="py-20 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "1.5rem",
            padding: "2rem",
            maxWidth: "48rem",
            margin: "0 auto",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "hsl(210,50%,15%)",
              marginBottom: "1.5rem",
            }}
          >
            Can&apos;t Find the Right Specialist?
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "hsl(210,25%,45%)",
              marginBottom: "2rem",
            }}
          >
            Our patient care team can help you find the perfect African
            healthcare professional for your specific needs and connect you with
            additional specialists in our network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              style={{
                background:
                  "linear-gradient(135deg, hsl(200,85%,45%), hsl(185,60%,50%))",
                color: "white",
                padding: "0.75rem 2rem",
                borderRadius: "1rem",
                fontWeight: "600",
              }}
            >
              Request Doctor Consultation
            </button>
            <button
              style={{
                backgroundColor: "hsl(210,15%,92%)",
                border: "2px solid hsl(200,85%,45%)",
                color: "hsl(210,50%,25%)",
                padding: "0.75rem 2rem",
                borderRadius: "1rem",
              }}
            >
              Contact Patient Care
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;