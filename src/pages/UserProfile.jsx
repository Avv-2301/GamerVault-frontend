import React, { lazy, Suspense } from "react";
import Loading from "../components/common/Loading";
const ProfileHeader = lazy(() => import("../components/Profile/ProfileHeader"));
const GamingStats = lazy(() => import("../components/Profile/GamingStats"));
const FavouriteGenres = lazy(() =>
  import("../components/Profile/FavouriteGenres")
);
const RecentActivity = lazy(() =>
  import("../components/Profile/RecentActivity")
);
const BadgesAndTrophies = lazy(() =>
  import("../components/Profile/BadgesAndTrophies")
);

const UserProfile = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-[#0f0f1a] min-h-screen text-white px-6 lg:px-20 py-10 space-y-10">
        {/* Profile Header */}
        <ProfileHeader />

        {/* Grid for Stats + Activity */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
          {/* 70% width items (span 7/10 columns) */}
          <div className="md:col-span-6">
            <GamingStats />
          </div>
          <div className="md:col-span-4">
            <RecentActivity />
          </div>
          <div className="md:col-span-6">
            <FavouriteGenres />
          </div>
          <div className="md:col-span-4">
            <BadgesAndTrophies />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default UserProfile;
