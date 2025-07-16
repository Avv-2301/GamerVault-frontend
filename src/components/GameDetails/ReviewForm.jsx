import React from "react";
import { useState } from "react";

const ReviewForm = () => {
  const [username, setUsername] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, rating, comment });
    setSubmitted(true);
    setUsername("");
    setRating(5);
    setComment("");
  };
  return (
    <div className="bg-[#1a1a2e] p-6 rounded-xl shadow-md space-y-4 border border-gray-700">
      <h3 className="text-3xl font-bold text-white">Leave a Review</h3>

      {submitted && (
        <div className="text-green-400 text-md font-semibold">Review submitted! 🎉</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-lg font-semibold bg-[#12121c] text-white border border-gray-600 focus:outline-none"
        />

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full px-4 py-2 rounded-lg font-semibold bg-[#12121c] text-white border border-gray-600 focus:outline-none"
        >
          <option value={5}>⭐️⭐️⭐️⭐️⭐️ - Excellent</option>
          <option value={4}>⭐️⭐️⭐️⭐️ - Good</option>
          <option value={3}>⭐️⭐️⭐️ - Average</option>
          <option value={2}>⭐️⭐️ - Poor</option>
          <option value={1}>⭐️ - Terrible</option>
        </select>

        <textarea
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          rows="4"
          className="w-full px-4 py-2 rounded-lg font-semibold bg-[#12121c] text-white border border-gray-600 focus:outline-none resize-none"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold py-2 rounded-lg font-semibold hover:opacity-90"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
