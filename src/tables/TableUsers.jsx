import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from "axios";
 
// renderizar
        export default function TableUsers() {
            const [products, setProducts] = useState ([])

            //2 endpoint
            const endpoint = 'http://localhost:4000/app/users'
            //3 definir las columnas
            const getData = async () => {
                await axios.get(endpoint).then((response) => {
                    const data = response.data
                    console.log(data)
                    setProducts(data)
                })
            }
        
            useEffect( ()=>{
                getData()
            },[])
        // definir las columnas
        
                const columns = [
                { field: 'fullName', headerName: 'Nombre', width: 70 },
                { field: 'username', headerName: 'UserName', width: 130 },
                { field: 'email', headerName: 'Email', width: 130 },
                { field: 'date', headerName: 'Fecha de Creacion', width: 130 },
                ];
                
            return (
            <div style={{ height: 400, width: '70%' }}>
                <DataGrid
                getRowId={row => row._id}
                rows={products}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                />
            </div>
            );

}
