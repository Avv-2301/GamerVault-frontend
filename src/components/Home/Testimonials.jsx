import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      feedback:
        "GameVault has the best selection of games I’ve ever seen. The platform is smooth and downloads are lightning fast!",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      feedback:
        "Amazing deals and constant sales. I’ve saved hundreds of dollars on my favorite games. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      feedback:
        "The community features and game recommendations are spot on. I’ve discovered so many great games through this platform.",
      rating: 5,
    },
  ];
  return (
    <section className="bg-indigo-950 text-white px-8 py-10 h-96 flex flex-col justify-center">
      <h3 className="text-3xl font-bold mb-8 text-center">What Gamers Say</h3>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg"
          >
            <div className="flex items-center space-x-4 mb-4 h-18">
              <div className="bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center text-white">
                {t.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </div>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-yellow-400 text-lg">
                  {"★".repeat(t.rating)}
                </p>
              </div>
            </div>
            <p className="text-md text-white-300">{`"${t.feedback}"`}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
