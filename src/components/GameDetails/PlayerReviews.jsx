import React from "react";

const PlayerReviews = () => {
  const reviews = [
    {
      user: "CyberGamer92",
      avatar: "https://i.pravatar.cc/40?img=12", // Placeholder image
      stars: 5,
      comment:
        "Absolutely stunning visuals and incredible gameplay depth. The story had me hooked from the first mission. Best RPG I've played in years!",
    },
    {
      user: "NeonQueen",
      avatar: "https://i.pravatar.cc/40?img=35", // Placeholder image
      stars: 5,
      comment:
        "The character customization is insane! Spent hours just creating my character. Combat feels fluid and the world is incredibly immersive.",
    },
  ];

  return (
    <div>
      <h3 className="text-4xl font-extrabold mb-6">Player Reviews</h3>
      <div className="space-y-4">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-[#1f1f2e] p-4 rounded-md flex items-start gap-4">
            {/* Avatar */}
            <img
              src={review.avatar}
              alt={review.user}
              className="w-12 h-12 rounded-full object-cover"
            />

            {/* Text */}
            <div>
              <p className="font-extrabold mb-1 text-lg">
                {review.user} {"⭐".repeat(review.stars)}
              </p>
              <p className="text-gray-300 text-lg">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerReviews;
