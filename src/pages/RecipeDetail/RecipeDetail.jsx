import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './RecipeDetail.css'
import RecipeInfo from '../../components/RecipeInfo'

const RecipeDetail = () => {
    const [recipe, setRecipe] = useState({})
    let { id : recipeId } = useParams()

    useEffect(() => {
        const URL = `http://127.0.0.1:8000/api/recipes/${recipeId}/`

        fetch(URL)
            .then(response => response.json())
            .then(data => setRecipe(data))
            .catch(e => console.log(e))
    }, [recipeId])

    return (
        <>
            <RecipeInfo recipe={recipe} />
        </>
    )
}

export default RecipeDetail