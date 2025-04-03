import FormConponent from './common/FormComponent';
import inputDetails from "../data/FormFields.json";
import ListComponent from "./common/ListComponent";
import tableData from '../data/ListComponent.json';
import { useState, useEffect } from "react";
import { Button, Grid2 } from '@mui/material';
import { initial } from '../data/initialValues';

function Product(){
    const [rows, setRows] = useState([])
    const [entity, setEntity]=useState(initial("product"))
    const [mode, setMode]=useState("list")

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setRows(json))
    })

    const handleAddClick =()=>{
      setMode("form")
    }

    const backToList =(value)=>{
      setMode(value)
    }
      
      
    return(
        <Grid2 container gap={4}>
         {mode === "list" &&
       
        <>
        <Grid2 columns={4}>
            <Button variant='contained' size='large' onClick={() => handleAddClick()}>ADD</Button>
        </Grid2>
        <ListComponent
            rows={rows}
          columns={tableData.product}
        />
        </>
      }
        {mode === "form" &&
         <FormConponent
         inputInfo={inputDetails.product.inputInfo}
         title={inputDetails.product.title}
         entity={entity}
         setRows={setRows}
         backToList={backToList}
        //  setColumns={setColumns}
        />
      }

        

       
        </Grid2>
    )

    
}
export default Product;
