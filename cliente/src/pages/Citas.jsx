import React from 'react'
import { Main } from '../components/Main'

function Citas() {
  const title = "Citas"
  const columnTitles = ['#', 'Nombre', 'Precio']
  const rows = []

  return (
    <Main title={title} columnTitles={columnTitles} rows={rows} />
  )
}

export default Citas