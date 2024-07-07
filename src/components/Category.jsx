import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({category}) => {
  return (
    <Link to={`/recipes?category=${category.id}`}>{category.name}</Link>
  )
}

export default Category