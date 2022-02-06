import { useState, useEffect } from 'react'
import axios from 'axios'
import { GridValueGetterParams } from '@mui/x-data-grid'
import DataTable from '../../components/Table'


interface UserDataType {
    id: number
    avatar: string
    first_name: string
    last_name: string
    email: string
    gender: string
    phone: string
    city: string
}

const TableListUser = () => {
    const [userData, setUserData] = useState<UserDataType[]>([])

    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        {
            field: 'avatar',
            headerName: 'Avatar',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 80,
            renderCell: (params: GridValueGetterParams) => <img src={params.row.avatar} loading='lazy'/>
        },
        { field: 'first_name', headerName: 'First name', width: 130 },
        { field: 'last_name', headerName: 'Last name', width: 130 },
        { field: 'gender', headerName: 'Gender', width: 100, },
        { field: 'phone', headerName: 'Phone', width: 130, },
        { field: 'email', headerName: 'Email', width: 300, },
        { field: 'city', headerName: 'City', width: 130, },
    ]

    useEffect(() => {

        try {

            const fetchApi = async () => {
                const { data } = await axios.get('/userData.json')
                setUserData(data)
            }

            fetchApi()

        } catch (error) {
            console.error(error)
        }

    }, [])

    return (
        <div style={{ height: 650, width: '100%' }}>
            <DataTable
                rows={userData}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5, 10, 15, 20]}
                checkboxSelection
            />
        </div>
    )
}

export default TableListUser
