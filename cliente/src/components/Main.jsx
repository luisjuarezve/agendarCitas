import { Table } from './Table'

export function Main({title, columnTitles, rows}) {
    const processedTitle = title.toLowerCase().slice(0, -1);

    return (
        <div className="d-flex justify-content-center align-items-center mt-4 w-100">
            <div className="card col-md-12 p-5 shadow-lg">
                <div className="d-flex space justify-content-between align-items-center">
                    <h3 className="text-center">{title}</h3>
                    <button className='btn btn-success btn-sm'>+</button>
                </div>
                <input type="text" className="form-control mb-4" id="email" placeholder={`Buscar ${processedTitle}`} />
                <Table columnTitles={columnTitles} rows={rows} />
            </div>
        </div>
    )
}
