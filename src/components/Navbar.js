import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { getToken } from '../services/LocalStorageService';
import "../styles/Navbar.css";
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';
const Navbar = () => {
  const { access_token } = getToken()
  return <>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{ background: '#472e4a' }}>
        <Toolbar>
          <RestaurantRoundedIcon sx={{ color: '#f011f0', fontSize: 35 }} />
          <Typography variant='h5' component="div" sx={{ flexGrow: 1,fontWeight:600, fontFamily:'Serif', color:'#75eb79'}}>Eat-StreeT
          <DeliveryDiningRoundedIcon sx={{ color: 'red', fontSize: 30 }} />
          
          </Typography>
         
          

          <Button class="navbar-style" component={NavLink} to='/' style={({ isActive }) => { return { color:isActive ?'#8f962d' : '' } }} sx={{ textDecoration: 'underline', fontSize:'20px', color: 'white', textTransform:'inherit' }}>Home</Button>

          <Button component={NavLink} to='/menu' style={({ isActive }) => { return { color:isActive ?'#8f962d' : '' } }} sx={{ textDecoration:'underline', fontSize:'20px', color: 'white', textTransform:'inherit' }}>Menu</Button> <br></br>

          <Button component={NavLink} to='/Services' style={({ isActive }) => { return { color:isActive ?'#8f962d' : '' } }} sx={{ textDecoration: 'underline', fontSize:'20px', color: 'white', textTransform:'inherit' }}>Services</Button><br></br>

          <Button component={NavLink} to='/about' style={({ isActive }) => { return { color:isActive ?'#8f962d' : '' } }} sx={{ textDecoration: 'underline', fontSize:'20px', color: 'white', textTransform: 'inherit' }}>About</Button><br></br>

          <Button component={NavLink} to='/Contact' style={({ isActive }) => { return { color:isActive ?'#8f962d' : '' } }} sx={{ textDecoration: 'underline', fontSize:'20px', color: 'white', textTransform: 'inherit' }}>Contact</Button>  <br></br>

          <Button component={NavLink} to='/Payment' style={({ isActive }) => { return { color:isActive ?'#8f962d' : '' } }} sx={{ textDecoration: 'underline', fontSize:'20px', color: 'white', textTransform: 'inherit' }}>Payment</Button>

          {access_token ? <Button component={NavLink} to='/dashboard' style={({ isActive }) => { return { color:isActive ?'#8f962d' : '' } }} sx={{ textDecoration: 'underline', fontSize:'20px', color: 'white', textTransform: 'inherit' }}>Dashboard</Button> : <Button component={NavLink} to='/login' style={({ isActive }) => { return { color:isActive ?'#8f962d' : '' } }} sx={{ textDecoration: 'underline', fontSize:'20px', color: 'white', textTransform: 'inherit' }}>Login/SignUp</Button>}



        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
