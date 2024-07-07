import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"
import RecipesList from '../../components/RecipesList'

const Recipes = ({categories}) => {
    const [recipes, setRecipes] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [category, setCategory] = useState(null)

    // refetch recipes every time searchParams change
    useEffect(() => {
        const categoryId = parseInt(searchParams.get('category')) // get category id from url
        const URL = isFinite(categoryId)
        ?
        `http://127.0.0.1:8000/api/recipes/?category=${categoryId}` // get recipes in specific category
        :
        'http://127.0.0.1:8000/api/recipes/' // get all recipes

        fetch(URL)
            .then(response => response.json())
            .then(data => setRecipes(data))
            .catch(e => console.log(e))
        setCategory(categories.find(cat => cat.id === categoryId)) // find category object by id and update state
    }, [searchParams])
    return (
        <>
            <h1>Recipes</h1>
            <RecipesList recipes={recipes} category={category}/>
        </>
  )
}

export default Recipes