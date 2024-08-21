import React from 'react'
import '../stylesheet/Servicios.css'
import {Main} from '../components/Main'

function Servicios() {
    const title = "Servicios"
    const columnTitles = ['#', 'Nombre', 'Descripcion', 'Precio']
    const rows = []

    return (
        <Main title={title} columnTitles={columnTitles} rows={rows} />
    )
}

export default Servicios