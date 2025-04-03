import FormConponent from "./common/FormComponent";
import inputDetails from "../data/FormFields.json";
import ListComponent from "./common/ListComponent";
import { useState, useEffect } from "react";
import { initial } from "../data/initialValues";
import { Button, Grid2 } from "@mui/material";


function User() {

    const [rows, setRows] = useState([])
    const [entity, setEntity]=useState(initial("user"))
    const [mode, setMode]=useState("list")
    const [error, setError]=useState(null);
    const [loading, setLoading]=useState(true);
    const [users, setUsers]=useState([]);


    const columns = [
        { field: 'id', headerName: 'Id', width: 40, flex : 1 },
        { field: 'title', headerName: 'Title', minWidth : 200, width: 150, flex : 1 },
        { field: 'body', headerName: 'Description', minWidth : 150, width: 150, flex : 1 },
        { field: 'userId', headerName: 'User name', minWidth : 150, width: 150, flex : 1, valueFormatter: (value) =>{            
            let userData = users.filter((item) => item.id == value)
            console.log(userData);
                        
            return userData[0]?.username
        } },
    ];

    useEffect(() => {
        fetchPostsData();
        fetchUserData();
    },[])

    const fetchPostsData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            console.log("posts", jsonData);
            
            setRows(jsonData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchUserData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();                        
            setUsers(jsonData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const inputs = inputDetails.user.inputInfo.map((item) =>{
        if(item.name == "user"){
            item.options = User
        }
        return item
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
            <Button variant='contained' size='large' onClick={() => handleAddClick()}>
                ADD
            </Button>
        </Grid2>
        <ListComponent
            rows={rows}
          columns={columns}
        />
        </>
      }
      {mode === "form" &&
        <FormConponent
         inputInfo={inputs}
         title={inputDetails.user.title}
         post={entity}
         setRows={setRows}
         backToList={backToList}
        //  setColumns={setColumns}
        />
      }

      </Grid2>
    )
}

export default User;