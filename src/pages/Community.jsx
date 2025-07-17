import React, { lazy } from "react";

const Sidebar = lazy(() => import("../components/Community/Sidebar"));
const JoinBanner = lazy(() => import("../components/Community/JoinBanner"));
const FeaturedDiscussions = lazy(() =>
  import("../components/Community/FeaturedDiscussion")
);
const TrendingTopics = lazy(() =>
  import("../components/Community/TrendingTopics")
);
const TopContributors = lazy(() =>
  import("../components/Community/TopContributors")
);
const CommunityMembers = lazy(() =>
  import("../components/Community/CommunityMembers")
);

const Community = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          {/* Full-width Join Banner */}
          <JoinBanner />

          {/* Grid Content */}
          <main className="p-6 grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <FeaturedDiscussions />
              <TrendingTopics />
            </div>
            <div className="col-span-1 space-y-6">
              <TopContributors />
              <CommunityMembers />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Community;
