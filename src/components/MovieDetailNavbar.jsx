import React from "react";
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const MovieDetailNavbar = () => {
  return (
    <div>
      <Tabs aria-label="Tabs with icons" variant="underline">
        <TabItem active title="Overview">
          <div className="bg-gray-800 mt-2 p-4 rounded-b-xl flex justify-center">
            <div className="max-w-3xl">
              <h2 className="font-bold text-xl mb-2">Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In ex
                sed, ipsum iusto ab quasi! Soluta odit vel debitis doloremque
                hic, alias iure et consequuntur ratione nesciunt quibusdam
                dolorum obcaecati deleniti, provident suscipit optio rerum
                architecto eius maxime fugiat natus dicta dolorem velit
                blanditiis. Iusto, nostrum accusamus officiis odit atque alias
                consequatur totam ex eius officia! Adipisci nisi recusandae,
                perspiciatis hic deleniti nesciunt alias quibusdam! Eum neque
                sit earum consequuntur quod commodi modi sapiente quibusdam id,
                suscipit animi cumque velit, ratione deleniti ipsum. Dignissimos
                molestiae fugiat, eius saepe laborum, eveniet soluta accusamus
                quas ex id esse earum tenetur voluptate recusandae.
              </p>
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
