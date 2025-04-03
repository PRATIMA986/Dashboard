import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Card, CardActions, CardHeader, Chip, Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';



export default function Autofillup() {

  const [task, setTask]= useState([])
  const [selectedItem, setSelectedItem]= useState([])

      useEffect(()=>{
        getTasks()
      },[])


function getTasks() {
  // console.log("API is called.");
  
  fetch("../data/MenuList.json").then((res)=>{
   
    
      if (res.status === 200) {
        return res.json()
      }
  }).then((data)=>{
       setTask(data)
  }).catch((error)=>{
      console.log(error.message);
      
  })
}

const handleDelete = (id) =>{
  let filterData = selectedItem.filter(item => item.id != id)
  setSelectedItem(filterData)
};

const availableItems = task.filter(
  (item) => !selectedItem.some(selectedItem => selectedItem.id === item.id)
);

function handleSelect(e, record) {
  setSelectedItem([...selectedItem, record])
  // let filteredData = task.filter(item => item.id != record.id) 
  // setTask(filteredData)
}

  return (

    <Card sx={{padding: "2rem"}}>
      <CardHeader>
        <Typography variant='h4'>Task Manager</Typography>
      </CardHeader>
          <Autocomplete
            disablePortal  
            options={task}
            sx={{ 
              width: "auto", 
              margin: 10
            }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
            onChange={handleSelect}
          />
      <CardActions>
        <Stack direction="row">
              {selectedItem.map((item) => {
               return (
                  
                  <Chip
                    label={item.label}
                    onDelete={() => handleDelete(item.id)}
                  />
                 )
              })}
        </Stack>
      </CardActions>
    
    </Card>
  );
}
