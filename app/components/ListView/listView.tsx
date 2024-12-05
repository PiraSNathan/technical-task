import React from "react";

import "./listView.css";
import Card from "../Card/card";
import { DataEntry } from "@/app/types/commonTypes";

interface ListViewProps {
  data: DataEntry[];
}

const ListView: React.FC<ListViewProps> = ({ data }) => {
  return (
    <ul className="listView">
      {data.map((item, index) => (
        <li tabIndex={index} key={index}>
          <Card
            title={item.title}
            description={item.description}
            district={item.district}
            tags={item.tags}
            imagePath={item.imagePath}
            isGridView={false}
          />
        </li>
      ))}
    </ul>
  );
};

export default ListView;
