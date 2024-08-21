export function Table({ columnTitles, rows }) {
  return (
    <table className="table table-bordered ">
        <thead className="thead-dark">
            <tr className='text-center'>
                {columnTitles.map((title, index) => (
                    <th scope="col" key={index}>{title}</th>
                ))}
                <th scope="col">Opciones</th>
            </tr>
        </thead>
        <tbody>
            {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {Object.values(row).map((cell, cellIndex) => (
                        <td key={cellIndex} className='text-center'>{cell}</td>
                    ))}
                    
                    <td className='d-flex justify-content-center gap-2'>
                        <button className="btn btn-danger btn-sm">Eliminar</button>
                        <button className="btn btn-warning btn-sm">Modificar</button>
                        <button className="btn btn-info btn-sm">Visualizar</button>
                    </td>
                </tr>
            ))}
        </ tbody>
    </ table>
  )
}
