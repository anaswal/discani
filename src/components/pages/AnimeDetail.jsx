import { axiosInstance } from "@/lib/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const AnimeDetail = () => {
  const [animeDetail, setAnimeDetail] = useState({
    id: 0,
    title: "",
    title_japanese: "",
    images: "",
    status: "",
    type: "",
    rating: "",
    genres: "",
    synopsis: "",
  });

  const params = useParams();

  const fetchAnimeData = async () => {
    try {
      const response = await axiosInstance.get("/anime/" + params.id);
      setAnimeDetail(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAnimeData();
  }, []);

  return (
    <div className="flex justify-center py-8">
      <div className="flex px-16 py-8 gap-8 items-center bg-[#90aead] w-[80%] rounded-md">
        <div className="w-[400px] h-auto">
          <img
            src={`${animeDetail.images?.webp?.large_image_url}`}
            alt="Anime Cover"
            className="rounded-md"
          />
        </div>
        <div className="w-[60%] flex-col gap-4">
          <p>
            {animeDetail.type}. {animeDetail.rating}
          </p>
          <h2 className="text-5xl font-bold">{animeDetail.title}</h2>
          <h3 className="text-lg text-muted-foreground">
            {animeDetail.title_japanese}
          </h3>
          <p>Genre Genre Genre</p>
          <p>{animeDetail.status}</p>
          <p>{animeDetail.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;
