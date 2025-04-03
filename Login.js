import  { Grid2, Paper, Box, Button, TextField} from'@mui/material';
import logo from '../src/assets/images/SMK Solutions.png';
import { useState } from 'react';
import { useTheme } from '@emotion/react';



function Login (props) {
    const [userDetails, setUserDetails] = useState ({
        username : "", password : ""
    })

    const useStyle = useTheme()

    function onChangeHandler(e) {
        setUserDetails({...userDetails, [e.target.name] : e.target.value})

    }

    function handleLogin() {
        if (userDetails.username === ""){
            alert ("Username is required")
            return
        }

        if (userDetails.password === ""){
            alert ("Password is required")
            return
        }

        props.setappState("dashboard")
        sessionStorage.setItem("dashboardState", "Dashboard")
       
    }

const paperStyle = { padding: '60px', height : '55vh', width : '60vh', marginTop: '7%', marginLeft: '35%'}
const textfieldStyle ={ marginTop: '10px'}


  return (
    <div>
      <Grid2 id='form'>
        <Paper elevation={10} style={paperStyle}>
            <img src={logo} style={{ height: "30px", width: "150px", marginLeft: '52px'}}/>
            <Box
              component="form"
              sx={{ '& > :not(style)': { m: 1, width: '24ch' } }}
              noValidate
              autoComplete="off"
             style={{margin: '8px', marginTop: '30px'}}
            >
              <TextField id="outlined-basic" label="Username" required variant="outlined" name="username" value={userDetails.username} onChange={(e) =>onChangeHandler(e)} size='small' style={textfieldStyle}/>
              <TextField id="outlined-basic" type='password' required label="Password" name="password" value={userDetails.password} onChange={(e) =>onChangeHandler(e)} variant="outlined" size='small' style={textfieldStyle}/>
            </Box>

            <Box style={{marginLeft : '18px' , marginRight: '18px' , marginTop: '15px'}}>
                          <Button variant="contained" color='primary' onClick={() =>handleLogin()} fullWidth>Submit</Button>
            </Box>


            <div>
      
      
    </div>


            


        </Paper>
      </Grid2>
    </div>
  )
}

export default Login;

