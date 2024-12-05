import React from "react";
import "./gridView.css";
import Card from "../Card/card";
import { DataEntry } from "@/app/types/commonTypes";

interface GridViewProps {
  data: DataEntry[];
}

const GridView: React.FC<GridViewProps> = ({ data }) => {
  return (
    <ul className="gridView">
      {data.map((item, index) => (
        <li tabIndex={0} key={index}>
          <Card
            title={item.title}
            description={item.description}
            district={item.district}
            tags={item.tags}
            imagePath={item.imagePath}
            isGridView={true}
          />
        </li>
      ))}
    </ul>
  );
};

export default GridView;
