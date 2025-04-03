import { Typography, Box, Card, CardContent, FormControl, InputLabel, Select, MenuItem, Button} from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import '../assets/css/Card.css';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import TaskIcon from '@mui/icons-material/Task';
import BarChartComponent from './BarChart';
import LineChartComponent from './LineChart';
import PieChartComponent from './PieChart';
import ScatterChartComponent from './ScatterChart';
 

function CardComponent() {

//   const [chart, setChart]=useState('');

//   const handleChange = (event) =>{
//     setChart (event.target.value);
//   };

//   const BarChart = () => <BarChartComponent/>;
//   const LineChart = () => <LineChart/>;
//   const PieChart = () => <PieChart/>;
//   const ScatterChart = () => <ScatterChart/>;

  const [selectedChart, setSelectedChart]=useState('');

  const handleChange = (event) =>{
    setSelectedChart(event.target.value);
  };

  const renderSelectedChart = (selectedChart) => {
    switch (selectedChart) {
      case 10:
        return <BarChartComponent />;
      case 20:
        return <LineChartComponent/>;
      case 30:
        return <PieChartComponent />;
      case 40:
        return <ScatterChartComponent />;
      default:
        return <BarChartComponent />;
        
    }
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={8}>
        <Stack spacing={2} direction="row">
            <Card className="gradiant" sx={{ minWidth: 49 + '%', height: 174 }} style={{backgroundColor: "#8373E9"}}>
                <CardContent>
                    <div className='iconstyle'>
                       <WidgetsRoundedIcon/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" className='cardtext'>
                       Manage Product
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" sx={{ color: "#F5F5F5"}}>
                       Total Product
                    </Typography>
                </CardContent>
            </Card>
            <Card className="gradiant" sx={{ minWidth: 49 + '%', height: 174 }} style={{backgroundColor: "#73B1E9"}}>
                <CardContent>
                    <div className='iconstyle'>
                       <TaskIcon/>
                    </div>
                    <Typography gutterBottom variant="h5" component="div" className='cardtext'>
                       Manage Task
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" sx={{ color: "#F5F5F5"}}>
                       Total Task
                    </Typography>
                </CardContent>
            </Card>
        </Stack>
         
        </Grid>
        <Grid size={4}>
        <Stack spacing={2}>
            <Card sx={{height: 12 + "vh"}} style={{backgroundColor: "#8373E9"}}>
                <CardContent>
                  <Stack spacing={2} direction="row">
                    <div className='iconstyle'>
                    <AddBoxRoundedIcon style={{color: "white"}}/>
                    </div>
                    <div className='rightcard'>
                        <span className='usernumber' style={{color: "white"}}>20k Users</span>
                        <br/>
                        <span className='product' style={{color: "#F5F5F5"}}>Product Details</span>
                    </div>
                  </Stack>
                </CardContent>
            </Card>
            <Card sx={{height: 12 + "vh"}} style={{backgroundColor: "#73B1E9"}}>
                <CardContent>
                <Stack spacing={2} direction="row">
                  <div className='iconstyle'>
                    <AddBoxRoundedIcon style={{color: "white"}}/>
                  </div>
                    <div className='rightcard'>
                        <span className='usernumber' style={{color: "white"}}>40k Users</span>
                        <br/>
                        <span className='product' style={{color: "#F5F5F5"}}>Product Details</span>
                    </div>
                </Stack>
                </CardContent>
            </Card>
        </Stack> 
        </Grid>
    </Grid>
        <Box height={30}/>

        <Grid container spacing={2}>
            <Grid size={8}>
                <Card sx={{height: 55 + "vh"}}>
                    <CardContent>
                       <div>{renderSelectedChart(selectedChart)}</div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={4}>
                <Card sx={{height: 55 + "vh"}}>
                        <CardContent>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Charts</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedChart}
                                label="Chart"
                                onChange={handleChange}
                                >
                                    <MenuItem value={10}>Bar Chart</MenuItem>
                                    <MenuItem value={20}>Line Chart</MenuItem>
                                    <MenuItem value={30}>Pie Chart</MenuItem>
                                    <MenuItem value={40}>Scatter Chart</MenuItem>
                                </Select>
                        </FormControl>
                        </CardContent>
                </Card>
        
            </Grid>
        </Grid>
      
    </Box>
    </div>
  )
}

export default CardComponent;
