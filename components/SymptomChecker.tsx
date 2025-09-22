"use client";

import React, { useState } from "react";

type Disease = {
  name: string;
  symptoms: string[];
  treatments: string[];
};

const diseases: Disease[] = [
    {
      name: "Malaria",
      symptoms: ["fever", "chills", "headache", "sweating", "fatigue"],
      treatments: ["Artemisinin-based combination therapy", "Rest", "Fluids"],
    },
    {
      name: "Common Cold",
      symptoms: ["cough", "sore throat", "runny nose", "sneezing"],
      treatments: ["Rest", "Warm fluids", "Cough syrup", "Paracetamol"],
    },
    {
      name: "Influenza (Flu)",
      symptoms: ["fever", "cough", "sore throat", "muscle aches", "fatigue"],
      treatments: ["Rest", "Fluids", "Antiviral medications (if prescribed)"],
    },
    {
      name: "Gastroenteritis",
      symptoms: ["stomachache", "nausea", "diarrhea", "vomiting", "fever"],
      treatments: ["Hydration", "Rest", "Antiemetics (if needed)"],
    },
    {
      name: "COVID-19",
      symptoms: ["fever", "cough", "fatigue", "loss of taste/smell", "shortness of breath"],
      treatments: ["Isolation", "Rest", "Fluids", "Seek medical care if severe"],
    },
    {
      name: "Migraine",
      symptoms: ["headache", "sensitivity to light", "nausea", "vomiting"],
      treatments: ["Pain relief (Ibuprofen, Acetaminophen)", "Rest in a dark room", "Hydration"],
    },
    // NEW ADDITIONS:
    {
      name: "Hypertension (High Blood Pressure)",
      symptoms: ["often no symptoms", "headaches", "shortness of breath", "nosebleeds"],
      treatments: ["Lifestyle changes", "Blood pressure medications", "Regular monitoring"],
    },
    {
      name: "Diabetes Type 2",
      symptoms: ["increased thirst", "frequent urination", "fatigue", "blurred vision"],
      treatments: ["Diet control", "Exercise", "Oral medications", "Insulin therapy"],
    },
    {
      name: "Asthma",
      symptoms: ["wheezing", "shortness of breath", "chest tightness", "coughing"],
      treatments: ["Inhalers", "Avoiding triggers", "Long-term control medications"],
    },
    {
      name: "Arthritis",
      symptoms: ["joint pain", "stiffness", "swelling", "decreased range of motion"],
      treatments: ["Pain relievers", "Physical therapy", "Anti-inflammatory drugs"],
    },
    {
      name: "Pneumonia",
      symptoms: ["cough with phlegm", "fever", "chills", "difficulty breathing"],
      treatments: ["Antibiotics", "Rest", "Fever reducers", "Hospitalization if severe"],
    },
    {
      name: "Bronchitis",
      symptoms: ["persistent cough", "mucus production", "fatigue", "chest discomfort"],
      treatments: ["Rest", "Fluids", "Cough medicine", "Inhalers if needed"],
    },
    {
      name: "Urinary Tract Infection (UTI)",
      symptoms: ["burning sensation when urinating", "frequent urination", "pelvic pain"],
      treatments: ["Antibiotics", "Increased fluid intake", "Pain relievers"],
    },
    {
      name: "Sinusitis",
      symptoms: ["facial pain", "nasal congestion", "headache", "thick nasal discharge"],
      treatments: ["Nasal decongestants", "Saline nasal spray", "Pain relievers"],
    },
    {
      name: "Conjunctivitis (Pink Eye)",
      symptoms: ["redness", "itching", "discharge", "tearing"],
      treatments: ["Antibiotic eye drops", "Warm compresses", "Good hygiene"],
    },
    {
      name: "Anemia",
      symptoms: ["fatigue", "weakness", "pale skin", "shortness of breath"],
      treatments: ["Iron supplements", "Dietary changes", "Treat underlying cause"],
    },
    {
      name: "Chickenpox",
      symptoms: ["itchy rash", "fever", "fatigue", "loss of appetite"],
      treatments: ["Calamine lotion", "Antihistamines", "Fever reducers"],
    },
    {
      name: "Tuberculosis",
      symptoms: ["persistent cough", "chest pain", "weight loss", "night sweats"],
      treatments: ["Antibiotic course", "Isolation during infectious phase"],
    },
    {
      name: "Dengue Fever",
      symptoms: ["high fever", "severe headache", "pain behind eyes", "rash"],
      treatments: ["Hydration", "Pain relievers", "Hospital care if severe"],
    },
    {
      name: "Typhoid Fever",
      symptoms: ["sustained high fever", "headache", "abdominal pain", "rash"],
      treatments: ["Antibiotics", "Hydration", "Proper sanitation"],
    },
    {
      name: "Hepatitis A",
      symptoms: ["fatigue", "nausea", "abdominal pain", "jaundice"],
      treatments: ["Rest", "Hydration", "Vaccination for prevention"],
    },
    {
      name: "Measles",
      symptoms: ["fever", "dry cough", "runny nose", "skin rash"],
      treatments: ["Fever reducers", "Rest", "Vitamin A supplementation"],
    },
    {
      name: "Cholera",
      symptoms: ["profuse watery diarrhea", "vomiting", "dehydration"],
      treatments: ["Oral rehydration solution", "Antibiotics", "IV fluids"],
    },
    {
      name: "Tetanus",
      symptoms: ["muscle stiffness", "jaw cramping", "difficulty swallowing"],
      treatments: ["Wound care", "Antitoxin", "Muscle relaxants"],
    },
    {
      name: "Meningitis",
      symptoms: ["sudden high fever", "stiff neck", "severe headache", "confusion"],
      treatments: ["Emergency medical care", "Antibiotics", "Hospitalization"],
    },
    {
      name: "Epilepsy",
      symptoms: ["temporary confusion", "uncontrollable jerking", "loss of consciousness"],
      treatments: ["Anti-seizure medications", "Lifestyle management", "Vagus nerve stimulation"],
    },
    {
      name: "Thyroid Disorders",
      symptoms: ["fatigue", "weight changes", "mood swings", "temperature sensitivity"],
      treatments: ["Hormone replacement", "Anti-thyroid medications", "Regular monitoring"],
    }
  ];

