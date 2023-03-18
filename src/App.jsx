

import { Route, Router, Routes } from 'react-router-dom'


import './App.css'
import AddProduct from './pages/admin/AddProduct'
import Admin from './pages/admin/Admin'
import ListProduct from './pages/admin/listProduct'
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import ProjectDetailPage from './pages/ProjectDetail'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EditProduct from './pages/admin/Update'

function App() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:3000/Product`).then(({ data }) => {
      setProduct(data)
    })
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/'  >
          <Route index element={<HomePage />} />
          <Route path='product'  >
            <Route index element={<Product />} />
            <Route path=':id' element={<ProjectDetailPage />} />
          </Route>
          <Route path='admin'  >
            <Route index element={<Admin />} />
            <Route path='listProduct' element={< ListProduct props={product} />} />
            <Route path='AddProduct' element={< AddProduct />} />
            <Route path='edit/:id' element={< EditProduct />} />
          </Route>
        </Route >
      </Routes>
    </div >
  )
}
export default App
