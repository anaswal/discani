import React from "react";

const AnimeCard = (props) => {
  return (
    <div className="flex-col gap-4">
      <div className="w-full overflow-hidden rounded-md max-w-32">
        <img src={props.image} alt="Anime Photo" className="w-full" />
      </div>
      <div>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default AnimeCard;
