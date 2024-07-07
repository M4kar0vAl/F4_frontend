import React from 'react'
import { Link } from 'react-router-dom'
import './ReecipeItem.css'

const RecipeItem = ({ recipe }) => {
    return (
        <div className='recipe-item'>
            <Link to={`/recipes/${recipe.id}/`}><h3 className='recipe-title'>{recipe.title}</h3></Link>
            <span>Category: {recipe.category.name}</span>
            <p>{recipe.short_description}</p>
            <span>Difficulty: {recipe.difficulty}</span>
        </div>
    )
}

export default RecipeItem