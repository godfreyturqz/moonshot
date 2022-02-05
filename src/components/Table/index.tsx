import { DataGrid, GridColumns, GridRowsProp  } from '@mui/x-data-grid'

interface DataTableType {
    rows: GridRowsProp
    columns: GridColumns
    pageSize: number | undefined
    rowsPerPageOptions: number[] | undefined
    checkboxSelection: boolean | undefined
}

const DataTable: React.FC<DataTableType> = ({
    rows,
    columns,
    pageSize,
    rowsPerPageOptions,
    checkboxSelection
}) => {

  return (
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            rowsPerPageOptions={rowsPerPageOptions}
            checkboxSelection={checkboxSelection}
        />
  )
}

export default DataTable