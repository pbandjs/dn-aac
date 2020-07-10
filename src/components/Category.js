import React from "react"
import "../styles/Category.css"
import speak from "../utils/speak"

function Category({ category, index, setSelectedCategoryIndex }) {
  return (
    <div
      className="Category"
      onClick={() => {
        speak(category.label)
        setSelectedCategoryIndex(index)
      }}
    >
      {category.label}
    </div>
  )
}

export default Category
