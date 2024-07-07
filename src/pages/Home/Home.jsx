import React, { useEffect, useState } from 'react'
import CategoryList from '../../components/CategoryList'

const Home = ({categories}) => {
    return (
        <>
            <h1>Home</h1>
            <CategoryList categories={categories}/>
        </>
    )
}

export default Home