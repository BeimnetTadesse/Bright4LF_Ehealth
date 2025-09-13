"use client";

import React from "react";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      category: "Primary Care",
      icon: (
        <svg
          className="w-12 h-12 text-[hsl(200,85%,45%)] transition-colors duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      services: [
        {
          name: "General Health Checkups",
          description:
            "Comprehensive annual physical examinations and preventive screenings",
          availability: "Available daily",
        },
        {
          name: "Chronic Disease Management",
          description:
            "Ongoing care for diabetes, hypertension, and other chronic conditions",
          availability: "Weekdays only",
        },
        {
          name: "Vaccinations & Immunizations",
          description: "Travel vaccines, flu shots, and routine immunizations",
          availability: "By appointment only",
        },
      ],
    },
    {
      category: "Specialist Care",
      icon: (
        <svg
          className="w-12 h-12 text-[hsl(200,85%,45%)] transition-colors duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5 0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5c0-1.93 1.57-3.5 3.5-3.5zm-7 13c0-2.33 4.67-3.5 7-3.5s7 1.17 7 3.5v1H5v-1z" />
        </svg>
      ),
      services: [
        {
          name: "Cardiology Consultations",
          description:
            "Heart health assessments, ECGs, and cardiovascular disease management",
          availability: "Mondays & Thursdays",
        },
        {
          name: "Dermatology Services",
          description:
            "Skin health, cosmetic treatments, and dermatological conditions",
          availability: "By appointment only",
        },
        {
          name: "Pediatric Care",
          description:
            "Comprehensive healthcare for children from infancy to adolescence",
          availability: "Weekdays & Saturdays",
        },
      ],
    },
    {
      category: "Digital Health",
      icon: (
        <svg
          className="w-12 h-12 text-[hsl(200,85%,45%)] transition-colors duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H8v-2h6v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
      services: [
        {
          name: "Telemedicine Consultations",
          description: "Video consultations with African healthcare professionals",
          availability: "Available 24/7",
        },
        {
          name: "Digital Prescriptions",
          description:
            "Electronic prescriptions with pharmacy integration and delivery",
          availability: "Within 2 hours",
        },
        {
          name: "Health Monitoring",
          description:
            "Ongoing remote vital signs tracking and health data analysis",
          availability: "Ongoing subscription",
        },
      ],
    },
    {
      category: "Emergency Care",
      icon: (
        <svg
          className="w-12 h-12 text-[hsl(200,85%,45%)] transition-colors duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c0 11 9 13 9 13s9-2 9-13l-.5-2zM12 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
        </svg>
      ),
      services: [
        {
          name: "24/7 Emergency Hotline",
          description:
            "Round-the-clock access to African emergency medicine specialists",
          availability: "Always available",
        },
        {
          name: "Urgent Care Services",
          description:
            "Same-day appointments for non-life-threatening emergencies",
          availability: "Same-day service",
        },
        {
          name: "Ambulance Services",
          description:
            "Emergency medical transportation with qualified African paramedics",
          availability: "On-demand",
        },
      ],
    },
  ];

  const colors = {
    background: "#fff",
    foreground: "#1e293b",
    card: "#fff",
    cardForeground: "#1e293b",
    primary: "#4FC1E9",
    accent: "#6DD5ED",
    secondary: "#e0f2fe",
    muted: "#f1f5f9",
  };

  const shadowSoft = "0 2px 8px rgba(41,128,185,0.08)";
  const shadowMedium = "0 4px 16px rgba(41,128,185,0.12)";
  const shadowStrong = "0 8px 32px rgba(41,128,185,0.16)";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: colors.background,
        color: colors.foreground,
        fontFamily: "sans-serif",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          padding: "5rem 1rem",
          background:
            "linear-gradient(135deg, hsl(200 85% 45%), hsl(185 60% 50%), hsl(170 50% 55%))",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                color: "#fff",
                lineHeight: 1.2,
              }}
            >
              Comprehensive{" "}
              <span style={{ display: "block", color: colors.accent }}>
                Healthcare Services
              </span>
            </h1>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                marginBottom: "2rem",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              From preventive care to specialized treatments, our African
              healthcare professionals provide world-class medical services
              tailored to your unique needs.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "3rem",
              }}
            >
              <button
                onClick={() => (window.location.href = "/services")}
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "12px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  background:
                    "linear-gradient(135deg, hsl(200,85%,45%), hsl(185,60%,50%))",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 16px rgba(79,193,233,0.12)",
                  transition: "all 0.3s ease",
                }}
              >
                Browse All Services
              </button>
              <button
                onClick={() => (window.location.href = "/appointments")}
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "12px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  background: "#fff",
                  color: "hsl(200,85%,45%)",
                  border: "2px solid hsl(200,85%,45%)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Schedule Consultation
              </button>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <Image
              src="/images/hospital-services.jpg"
              alt="Modern African hospital interior with professional staff"
              width={600}
              height={400}
              style={{
                borderRadius: 24,
                boxShadow: shadowStrong,
                width: "100%",
                height: "auto",
                maxWidth: "600px",
              }}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        style={{ padding: "5rem 1rem", backgroundColor: "hsl(210,20%,98%)" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {services.map((category, idx) => (
            <div key={idx} style={{ marginBottom: "5rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginBottom: "3rem",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    backgroundColor: "rgba(79,193,233,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "1.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  {category.icon}
                </div>
                <div>
                  <h2
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                      fontWeight: "bold",
                      marginBottom: 8,
                    }}
                  >
                    {category.category}
                  </h2>
                  <div
                    style={{
                      width: 80,
                      height: 6,
                      borderRadius: 4,
                      background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
                    }}
                  ></div>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
                  gap: "2rem",
                }}
              >
                {category.services.map((service, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      background: colors.card,
                      borderRadius: 24,
                      padding: "2rem",
                      boxShadow: shadowSoft,
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        color: colors.cardForeground,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {service.name}
                    </h3>
                    <p
                      style={{
                        color: "hsl(210,25%,45%)",
                        marginBottom: "1rem",
                      }}
                    >
                      {service.description}
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        color: colors.primary,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {service.availability}
                    </p>
                    <button
                      onClick={() => (window.location.href = "/appointments")}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: 16,
                        fontWeight: 600,
                        fontSize: "1rem",
                        background:
                          "linear-gradient(135deg, hsl(200,85%,45%), hsl(185,60%,50%))",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: shadowMedium,
                        transition: "all 0.3s ease",
                      }}
                    >
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
