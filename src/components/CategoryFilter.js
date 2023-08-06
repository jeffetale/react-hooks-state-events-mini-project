// CategoryFilter.js
import React from "react";

function CategoryFilter(props) {
  function handleButtonClick(category) {
    props.onSelectCategory(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {props.categories.map(category => (
        <button
          key={category}
          className={category === props.selectedCategory ? "selected" : ""}
          onClick={() => handleButtonClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

