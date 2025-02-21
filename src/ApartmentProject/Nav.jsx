import { NavLink } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';

// import './car.css'

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Diversity3Icon from '@mui/icons-material/Diversity3';

import { Tooltip } from '@mui/material';
export const Nav = () => {
    
    //const user = useSelector(x => x.currenUser)
    return <>

  <div id="nav">
      <Tooltip title="התחברות">
        <NavLink className="n" to='/login'> <PersonAddAltIcon  id="Ho"></PersonAddAltIcon></NavLink>
      </Tooltip>
      { <Tooltip  title="רשימת המשכירים" >
        <NavLink className="n" to='/allperson'><Diversity3Icon id="Ho"></Diversity3Icon></NavLink></Tooltip> }
      <Tooltip  title="הצטרפות" >
      <NavLink className="n" to='/register'><PersonAddAltIcon id="Ho"></PersonAddAltIcon></NavLink></Tooltip>
      <Tooltip  title="הדירות שלנו" >
      <NavLink className="n" to='/personOptions'><HomeIcon id="Ho"></HomeIcon></NavLink></Tooltip>
      <Tooltip  title="תוספות" >
      <NavLink className="n" to='/options'><PersonAddAltIcon id="Ho"></PersonAddAltIcon></NavLink></Tooltip>

      {/* <Tooltip  title="category" > */}
      {/* <NavLink className="n" to='/allcategory'><PersonAddAltIcon id="Ho"></PersonAddAltIcon></NavLink></Tooltip> */}
      {/* <Tooltip  title="apartment" >
      <NavLink className="n" to='/allapartment'><PersonAddAltIcon id="Ho"></PersonAddAltIcon></NavLink></Tooltip> */}
      {/* <Tooltip  title="הוספה" >
      <NavLink className="n" to='/addapartment'><PersonAddAltIcon id="Ho"></PersonAddAltIcon></NavLink></Tooltip> */}
        </div>
      {/* <div className='nav'> */}
        {/* <img  id="logo"src={`${process.env.PUBLIC_URL}/imageCars/logo.jpg`}></img> */}
        {/* </div> */}
  
    </>
  }