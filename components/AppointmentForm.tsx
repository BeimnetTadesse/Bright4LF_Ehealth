"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  location: string;
  image: string;
}

export interface Appointment {
  id: number;
  doctor: Doctor;
  date: string;
  time: string;
  type: string;
  patient: string;
  notes: string;
  status: string;
}

interface AppointmentFormProps {
  onAddAppointment?: (appointment: Appointment) => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onAddAppointment }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [appointmentType, setAppointmentType] = useState<"in-person" | "telemedicine">("in-person");
  const [patientName, setPatientName] = useState<string>("");
  const [patientNotes, setPatientNotes] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(1);

  const doctors: Doctor[] = [
    { id: 1, name: "Dr. Amara Okoye", specialty: "Internal Medicine", experience: "12 years", rating: 4.9, location: "Lagos, Nigeria", image: "/images/doctor1.jpg" },
    { id: 2, name: "Dr. Fatima Abdullahi", specialty: "Pediatrics", experience: "8 years", rating: 4.8, location: "Accra, Ghana", image: "/images/doctor2.jpg" },
    { id: 3, name: "Dr. Kwame Asante", specialty: "Cardiology", experience: "15 years", rating: 4.9, location: "Cape Town, South Africa", image: "/images/doctor3.jpg" },
    { id: 4, name: "Dr. Aisha Kone", specialty: "General Surgery", experience: "10 years", rating: 4.9, location: "Dakar, Senegal", image: "/images/doctor4.jpg" },
    { id: 5, name: "Dr. Chinonso Okafor", specialty: "Neurology", experience: "7 years", rating: 4.7, location: "Nairobi, Kenya", image: "/images/doctor5.jpg" },
    { id: 6, name: "Dr. Tesfaye Daniel", specialty: "Obstetrics & Gynecology", experience: "11 years", rating: 4.8, location: "Addis Ababa, Ethiopia", image: "/images/doctor6.jpg" },
  ];

  const timeSlots = [
    "09:00 AM","09:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM",
    "02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM"
  ];

  const handleNextStep = () => { if (currentStep < 3) setCurrentStep(s => s + 1); };
  const handlePrevStep = () => { if (currentStep > 1) setCurrentStep(s => s - 1); };
  const selectedDoctorData = doctors.find(d => d.id === Number(selectedDoctor));

  const handleConfirm = () => {
    if (!selectedDoctorData || !selectedDate || !selectedTime || !patientName) return;

    const newAppointment: Appointment = {
      id: Date.now(),
      doctor: selectedDoctorData,
      date: selectedDate,
      time: selectedTime,
      type: appointmentType === "in-person" ? "In-Person" : "Telemedicine",
      patient: patientName,
      notes: patientNotes,
      status: "Pending",
    };

    try {
      const stored = JSON.parse(localStorage.getItem("appointments") || "[]") as Appointment[];
      stored.unshift(newAppointment);
      localStorage.setItem("appointments", JSON.stringify(stored));
    } catch (e) {
      console.error(e);
    }

    if (onAddAppointment) onAddAppointment(newAppointment);

    setCurrentStep(1);
    setSelectedDoctor("");
    setSelectedDate("");
    setSelectedTime("");
    setPatientName("");
    setPatientNotes("");
    setAppointmentType("in-person");
  };

  return (
    <main className="min-h-screen bg-[hsl(210,20%,98%)] text-[hsl(210,50%,15%)] py-10">
      <section className="py-16 text-center rounded-b-3xl shadow-md mb-10" style={{ background: "linear-gradient(135deg, hsl(200,85%,45%), hsl(185,60%,50%), hsl(170,50%,55%))" }}>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">Book Your Appointment</h1>
        <p className="text-white/90 mt-2">Choose a doctor, pick a time, and provide your details in a few steps.</p>
      </section>

      <section className="max-w-3xl mx-auto px-6">
        <div className="flex justify-between mb-6">
          {["Doctor","Date & Time","Patient Details"].map((label, i) => {
            const step = i + 1;
            return (
              <div key={label} className="flex items-center flex-1">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold ${step <= currentStep ? "bg-[hsl(185,60%,50%)] text-white shadow-md" : "bg-[hsl(210,15%,90%)] text-[hsl(210,25%,45%)]"}`}>
                  {step}
                </div>
                <div className={`ml-3 text-sm font-medium ${step <= currentStep ? "text-[hsl(210,50%,15%)]" : "text-[hsl(210,25%,45%)]"}`}>{label}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          {currentStep === 1 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Choose a doctor</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {doctors.map(doc => (
                  <div
                    key={doc.id}
                    onClick={() => setSelectedDoctor(String(doc.id))}
                    className={`p-4 rounded-xl cursor-pointer border-2 transition-all shadow-sm hover:shadow-md ${selectedDoctor === String(doc.id) ? "border-[hsl(185,60%,50%)] bg-[hsl(185,60%,95%)]" : "border-[hsl(210,15%,85%)] hover:border-[hsl(185,60%,50%)]"}`}
                  >
                    <div className="flex items-center gap-4">
                      <Image src={doc.image} alt={doc.name} width={56} height={56} className="rounded-full object-cover" />
                      <div className="flex-1">
                        <div className="font-medium">{doc.name}</div>
                        <div className="text-sm text-[hsl(200,85%,45%)]">{doc.specialty}</div>
                        <div className="text-xs text-[hsl(210,25%,45%)]">⭐ {doc.rating} • {doc.experience}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Date & Time</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Date</label>
                  <input type="date" min={new Date().toISOString().split("T")[0]} value={selectedDate} onChange={e => setSelectedDate(e.target.value)} className="w-full p-3 border rounded-lg shadow-sm focus:ring-[hsl(185,60%,50%)] focus:ring-1" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Available Times</label>
                  <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                    {timeSlots.map(t => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`p-2 text-sm rounded-lg border transition-all ${selectedTime === t ? "border-[hsl(185,60%,50%)] bg-[hsl(185,60%,50%)] text-white shadow-md" : "border-[hsl(210,15%,80%)] text-[hsl(210,25%,45%)] hover:border-[hsl(185,60%,50%)] hover:shadow-sm"}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium mb-2 block">Appointment Type</label>
                <div className="flex gap-2">
                  {(["in-person","telemedicine"] as const).map(type => (
                    <button
                      key={type}
                      onClick={() => setAppointmentType(type)}
                      className={`px-3 py-2 rounded-lg border font-medium transition-all ${appointmentType === type ? "bg-[hsl(185,60%,50%)] text-white border-[hsl(185,60%,50%)] shadow-md" : "border-[hsl(210,15%,80%)] hover:border-[hsl(185,60%,50%)] hover:bg-[hsl(185,60%,10%)/5]"}`}
                    >
                      {type === "in-person" ? "In-person" : "Telemedicine"}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Patient Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name</label>
                  <input placeholder="Your full name" value={patientName} onChange={e => setPatientName(e.target.value)} className="w-full p-3 border rounded-lg shadow-sm focus:ring-[hsl(185,60%,50%)] focus:ring-1" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Notes / Symptoms</label>
                  <textarea placeholder="Briefly describe your symptoms (optional)" rows={3} value={patientNotes} onChange={e => setPatientNotes(e.target.value)} className="w-full p-3 border rounded-lg shadow-sm focus:ring-[hsl(185,60%,50%)] focus:ring-1" />
                </div>
              </div>
            </>
          )}

          <div className="flex justify-between items-center mt-6">
            <button onClick={handlePrevStep} disabled={currentStep === 1} className="px-4 py-2 border rounded-lg disabled:opacity-50 hover:shadow-sm transition">Previous</button>
            {currentStep < 3 ? (
              <button onClick={handleNextStep} disabled={(currentStep === 1 && !selectedDoctor) || (currentStep === 2 && (!selectedDate || !selectedTime))} className="px-4 py-2 rounded-lg bg-[hsl(185,60%,50%)] text-white disabled:opacity-50 hover:bg-[hsl(185,60%,45%)] transition-all shadow-md">Next</button>
            ) : (
              <button onClick={handleConfirm} className="px-4 py-2 rounded-lg bg-[hsl(200,85%,45%)] text-white hover:bg-[hsl(200,85%,40%)] shadow-md transition-all">Confirm Appointment</button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppointmentForm;
