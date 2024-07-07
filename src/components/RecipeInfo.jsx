import React from 'react'

const RecipeInfo = ({recipe}) => {
  return (
    <>
      <h1>{recipe.title}</h1>
      <div className='recipe-info'>
          <span>Difficulty: {recipe.difficulty}</span>
          <span>Category: {recipe?.category?.name}</span>
      </div>
      <p className='recipe-text'>{recipe.recipe_text}</p>
    </>
  )
}

export default RecipeInfo