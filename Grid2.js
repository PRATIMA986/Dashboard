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
                <Card style={{backgroundColor: '#FF7D29'}}>
                    <CardContent style={{textAlign: 'center'}}>
                        <Typography gutterBottom variant="h6" component="div">
                        Header
                        </Typography>
                    </CardContent>
                </Card>
        </Grid>
      
        <Grid size={4}>
            <Card sx={{height: 61 + "vh"}} style={{backgroundColor: '#FFEEA9'}}>
                <CardContent style={{textAlign: 'center'}}>
                  <Typography variant='h6'>Sidebar</Typography>
                </CardContent>
            </Card>
        </Grid>
              <Grid size={8} spacing={2}>
                <Card sx={{height: 30 + "vh"}} style={{backgroundColor: '#FFBF78'}}>
                    <CardContent style={{textAlign: 'center'}}>
                      <Typography variant='h6'>Content 1</Typography>
                    </CardContent>
                </Card>

                <Stack direction="row">
                <Grid size={7} spacing={2}>
                    <Card sx={{height: 30 + "vh"}} style={{backgroundColor: '#FEFFD2', marginTop: '10px'}} >
                        <CardContent style={{textAlign: 'center'}}>
                          <Typography variant='h6'>Content 2</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={7} spacing={2}>
                    <Card sx={{height: 30 + "vh"}} style={{backgroundColor: '#FFF3C7', marginTop: '10px', marginLeft: '10px'}}>
                        <CardContent style={{textAlign: 'center'}}>
                          <Typography variant='h6'>Content 3</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                </Stack>

              </Grid>

        
        </Grid>
        

        <Grid size={12}>
                <Card style={{backgroundColor: '#FF7D29', marginTop: '10px'}}>
                    <CardContent style={{textAlign: 'center'}}>
                        <Typography gutterBottom variant="h6" component="div">
                        Footer
                        </Typography>
                    </CardContent>
                </Card>
        </Grid> 
   
        
    
      
    </Box>
    </div>
  )
}

export default Grid2;


