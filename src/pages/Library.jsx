import React from "react";
import { lazy, Suspense } from "react";
const LibraryHeader = lazy(() => import("../components/Library/LibraryHeader"));
const LibraryFilters = lazy(() =>
  import("../components/Library/LibraryFilters")
);
const SortDropdown = lazy(() => import("../components/Library/SortDropdown"));
const GameGrid = lazy(() => import("../components/Library/GameGrid"));
import Loading from "../components/common/Loading";

const Library = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="p-12 pl-26 max-w-full bg-gradient-to-b from-purple-950 to-purple-900 min-h-screen text-white">
        <LibraryHeader />
        <LibraryFilters />
        <div className="flex justify-between items-center mb-4">
          <SortDropdown />
          <p className="text-md font-semibold text-gray-400">Showing 47 of 47 games</p>
        </div>
        <GameGrid />
      </div>
    </Suspense>
  );
};

export default Library;
