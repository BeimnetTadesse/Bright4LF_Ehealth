"use client";

import React, { useState } from "react";
import AppointmentForm from "@/components/AppointmentForm";
import { useRouter } from "next/navigation";

export default function AppointmentsPage() {
  const router = useRouter();
  const [added, setAdded] = useState(false);
  
  const handleAddAppointment = () => {
    setAdded(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 800);
  };
  
  

  return (
    <div className="relative">
      <AppointmentForm onAddAppointment={handleAddAppointment} />

      {added && (
        <div className="fixed bottom-6 right-6 bg-[hsl(185,60%,50%)] text-white px-5 py-3 rounded-xl shadow-lg animate-fadeIn">
          Appointment added — redirecting to dashboard...
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}