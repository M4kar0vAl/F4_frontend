import React from 'react'
import Category from './Category'

const CategoryList = ({categories}) => {
  return (
    <>
        <h2>Categories</h2>
        <ul>
            {categories.map((el) => <li key={el.id}><Category  category={el} /></li>)}
        </ul>
    </>
  )
}

export default CategoryList