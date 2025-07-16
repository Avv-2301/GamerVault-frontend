import React, { lazy, Suspense } from "react";
import Loading from "../components/common/Loading";
const ReviewForm = lazy(() => import("../components/GameDetails/ReviewForm"));
const GameHero = lazy(() => import("../components/GameDetails/GameHero"));
const GameTags = lazy(() => import("../components/GameDetails/GameTags"));
const GameMedia = lazy(() => import("../components/GameDetails/GameMedia"));
const SystemRequirements = lazy(() =>
  import("../components/GameDetails/SystemRequirements")
);
const KeyFeatures = lazy(() => import("../components/GameDetails/KeyFeatures"));
const RecommendedGames = lazy(() =>
  import("../components/GameDetails/RecommendedGames")
);
const PlayerReviews = lazy(() =>
  import("../components/GameDetails/PlayerReviews")
);
const AboutGame = lazy(() => import("../components/GameDetails/AboutGame"));

const GameDetails = () => {
  return (
    <div className="bg-[#0f0f1a] text-white px-6 lg:px-12 py-10 space-y-12">
      <Suspense fallback={<Loading />}>
        <GameHero />
        <GameTags />
      </Suspense>
      <div className="flex flex-col lg:flex-row gap-10">
        <Suspense fallback={<Loading />}>
          <div className="flex-1 space-y-10">
            <GameMedia />
            <AboutGame />
            <ReviewForm/>
            <PlayerReviews />
          </div>
        </Suspense>
        <div className="w-full lg:w-1/3 space-y-8">
          <Suspense fallback={<Loading />}>
            <SystemRequirements />
            <KeyFeatures />
            <RecommendedGames />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
