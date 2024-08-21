import { Header } from "./components/header"
import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Clientes from "./pages/clientes"
import Empleados from "./pages/empleados"
import Servicios from "./pages/servicios"
import Citas from "./pages/citas"

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Navigate to={"/clientes"} />} />
          <Route path='/clientes' element={<Clientes />} />
          <Route path='/empleados' element={<Empleados />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/citas' element={<Citas />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  )
}

export default App