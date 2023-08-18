import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) { 

  function handleClick(e) {
    setSelectedCategory(e.target.innerText)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return <button 
          className={(category === selectedCategory) ? "selected" : ""}
          key={category} 
          category={category}
          onClick={handleClick}>
            {category}
        </button>
      })}
    </div>
  );
}

export default CategoryFilter;
