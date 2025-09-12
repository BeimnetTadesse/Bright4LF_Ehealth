"use client";

import React from "react";
import Image from "next/image"; 

const Services = () => {
  const services = [
    {
      category: "Primary Care",
      icon: (
        <svg className="w-12 h-12 text-[hsl(200,85%,45%)] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      services: [
        {
          name: "General Health Checkups",
          description:
            "Comprehensive annual physical examinations and preventive screenings",
          price: "From $150",
          duration: "60 minutes",
        },
        {
          name: "Chronic Disease Management",
          description:
            "Ongoing care for diabetes, hypertension, and other chronic conditions",
          price: "From $120",
          duration: "45 minutes",
        },
        {
          name: "Vaccinations & Immunizations",
          description: "Travel vaccines, flu shots, and routine immunizations",
          price: "From $50",
          duration: "15 minutes",
        },
      ],
    },
    {
      category: "Specialist Care",
      icon: (
        <svg className="w-12 h-12 text-[hsl(200,85%,45%)] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5 0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5c0-1.93 1.57-3.5 3.5-3.5zm-7 13c0-2.33 4.67-3.5 7-3.5s7 1.17 7 3.5v1H5v-1z"/>
        </svg>
      ),
      services: [
        {
          name: "Cardiology Consultations",
          description:
            "Heart health assessments, ECGs, and cardiovascular disease management",
          price: "From $300",
          duration: "90 minutes",
        },
        {
          name: "Dermatology Services",
          description:
            "Skin health, cosmetic treatments, and dermatological conditions",
          price: "From $200",
          duration: "60 minutes",
        },
        {
          name: "Pediatric Care",
          description:
            "Comprehensive healthcare for children from infancy to adolescence",
          price: "From $180",
          duration: "45 minutes",
        },
      ],
    },
    {
      category: "Digital Health",
      icon: (
        <svg className="w-12 h-12 text-[hsl(200,85%,45%)] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H8v-2h6v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      services: [
        {
          name: "Telemedicine Consultations",
          description: "Video consultations with African healthcare professionals",
          price: "From $80",
          duration: "30 minutes",
        },
        {
          name: "Digital Prescriptions",
          description:
            "Electronic prescriptions with pharmacy integration and delivery",
          price: "From $25",
          duration: "10 minutes",
        },
        {
          name: "Health Monitoring",
          description:
            "Ongoing remote vital signs tracking and health data analysis",
          price: "From $60/month",
          duration: "Ongoing",
        },
      ],
    },
    {
      category: "Emergency Care",
      icon: (
        <svg className="w-12 h-12 text-[hsl(200,85%,45%)] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c0 11 9 13 9 13s9-2 9-13l-.5-2zM12 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        </svg>
      ),
      services: [
        {
          name: "24/7 Emergency Hotline",
          description:
            "Round-the-clock access to African emergency medicine specialists",
          price: "Free consultation",
          duration: "Immediate",
        },
        {
          name: "Urgent Care Services",
          description:
            "Same-day appointments for non-life-threatening emergencies",
          price: "From $250",
          duration: "45 minutes",
        },
        {
          name: "Ambulance Services",
          description:
            "Emergency medical transportation with qualified African paramedics",
          price: "From $500",
          duration: "As needed",
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
    primaryLight: "#8DE0F3",
    accentLight: "#B3E5FC",
    secondary: "#e0f2fe",
    secondaryForeground: "#1e293b",
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
          padding: "5rem 0",
          background:
          'linear-gradient(135deg, hsl(200 85% 45%), hsl(185 60% 50%), hsl(170 50% 55%))',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 1rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                color: "#fff",
                lineHeight: 1.2,
              }}
            >
              Comprehensive{" "}
              <span style={{ display: "block", color: colors.accentLight }}>
                Healthcare Services
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                marginBottom: "2rem",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              From preventive care to specialized treatments, our African
              healthcare professionals provide world-class medical services
              tailored to your unique needs.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
  {/* Browse All Services Button */}
  <button
    onClick={() => window.location.href = "/services"}
    style={{
      padding: "0.75rem 1.5rem",
      borderRadius: "12px",
      fontWeight: 600,
      fontSize: "1rem",
      background: "linear-gradient(135deg, hsl(200,85%,45%), hsl(185,60%,50%))",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 4px 16px rgba(79,193,233,0.12)",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.boxShadow = "0 6px 20px rgba(79,193,233,0.2)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.boxShadow = "0 4px 16px rgba(79,193,233,0.12)")
    }
  >
    Browse All Services
  </button>

  {/* Schedule Consultation Button */}
  <button
    onClick={() => window.location.href = "/appointments"}
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
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "linear-gradient(135deg, hsl(200,85%,45%), hsl(185,60%,50%))";
      e.currentTarget.style.color = "#fff";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "#fff";
      e.currentTarget.style.color = "hsl(200,85%,45%)";
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
  width={600} // set an approximate width
  height={400} // set an approximate height
  style={{ borderRadius: 24, boxShadow: shadowStrong, width: "100%", height: "auto" }}
/>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: "5rem 0" ,   backgroundColor: "hsl(210,20%,98%)"   }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>
          {services.map((category, idx) => (
            <div key={idx} style={{ marginBottom: "5rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
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
                  }}
                >
                  {category.icon}
                </div>
                <div>
                  <h2
                    style={{
                      fontSize: "2.5rem",
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
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
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
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                          color: colors.cardForeground,
                        }}
                      >
                        {service.name}
                      </h3>
                      <div style={{ textAlign: "right" }}>
                        <div
                          style={{ fontWeight: "bold", color: colors.primary }}
                        >
                          {service.price}
                        </div>
                        <div
                          style={{ fontSize: "0.875rem", color: "hsl(210,25%,45%)" }}
                        >
                          {service.duration}
                        </div>
                      </div>
                    </div>
                    <p style={{ color: "hsl(210,25%,45%)", marginBottom: "1.5rem" }}>
                      {service.description}
                    </p>
                    <button
                     onClick={() => (window.location.href = "/appointments")}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: 16,
                        fontWeight: 600,
                        fontSize: "1rem",
                        background: "linear-gradient(135deg, hsl(200,85%,45%), hsl(185,60%,50%))",
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

      {/* Flexible Payment & Insurance Options Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Flexible Payment & Insurance Options
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We make quality African healthcare accessible with major insurance plans and versatile payment options tailored to your needs.
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-12">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"></div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Insurance Accepted */}
            <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-md">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v12h16V6H4zm7 3h2v2h-2V9zm0 3h2v2h-2v-2zm-3-3h2v2H8V9zm0 3h2v2H8v-2zm-3 0h2v2H5v-2zm0-3h2v2H5V9zm9 6h2v2h-2v-2zm-3 0h2v2h-2v-2zm-3 0h2v2H8v-2zm9-3h2v2h-2v-2zm0-3h2v2h-2V9zm-3 3h2v2h-2v-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4 text-center">
                Insurance Accepted
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                We partner with major insurance providers to ensure seamless coverage for your healthcare needs.
              </p>
            </div>

            {/* Flexible Payment */}
            <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center shadow-md">
                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.05c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4 text-center">
                Flexible Payment
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Choose from multiple payment options, including installment plans for costly procedures.
              </p>
            </div>

            {/* Global Coverage */}
            <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-md">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4 text-center">
                Global Coverage
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Connect with African healthcare professionals from anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;