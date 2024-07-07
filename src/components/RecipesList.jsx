import React from 'react'
import RecipeItem from './RecipeItem/RecipeItem'

const RecipesList = ({ recipes, category }) => {
    let title = category ? (
        <h2>Recipes in category: {category.name}</h2>
    ) : (
        <h2>All recipes</h2>
    )
    
    return (
        <>
            {title}
            <div className='recipe-list'>
            {recipes.map((recipe) => (
                <RecipeItem key={recipe.id} recipe={recipe}/>
            ))}
            </div>
        </>
    )
}

export default RecipesList