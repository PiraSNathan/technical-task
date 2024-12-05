import React from "react";
import "./card.css";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  district: string;
  tags: string[];
  imagePath: string;
  isGridView: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  district,
  tags,
  imagePath,
  isGridView,
}) => {
  return (
    <div className={isGridView ? "card-grid" : "card-list"}>
      <div className="image-wrapper">
        <Image
          alt="Skyline with mountains in the background"
          width={150}
          height={150}
          src={imagePath}
        />
        <span style={{ fontSize: 11 }}>copyright by photograph</span>
      </div>
      <div className="content-wrapper">
        <div>
          <span>{district}</span>
          <div>
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
