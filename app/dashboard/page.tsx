"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// Doctor type
export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  location: string;
  image: string;
}

// Appointment type
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

// Prescription type
interface Prescription {
  id: number;
  medication: string;
  prescribedBy: Doctor;
  date: string;
  instructions: string;
  refills: number;
  status: string;
}

// Medical record type
interface MedicalRecord {
  id: number;
  date: string;
  doctor: Doctor;
  type: string;
  diagnosis: string;
  notes: string;
}

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "appointments" | "prescriptions" | "records">("overview");
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([]);

  const doctors: Doctor[] = [
    { id: 1, name: "Dr. Amara Okoye", specialty: "Internal Medicine", experience: "12 years", rating: 4.9, location: "Lagos, Nigeria", image: "/images/doctor1.jpg" },
    { id: 2, name: "Dr. Fatima Abdullahi", specialty: "Pediatrics", experience: "8 years", rating: 4.8, location: "Accra, Ghana", image: "/images/doctor2.jpg" },
    { id: 3, name: "Dr. Kwame Asante", specialty: "Cardiology", experience: "15 years", rating: 4.9, location: "Cape Town, South Africa", image: "/images/doctor3.jpg" },
    { id: 4, name: "Dr. Aisha Kone", specialty: "General Surgery", experience: "10 years", rating: 4.9, location: "Dakar, Senegal", image: "/images/doctor4.jpg" },
    { id: 5, name: "Dr. Chinonso Okafor", specialty: "Neurology", experience: "7 years", rating: 4.7, location: "Nairobi, Kenya", image: "/images/doctor5.jpg" },
    { id: 6, name: "Dr. Tesfaye Daniel", specialty: "Obstetrics & Gynecology", experience: "11 years", rating: 4.8, location: "Addis Ababa, Ethiopia", image: "/images/doctor6.jpg" },
  ];

  useEffect(() => {
    // Load appointments
    try {
      const stored = JSON.parse(localStorage.getItem("appointments") || "null");
      if (Array.isArray(stored)) setAppointments(stored);
      else setAppointments([{
        id: Date.now() - 1000000,
        doctor: doctors[2],
        date: "2024-09-18",
        time: "10:00 AM",
        type: "In-Person",
        patient: "Adaora N.",
        notes: "Follow-up",
        status: "Confirmed",
      }]);
    } catch (e) {
      console.error(e);
    }

    // Prescriptions
    setPrescriptions([
      { id: 1, medication: "Lisinopril 10mg", prescribedBy: doctors[2], date: "2024-09-10", instructions: "Once daily", refills: 2, status: "Active" },
      { id: 2, medication: "Metformin 500mg", prescribedBy: doctors[0], date: "2024-09-05", instructions: "Twice daily", refills: 1, status: "Active" }
    ]);

    // Medical records
    setMedicalRecords([
      { id: 1, date: "2024-09-10", doctor: doctors[2], type: "Consultation", diagnosis: "Hypertension Management", notes: "Continue meds" },
      { id: 2, date: "2024-09-05", doctor: doctors[1], type: "Check-up", diagnosis: "Annual Physical", notes: "Healthy" }
    ]);
  }, [doctors]); // added doctors to dependency

  const cancelAppointment = (id: number) => {
    const updated = appointments.filter(a => a.id !== id);
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-[hsl(210,20%,98%)] text-[hsl(210,50%,15%)]">
      {/* Header */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 text-center rounded-b-3xl shadow-lg" style={{ background: "linear-gradient(135deg, hsl(200,85%,45%), hsl(185,60%,50%), hsl(170,50%,55%))" }}>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Patient Dashboard</h1>
        <p className="text-white/90 max-w-2xl mx-auto">Welcome back — here’s your personalized health overview.</p>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "Upcoming Appointments", value: appointments.length, icon: "📅" },
            { label: "Active Prescriptions", value: prescriptions.length, icon: "💊" },
            { label: "Medical Records", value: medicalRecords.length, icon: "📋" },
            { label: "Last Visit", value: appointments.length ? appointments[0].date : "—", icon: "🩺" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[hsl(210,25%,45%)]">{stat.label}</p>
                  <p className="text-2xl font-bold text-[hsl(210,50%,15%)]">{stat.value}</p>
                </div>
                <div className="w-12 h-12 bg-[hsl(185,60%,90%)] rounded-xl flex items-center justify-center text-xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <nav className="flex space-x-6 border-b px-6">
            {(["overview", "appointments", "prescriptions", "records"] as const).map((tab: "overview" | "appointments" | "prescriptions" | "records") => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 font-medium text-sm transition ${activeTab === tab ? "text-[hsl(200,85%,45%)] border-b-2 border-[hsl(200,85%,45%)]" : "text-[hsl(210,25%,45%)] hover:text-[hsl(210,50%,25%)]"}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>

          <div className="p-6 space-y-6">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Appointments */}
                <section>
                  <h3 className="text-lg font-semibold mb-4">Upcoming Appointments</h3>
                  {appointments.length === 0 ? <p className="text-[hsl(210,25%,45%)]">No upcoming appointments.</p> :
                  <div className="space-y-4">
                    {appointments.map(a => (
                      <div key={a.id} className="flex items-center justify-between p-4 bg-[hsl(210,15%,95%)] rounded-xl shadow-sm hover:shadow-md transition">
                        <div className="flex items-center space-x-4">
                          <Image src={a.doctor.image} alt={a.doctor.name} width={48} height={48} className="rounded-full object-cover" />
                          <div>
                            <p className="font-medium">{a.doctor.name}</p>
                            <p className="text-sm text-[hsl(210,25%,45%)]">{a.doctor.specialty}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{a.date}</p>
                          <p className="text-sm text-[hsl(210,25%,45%)]">{a.time}</p>
                        </div>
                        <div className="text-right space-y-1">
                          <p className="text-sm text-[hsl(210,25%,45%)]">{a.type}</p>
                          <button onClick={() => cancelAppointment(a.id)} className="px-3 py-1 rounded-md text-sm bg-[hsl(210,15%,92%)] border border-[hsl(200,85%,45%)] hover:bg-[hsl(200,85%,50%)] hover:text-white transition">Cancel</button>
                        </div>
                      </div>
                    ))}
                  </div>}
                </section>

                {/* Prescriptions */}
                <section>
                  <h3 className="text-lg font-semibold mb-4">Recent Prescriptions</h3>
                  <div className="space-y-4">
                    {prescriptions.map(p => (
                      <div key={p.id} className="flex justify-between p-4 bg-[hsl(210,15%,95%)] rounded-xl shadow-sm hover:shadow-md transition">
                        <div>
                          <p className="font-medium">{p.medication}</p>
                          <p className="text-sm text-[hsl(210,25%,45%)]">Prescribed by {p.prescribedBy.name}</p>
                          <p className="text-sm text-[hsl(210,25%,45%)]">{p.instructions}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">{p.date}</p>
                          <span className="inline-block mt-1 px-2 py-1 text-xs rounded-full bg-green-500 text-white">{p.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* Other tabs */}
            {activeTab === "appointments" && (
              <div className="space-y-4">
                {appointments.length === 0 && <p className="text-[hsl(210,25%,45%)]">No appointments scheduled.</p>}
                {appointments.map(a => (
                  <div key={a.id} className="p-6 bg-[hsl(210,15%,95%)] rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-4">
                      <Image src={a.doctor.image} alt={a.doctor.name} width={64} height={64} className="rounded-full object-cover" />
                      <div>
                        <p className="font-semibold">{a.doctor.name}</p>
                        <p className="text-sm text-[hsl(210,25%,45%)]">{a.doctor.specialty} • {a.type}</p>
                        <p className="text-sm text-[hsl(210,25%,45%)]">{a.date} at {a.time}</p>
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${a.status === "Confirmed" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}`}>{a.status}</span>
                      <button onClick={() => cancelAppointment(a.id)} className="px-3 py-1 rounded-md text-sm bg-[hsl(210,15%,92%)] border border-[hsl(200,85%,45%)] hover:bg-[hsl(200,85%,50%)] hover:text-white transition">Cancel</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "prescriptions" && (
              <div className="space-y-4">
                {prescriptions.map(p => (
                  <div key={p.id} className="p-6 bg-[hsl(210,15%,95%)] rounded-xl shadow-sm hover:shadow-md transition flex justify-between">
                    <div>
                      <p className="font-semibold">{p.medication}</p>
                      <p className="text-sm text-[hsl(210,25%,45%)]">Prescribed by {p.prescribedBy.name}</p>
                      <p className="text-sm text-[hsl(210,25%,45%)]">{p.instructions}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">{p.date}</p>
                      <span className="px-2 py-1 text-xs rounded-full bg-green-500 text-white">{p.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "records" && (
              <div className="space-y-4">
                {medicalRecords.map(r => (
                  <div key={r.id} className="p-6 bg-[hsl(210,15%,95%)] rounded-xl shadow-sm hover:shadow-md transition">
                    <p className="font-semibold mb-1">{r.type}</p>
                    <p className="text-sm text-[hsl(210,25%,45%)] mb-1">{r.date} — {r.doctor.name}</p>
                    <p className="text-sm font-medium">{r.diagnosis}</p>
                    <p className="text-sm text-[hsl(210,25%,45%)]">{r.notes}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}