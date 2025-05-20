import React from "react";
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const MovieDetailNavbar = ({ movie }) => {
  return (
    <div>
      <Tabs aria-label="Tabs with icons" variant="underline">
        <TabItem active title="Overview">
          <div className="bg-gray-800 mt-2 p-4 rounded-b-xl flex justify-center">
            <div className="max-w-3xl">
              <h2 className="font-bold text-xl mb-2">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
            </div>
          </div>
        </TabItem>
        <TabItem title="Trailer">
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </TabItem>
        <TabItem title="Stream">
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </TabItem>
      </Tabs>
    </div>
  );
};

export default MovieDetailNavbar;
