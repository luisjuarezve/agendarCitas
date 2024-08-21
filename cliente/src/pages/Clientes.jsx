import React from 'react'
import {Main} from '../components/Main'

function Clientes() {
  const title = "Clientes"
  const columnTitles = ['#', 'Cedula', 'Nombre', 'Apellido', 'correo', 'fecha de nacimiento', 'fecha de registro']
  const rows = []

  return (
    <Main title={title} columnTitles={columnTitles} rows={rows} />
  )
}

export default Clientes