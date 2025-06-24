import React, { useEffect, useState } from "react";
import { api, api_key } from "../api";
import { useParams } from "react-router-dom";

const CreditsCard = () => {
  const { movie_id, media_type } = useParams();
  const [cast, setCast] = useState([]);

  const fetchCast = async () => {
    try {
      const res = await api.get(
        `${media_type}/${movie_id}/aggregate_credits?api_key=${api_key}`
      );
      setCast(res?.data?.cast || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCast();
  }, [movie_id, media_type]);

  return (
    <div className="w-full px-4">
      <div className="text-end p-1 text-2xl mb-2">more </div>
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {cast.length === 0 && (
          <div className="text-sm text-gray-500">No cast data available.</div>
        )}
        {cast?.slice(0, 11).map((person) => (
          <div
            key={person.id}
            className="p-1 bg-gray-900 shadow-sm min-w-[110px] text-center rounded-sm"
          >
            <img
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w185${person.profile_path}`
                  : "/neo-movies-logo.png"
              }
              alt={person.name}
              className="w-[100px] h-[150px] object-cover rounded-sm"
            />
            <div className="mt-1 text-sm font-medium truncate">
              {person.name}
            </div>
            <div className="text-xs text-gray-600 truncate">
              {person.roles?.[0]?.character || "—"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditsCard;
