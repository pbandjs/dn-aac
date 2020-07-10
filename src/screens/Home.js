import React, { useState } from "react"
import "../styles/Home.css"
import { categories } from "../api/builtins"
import Category from "../components/Category"
import Phrase from "../components/Phrase"

function Home() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0)
  const selectedCategory = categories[selectedCategoryIndex]

  return (
    <div className="Home">
      <div className="Sidebar">
        {categories.map((c, i) => <Category category={c} setSelectedCategoryIndex={setSelectedCategoryIndex} index={i} />)}
      </div>

      <div className="Main">{selectedCategory.phrases.map(p => <Phrase phrase={p} />)}</div>
    </div>
  )
}

export default Home
