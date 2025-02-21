
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
//import { SetUser } from "./redux/Action";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from '../ApartmentProject/api';
import { SetUser } from '../ApartmentProject/redux/Action';
import { current } from 'immer';

import '../style.css'

export const Register = () => {
    const dispach=useDispatch()
    const [newuser, setNewuser] = useState()
    const navigate=useNavigate()
    //const [errors, setErrors] = useState({})
    //const Users = useSelector(x => x.Users)
    // const navigate = useNavigate()
    //const dispach = useDispatch()
    const current = useSelector(x => x.CurrentUser)
   



    const send = () => {

        if (newuser.email && newuser.password && newuser.fhone) {
                register(newuser).then(x=>{
                    dispach(SetUser({...x.data.newUser}))
                    swal(`שלום למשכיר מ${newuser.password}`, 'הצטרפת בהצלחה! 😊😄😁😍', 'success')&&
                navigate(`/personOptions`)
               localStorage.setItem('token',x.data.token)
               console.log(current.fhone)})
               .catch(x=>swal(`לא תקין`, 'נא הכנס את הפרטים שוב', 'error'))}
               else swal(`חובה `, 'חובה להכניס', 'error')
   

     }

    

    return <>
   
  

            
            <Box
                // component="form"
                // sx={{
                //     '& > :not(style)': { m: 1, width: '25ch' },
                // }}
                // noValidate
                // autoComplete="off"
            >
                <h4 id="register">כניסה</h4>
                <div className='login'>

                <TextField id="outlined-basic" label="מייל" variant="outlined" onBlur={(e) => setNewuser({ ...newuser, email: e.target.value })} />
                
                <TextField id="outlined-basic" label="סיסמה" variant="outlined" onBlur={(e) => setNewuser({ ...newuser, password: e.target.value })}/>

                <TextField id="outlined-basic" label="טלפון" variant="outlined" onBlur={(e) => setNewuser({ ...newuser, fhone: e.target.value })}/>
              
                <TextField id="outlined-basic" label="טלפון נוסף" variant="outlined" onBlur={(e) => setNewuser({ ...newuser, anotherFhone: e.target.value })}/>
</div>
            </Box>



            <Button className='buto' onClick={send} variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
       {<br></br>}
       
            {<button className='login'  onClick={()=>navigate("/login")}> אם הנך מחובר לחץ כאן</button>}

    </>

}

