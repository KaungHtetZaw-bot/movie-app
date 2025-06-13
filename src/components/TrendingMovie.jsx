import React, { useEffect, useRef, useState } from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TrendingMovie = () => {
  const [selectWeek, setSelectWeek] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const trendAll = useSelector((state) => state.movies.trendAll);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 300;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const { current } = scrollRef;
    setShowLeftArrow(current.scrollLeft > 0);
    setShowRightArrow(
      current.scrollLeft + current.clientWidth < current.scrollWidth
    );
  };

  useEffect(() => {
    const { current } = scrollRef;
    if (current) {
      current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (current) {
        current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="select-none">
      <div className="sticky top-0 bg-gray-800 p-3 rounded-xl items-center">
        <h1 className="font-bold text-white mb-3">TRENDING</h1>

        <label className="inline-flex items-center cursor-pointer">
          <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Today
          </span>
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600 dark:peer-checked:bg-gray-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            This Week
          </span>
        </label>
      </div>

      <div className="p-2 flex items-center">
        {showLeftArrow && (
          <div
            className="text-3xl hover:scale-125 cursor-pointer text-white"
            onClick={() => scroll("left")}
          >
            <BiLeftArrow />
          </div>
        )}
        <div
          className="overflow-x-auto whitespace-nowrap scrollbar-hide flex-1 overflow-y-hidden"
          ref={scrollRef}
        >
          <div className="flex px-4">
            {trendAll.slice(0, 10).map((trendAllEach) => (
              <div
                className="w-40 h-60 md:w-48 md:h-72 flex-shrink-0 p-[3px] text-center rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer bg-gray-900 m-3"
                key={trendAllEach.id}
                onClick={() =>
                  navigate(`/${trendAllEach.media_type}/${trendAllEach.id}`)
                }
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${trendAllEach.poster_path}`}
                  alt="movie poster"
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
            ))}
            <div className="w-40 h-60 md:w-48 md:h-72 flex-shrink-0 text-center flex items-center justify-center text-lg text-white rounded-lg cursor-pointer transition-transfrom duration-100 hover:text-2xl">
              See More ...
            </div>
          </div>
        </div>
        {showRightArrow && (
          <div
            className="text-3xl hover:scale-125 cursor-pointer text-white"
            onClick={() => scroll("right")}
          >
            <BiRightArrow />
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingMovie;
