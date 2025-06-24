import React from "react";
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import CreditsCard from "./CreditsCard";

const MovieDetailNavbar = ({ movie }) => {
  return (
    <div>
      <Tabs aria-label="Tabs with icons" variant="underline">
        <TabItem active title="CAST">
          <div className="bg-gray-800 mt-2 p-4 rounded-b-xl flex justify-center">
            <CreditsCard />
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
