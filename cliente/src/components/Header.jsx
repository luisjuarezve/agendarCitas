import { NavLink } from "react-router-dom"

export function Header() {
  return (
    <header className="d-flex justify-content-center py-3 ">
      <ul className="nav nav-pills bg-white rounded gap-4 p-2">
        <li className="nav-item"><NavLink to="/clientes" className="nav-link" aria-current="page">Clientes</NavLink></li>
        <li className="nav-item"><NavLink to="/empleados" className="nav-link">Empleados</NavLink></li>
        <li className="nav-item"><NavLink to="/servicios" className="nav-link">Servicios</NavLink></li>
        <li className="nav-item"><NavLink to="/citas" className="nav-link">Citas</NavLink></li>
      </ul>
    </header>
  )
}
