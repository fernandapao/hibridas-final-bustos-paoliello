import {Route, Routes} from "react-router-dom"
import './App.css'
import { Home, Funciones, Novedades } from "./pages";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/funciones/:id" element={<Funciones/>}/>
        <Route path="/novedades/:id" element={<Novedades/>}/>
      </Routes>
    </>
  )
}

export default App
