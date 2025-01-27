import React from "react";
import { Button } from "./button";
import { Link } from "react-router";

const AnimeCard = (props) => {
  return (
    <div className="flex-col gap-4 w-32 shadow-md rounded-md bg-[#244855] text-white">
      <div className="w-full overflow-hidden rounded-md">
        <img src={props.image} alt="Anime Photo" className="w-full" />
      </div>
      <div>
        <p>{props.title}</p>
      </div>
      <Link to={"/anime/" + props.id}>
        <Button className="text-white">Show Detail</Button>
      </Link>
    </div>
  );
};

export default AnimeCard;
