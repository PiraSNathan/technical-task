import React from "react";
import "./card.css";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  district: string;
  tags: string[];
  imagePath: string;
  // Property to decide whether to diplay whole content of card
  // side by side for list view or one below the other for grid view.
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
      <div className="text-wrapper">
        <div className="text-header">
          <span>{district}</span>
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="info-wrapper">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
