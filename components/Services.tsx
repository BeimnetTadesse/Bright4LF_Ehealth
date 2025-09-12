'use client';

import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-[hsl(200,85%,45%)] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "General Health Checkups",
      description: "Comprehensive health screenings and preventive care by our expert African medical professionals.",
      features: ["Full body examination", "Blood work analysis", "Vital signs monitoring", "Health recommendations"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[hsl(200,85%,45%)] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5 0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5c0-1.93 1.57-3.5 3.5-3.5zm-7 13c0-2.33 4.67-3.5 7-3.5s7 1.17 7 3.5v1H5v-1z"/>
        </svg>
      ),
      title: "Specialist Consultations",
      description: "Expert consultations with African specialists across various medical fields and specialties.",
      features: ["Cardiology", "Dermatology", "Pediatrics", "Gynecology"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[hsl(200,85%,45%)] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H8v-2h6v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: "Digital Prescriptions",
      description: "Secure digital prescription management with easy refills and medication tracking.",
      features: ["E-prescriptions", "Medication reminders", "Pharmacy integration", "Drug interaction alerts"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[hsl(200,85%,45%)] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c0 11 9 13 9 13s9-2 9-13l-.5-2zM12 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        </svg>
      ),
      title: "Telemedicine",
      description: "Connect with our African healthcare professionals from anywhere through secure video consultations.",
      features: ["Video consultations", "24/7 availability", "Secure messaging", "Follow-up care"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[hsl(200,85%,45%)] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Emergency Care",
      description: "Round-the-clock emergency medical services with rapid response from qualified African medical teams.",
      features: ["24/7 emergency hotline", "Ambulance services", "Critical care", "Emergency surgery"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[hsl(200,85%,45%)] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
        </svg>
      ),
      title: "Health Monitoring",
      description: "Continuous health monitoring and wellness programs designed by African health experts.",
      features: ["Vital signs tracking", "Chronic disease management", "Wellness programs", "Health analytics"]
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: "hsl(210,20%,98%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(210,50%,15%)] mb-6">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-xl text-[hsl(210,25%,45%)] max-w-3xl mx-auto leading-relaxed">
            Experience excellence in African healthcare with our comprehensive range of medical services, 
            delivered by skilled professionals committed to your wellbeing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{
                background: "linear-gradient(180deg, hsl(0,0%,100%), hsl(210,20%,98%))",
                color: "hsl(210,50%,15%)",
                boxShadow: "0 2px 8px hsl(200,85%,45% / 0.08)"
              }}
            >
              <div className="flex items-center mb-6">
                <div
                  className="p-3 rounded-xl mr-4 transition-colors duration-300"
                  style={{ backgroundColor: "hsl(200,85%,45% / 0.1)" }}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              </div>

              <p className="mb-6 leading-relaxed text-[hsl(210,25%,45%)]">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm"
                    style={{ color: "hsl(210,25%,45%)" }}
                  >
                    <svg
                      className="w-4 h-4 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: "hsl(145,65%,45%)" }}
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button
                  className="w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                  style={{
                    background: "hsl(185,60%,50%)",
                    color: "hsl(0,0%,100%)",
                    boxShadow: "0 4px 16px hsl(200,85%,45% / 0.12)"
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div
            className="rounded-2xl p-8 max-w-4xl mx-auto"
            style={{
              background: "linear-gradient(180deg, hsl(0,0%,100%), hsl(210,20%,98%))",
              boxShadow: "0 2px 8px hsl(200,85%,45% / 0.08)",
              color: "hsl(210,50%,15%)"
            }}
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Experience African Healthcare Excellence?</h3>
            <p className="text-xl mb-8 text-[hsl(210,25%,45%)]">
              Join thousands of satisfied patients who trust our African medical professionals for their healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, hsl(200,85%,45%), hsl(185,60%,50%))",
                  color: "hsl(0,0%,100%)",
                  boxShadow: "0 4px 16px hsl(200,85%,45% / 0.12)"
                }}
              >
                Book Your Appointment
              </button>
              <button
                className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                style={{
                  background: "hsl(210,15%,92%)",
                  color: "hsl(210,50%,25%)",
                  border: "2px solid hsl(200,85%,45%)"
                }}
              >
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
