import React, { useEffect, useState } from "react";
import AnimeCard from "../ui/AnimeCard";
import { axiosInstance } from "@/lib/axios";

const HomePage = () => {
  const [data, setData] = useState([]);

  const fetchAnimeData = async () => {
    try {
      const response = await axiosInstance.get("/top/anime?limit=10");
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const animeDatas = data.map((animeData) => {
    return (
      <AnimeCard
        id={animeData.mal_id}
        image={animeData.images.webp.image_url}
        title={animeData.title}
      />
    );
  });

  useEffect(() => {
    fetchAnimeData();
  }, []);

  return (
    <>
      <div className="mx-32 h-[70vh] flex items-center px-8">
        <div className="w-[60%]">
          <h1 className="font-bold text-7xl">
            Discover your favorite Anime now.
          </h1>
        </div>
      </div>
      <div className="px-32 py-8 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4">
        {animeDatas}
      </div>
    </>
  );
};

export default HomePage;
