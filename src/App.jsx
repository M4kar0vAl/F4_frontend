import { useState, useEffect, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Recipes from './pages/Recipes/Recipes'
import RecipeDetail from './pages/RecipeDetail/RecipeDetail'
import Navbar from './components/Navbar/Navbar'

let didInit = false

function App() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        if (!didInit) {
            didInit = true;
            const URL = 'http://127.0.0.1:8000/api/categories/'
            fetch(URL)
                .then((response) => response.json())
                .then(data => setCategories(data))
                .catch(e => console.log(e))
        }
    }, [])

    return (
        <div className='app'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home categories={categories}/>} />
                <Route path='/recipes' element={<Recipes categories={categories} />} />
                <Route path='/recipes/:id' element={<RecipeDetail />} />
            </Routes>
        </div>
    )
}

export default App
