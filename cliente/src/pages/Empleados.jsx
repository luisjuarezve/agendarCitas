import React from 'react'
import {Main} from '../components/Main'

function Empleados() {
  const title = "Empleados"
  const columnTitles = ['#', 'Cedula', 'Nombre', 'Apellido', 'correo', 'fecha de nacimiento', 'fecha de registro']
  const rows = []

  return (
    <Main title={title} columnTitles={columnTitles} rows={rows} />
  )
}

export default Empleados