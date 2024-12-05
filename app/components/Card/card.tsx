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
  // Duration of the project
  periodTime: number;
  daysLeft: number;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  district,
  tags,
  imagePath,
  isGridView,
  periodTime,
  daysLeft,
}) => {
  const progress = String((daysLeft / periodTime) * 100) + "%";

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
        {/* progress bar */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                height: "2px",
                width: "100%",
                backgroundColor: "grey",
                position: "absolute",
              }}
            ></div>
            <div
              style={{
                height: "2px",
                width: progress,
                backgroundColor: "blue",
                position: "relative",
              }}
            ></div>
          </div>
          <span>{periodTime - daysLeft} days left</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
