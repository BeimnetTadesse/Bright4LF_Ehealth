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
  // ... (all other diseases)
];

const SymptomChecker = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<Disease[]>([]);
  const [searched, setSearched] = useState(false);

  const handleCheckSymptoms = () => {
    const query = input.toLowerCase().trim();

    const matched = diseases.filter(
      (disease) =>
        disease.name.toLowerCase().includes(query) ||
        disease.symptoms.some((symptom) => symptom.toLowerCase().includes(query))
    );

    setResults(matched);
    setSearched(true);
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

      {searched && results.length === 0 && (
        <p className="text-center text-red-500 font-semibold mt-4">
          No disease found for &quot;{input}&quot;. Please consult a doctor.
        </p>
      )}
    </div>
  );
};

export default SymptomChecker;
