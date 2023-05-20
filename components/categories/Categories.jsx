import React, { useState } from "react";

export default function Categories({
  categories,
  filterItems,
  activeCategory,
}) {
  return (
    <div className="row">
      <div className="col-lg-12">
        <ul id="portfolio-flters">
          {categories.map((category, index) => {
            return (
              <li
                key={index}
                onClick={() => filterItems(category)}
                className={`${
                  category === activeCategory ? "filter-active" : ""
                }`}
              >
                {category}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
