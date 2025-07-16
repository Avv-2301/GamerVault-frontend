import React, { useState } from "react";

const AgeVerification = () => {
  const [dob, setDob] = useState({ month: "", day: "", year: "" });
  const [calendarDate, setCalendarDate] = useState("");
  const [error, setError] = useState("");

  const months = [...Array(12)].map((_, i) => i + 1);
  const days = [...Array(31)].map((_, i) => i + 1);
  const years = [...Array(100)].map((_, i) => new Date().getFullYear() - i);

  const handleSubmit = () => {
    let birthDate;
    if (calendarDate) {
      birthDate = new Date(calendarDate);
    } else {
      const { month, day, year } = dob;
      if (!month || !day || !year) {
        setError("Please fill in all fields.");
        return;
      }
      birthDate = new Date(`${year}-${month}-${day}`);
    }

    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const isOldEnough =
      age > 18 ||
      (age === 18 &&
        (today.getMonth() > birthDate.getMonth() ||
          (today.getMonth() === birthDate.getMonth() &&
            today.getDate() >= birthDate.getDate())));

    if (!isOldEnough) {
      setError("You must be 18+ to enter");
    } else {
      setError("");
      alert("Access Granted 🎮 Welcome to the Game Zone!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c0029] to-[#160041] flex items-center justify-center px-4">
      <div className="bg-gray-900 p-8 rounded-xl max-w-md w-full shadow-xl relative ">
        {/* Profile Logo */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full border-4 border-pink-500 flex items-center justify-center bg-[#111]">
            🎮
          </div>
        </div>
        <h2 className="text-center text-white font-bold text-xl mb-6 flex items-center justify-center flex-col animate-pulse">
          GAME ZONE
          <div className="mt-2 w-16 h-[5px] rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-pink-400"></div>
        </h2>

        {error && (
          <div className="bg-red-700 text-red-100 p-3 rounded-lg mb-4 text-center text-md font-semibold h-16 items-center flex justify-center">
            ⚠️ {error}
          </div>
        )}

        <label className="text-lg font-semibold text-gray-300 mb-2 block flex items-center gap-2">
          📅 Date of Birth
        </label>
        <div className="flex gap-2 mb-4">
          <select
            className="bg-gray-800 text-white p-2 rounded-lg w-full"
            onChange={(e) => setDob({ ...dob, month: e.target.value })}
          >
            <option value="">Month</option>
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <select
            className="bg-gray-800 text-white p-2 rounded-lg w-full"
            onChange={(e) => setDob({ ...dob, day: e.target.value })}
          >
            <option value="">Day</option>
            {days.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <select
            className="bg-gray-800 text-white p-2 rounded-lg w-full"
            onChange={(e) => setDob({ ...dob, year: e.target.value })}
          >
            <option value="">Year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90 h-14 text-white w-full py-2 rounded font-bold mb-4 flex items-center justify-center gap-2 hover:shadow-lg transition duration-300"
        >
          🚀 ENTER GAME ZONE
        </button>
      </div>
    </div>
  );
};

export default AgeVerification;
