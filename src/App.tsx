import { Routes,Route } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/product/:productId" element={<ProductPage/>} />
      <Route path="*" element={<p>This page does not exist.</p>} />
    </Routes>
    </>
  )
}

export default App