const SymptomChecker = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<Disease[]>([]);
  const [searched, setSearched] = useState(false); // track if button was clicked

  const handleCheckSymptoms = () => {
    const query = input.toLowerCase().trim();

    const matched = diseases.filter(
      (disease) =>
        disease.name.toLowerCase().includes(query) ||
        disease.symptoms.some((symptom) => symptom.toLowerCase().includes(query))
    );

    setResults(matched);
    setSearched(true); // mark that user searched
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleCheckSymptoms();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-3xl shadow-lg bg-white">
      <h2 className="text-3xl font-bold mb-4 text-center text-[hsl(210,50%,15%)]">
        Symptom & Disease Checker
      </h2>
      <p className="text-center text-[hsl(210,25%,45%)] mb-6">
        Enter a symptom or disease name to see related diseases and treatments.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter symptom or disease (e.g., fever, malaria)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[hsl(200,85%,45%)]"
        />
        <button
          onClick={handleCheckSymptoms}
          className="px-6 py-3 rounded-xl bg-[hsl(200,85%,45%)] text-white font-semibold hover:scale-105 transition-transform"
        >
          Check
        </button>
      </div>

      {results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((disease, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-[hsl(210,20%,98%)]"
            >
              <h3 className="font-bold text-xl mb-2 text-[hsl(210,50%,15%)]">
                {disease.name}
              </h3>
              <p className="mb-2 text-[hsl(210,25%,45%)]">
                <span className="font-semibold">Symptoms:</span>{" "}
                {disease.symptoms.join(", ")}
              </p>
              <p className="text-[hsl(210,25%,45%)]">
                <span className="font-semibold">Treatments:</span>{" "}
                {disease.treatments.join(", ")}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Only show "No disease found" if user clicked search */}
      {searched && results.length === 0 && (
        <p className="text-center text-red-500 font-semibold mt-4">
          No disease found for "{input}". Please consult a doctor.
        </p>
      )}
    </div>
  );
};

export default SymptomChecker;
