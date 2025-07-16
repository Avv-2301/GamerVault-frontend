import GameCard from "./GameCard";
const gamesData = [
  {
    title: "Cyber Runner 2077",
    hoursPlayed: 142.5,
    rating: 4.8,
    progress: 34,
    totalAchievements: 40,
    installed: true,
    tag: null,
    thumbnail: "https://storage.googleapis.com/uxpilot-auth.appspot.com/5e7ce7a9b3-e5137aa50c9dabc03444.png"
  },
  {
    title: "Kingdom Quest",
    hoursPlayed: 0,
    rating: 4.6,
    progress: 0,
    totalAchievements: 45,
    installed: false,
    tag: "NEW",
    thumbnail: "https://storage.googleapis.com/uxpilot-auth.appspot.com/b5a9ef0bc9-dc14c6079efb46345db9.png"
  },
];

const GameGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {gamesData.map((game, idx) => (
      <GameCard key={idx} {...game} />
    ))}
  </div>
);

export default GameGrid;