import { Typography, Box, Card, CardContent, FormControl, InputLabel, Select, MenuItem, Button} from '@mui/material';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import '../assets/css/Card.css';
import { Margin } from '@mui/icons-material';
 

function Grid2() {

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={12}>
                <Card style={{backgroundColor: '#3B1E54'}}>
                    <CardContent style={{textAlign: 'center'}}>
                        <Typography gutterBottom variant="h6" component="div">
                        1
                        </Typography>
                    </CardContent>
                </Card>
        </Grid>
        <Grid size={8}>
            <Card sx={{height: 42 + "vh"}} style={{backgroundColor: '#9B7EBD'}}>
                <CardContent style={{textAlign: 'center'}}>
                  <Typography variant='h6'>2</Typography>
                </CardContent>
            </Card>
        </Grid>

    <Grid size={4}>
        <Stack spacing={2}>
        <Card sx={{height: 20 + "vh"}} style={{backgroundColor: '#D4BEE4'}}>
                <CardContent style={{textAlign: 'center'}}>
                  <Typography variant='h6'>3</Typography>
                </CardContent>
            </Card>
            <Card sx={{height: 20 + "vh"}} style={{backgroundColor: '#EEEEEE'}}>
                <CardContent style={{textAlign: 'center'}}>
                  <Typography variant='h6'>4</Typography>
                </CardContent>
            </Card>
        </Stack> 
        </Grid>

        <Grid size={4}>
            <Card sx={{height: 30 + "vh"}} style={{backgroundColor: '#E5D9F2'}}>
                <CardContent style={{textAlign: 'center'}}>
                  <Typography variant='h6'>5</Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid size={4}>
            <Card sx={{height: 30 + "vh"}} style={{backgroundColor: '#F5EFFF'}}>
                <CardContent style={{textAlign: 'center'}}>
                  <Typography variant='h6'>6</Typography>
                </CardContent>
            </Card>
        </Grid> 
        <Grid size={4}>
            <Card sx={{height: 30 + "vh"}} style={{backgroundColor: '#CDC1FF'}}>
                <CardContent style={{textAlign: 'center'}}>
                  <Typography variant='h6'>7</Typography>
                </CardContent>
            </Card>
        </Grid>  
        <Grid size={4}>
            <Card sx={{height: 30 + "vh"}} style={{backgroundColor: '#A594F9'}}>
                <CardContent style={{textAlign: 'center'}}>
                  <Typography variant='h6'>8</Typography>
                </CardContent>
            </Card>
        </Grid>  
        <Grid size={4}>
            <Card sx={{height: 30 + "vh"}} style={{backgroundColor: '#512B81'}}>
                <CardContent style={{textAlign: 'center'}}>
                  <Typography variant='h6'>9</Typography>
                </CardContent>
            </Card>
        </Grid>  
   
        
    </Grid>
      
    </Box>
    </div>
  )
}

export default Grid2;
