"use client";

import { useState } from "react";
import GridView from "./components/GridView/gridView";
import ListView from "./components/ListView/listView";
import "./page.css";
import data from "./store/store.json";

export default function Home() {
  const [isGridView, setIsGridView] = useState<boolean>(true);
  return (
    <div className="main">
      <div
        className="toggle-switch"
        role="switch"
        aria-checked="true"
        tabIndex={0}
      >
        <button
          disabled={isGridView === false}
          onClick={() => setIsGridView(!isGridView)}
          className={
            isGridView === false ? `button-enabled` : `button-disabled`
          }
          aria-pressed={isGridView === false}
        >
          List
        </button>
        <button
          disabled={isGridView === true}
          onClick={() => setIsGridView(!isGridView)}
          className={isGridView ? `button-enabled` : `button-disabled`}
          aria-pressed={isGridView === true}
        >
          Grid
        </button>
      </div>
      {isGridView ? <GridView data={data} /> : <ListView data={data} />}
    </div>
  );
}
