import { Button, Grid2, TextField, Paper, MenuItem, Typography } from "@mui/material";
import {useState} from "react";
import { toast } from "react-toastify";
import { createPost } from "../../api/method";


function FormConponent(props){
    // console.log(props);
    
    const [element, setElement] =useState({})
    const [count, setCount] = useState(0)
    const [entity, setEntity]=useState(props.post)
    const [error, setError]=useState({})

    const onValueChange = (e) =>{
        setElement({...element, [e.target.name] : e.target.value})
    }

    let email_regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let mobNo_regx = /^[6-9]\d{9}$/
    let password_regx = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/   //should contain at least one digit
                                                                    //should contain at least one lower case
                                                                    //should contain at least one upper case
                                                                    //should contain at least 8 from the mentioned characters
    const validate = (values) =>{
        const error ={}
        props.inputDetails.map((item) =>{
            if(item.required){
                if(values[item.name] == ""){
                    error[item.name] = `${item.label} is required!`;
                }
                if(item.name == "email" && !email_regx.test(values[item.name])){
                    error[item.name] = 'Enter Valid Email Id'
                }
                if (item.name == "phnumber" && !mobNo_regx.test(values[item.name])) {
                    error[item.name] = 'Enter Valid Phone Number'
                }
                if (item.name == "password" && !password_regx.test(values[item.name])) {
                    error[item.name] = 'Enter Valid Password'
                }
            }
        })
    }

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }


    // const handleSubmit = () =>{
    //     let array = JSON.parse(localStorage.getItem("tableData")) || []
    //     console.log(array, typeof(array));
    //     element.id= count + 1
    //     setCount(element.id)
    //     array.unshift(element)
    //     props.setRows(array)
    //     localStorage.setItem("tableData", JSON.stringify(array))        
    //     console.log("submit");
        
    // }

    const handleSubmit = async () => {
        await createPost(entity).then((res) =>{
            // console.log(res);
            
            if(res.id){
                toast.success("Data added successfully")
            }else{
                toast.error("something went wrong!")
            }
            
        })
    }

    const handleCancle =()=>{
        props.backToList("list")
    }

    const numberOnly = (e, minLength, maxLength) =>{
        let numericValue = e.target.value.replace(/\D/g, "");
        numericValue = numericValue.slice(0, maxLength);
        e.target.value = numericValue.padStart(minLength, '0');
    }

    

    const paperStyle = { padding: '10%', height : 'auto', width : '500px', marginTop: '2%', }

    return(
        <Grid2 id='form' container spacing={2}>
            <Paper elevation={10} gap={2} style={paperStyle}>
            <h3 style={{marginBottom: '20px', textAlign: 'center'}}>{props.title}</h3>
                        
            {props.inputInfo.map((item, index) => {
                return(
                    <Grid2 item sm={10} md={10} lg={4}
                    key={index}
                    component="form"
                    sx={{ '& > :not(style)': {width: '100%' } }}
                    >
                        <TextField 
                            style={{marginTop: '12px'}}
                            required={item.required}
                            select={item.type === "select"}
                            name={item.name}
                            onInput={(e) => numberOnly(e, 0, 10)}
                            label={item.lable}
                            id={item.id}
                            value={element[item.name]}
                            onChange={(e) => onValueChange(e)}
                            size="normal"
                        >
                            {
                                item.type === "select" && 
                                item.options.map((option, index) => {
                                    return <MenuItem key={index} value={option.id}>
                                     {option.username}
                                    </MenuItem>
                                })
                           }
                        </TextField>
                        <Typography variant="h5" color="red">{error[item.name]}</Typography>
                    </Grid2>
                )
                
            })}
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px'}}>
        <Button variant="contained" onClick={()=>handleSubmit()} fullWidth size="large">Submit</Button>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}>            
        <Button variant="contained" onClick={()=>handleCancle()} fullWidth size="large" color="primary">Cancle</Button>
        </div>
        
        </Paper>
        </Grid2>
    )
}

export default FormConponent;