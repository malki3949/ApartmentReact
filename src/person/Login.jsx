import { useEffect, useState } from 'react'
import swal from "sweetalert";
import{useNavigate} from "react-router-dom"
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { SetUser } from '../ApartmentProject/redux/Action';
import { useDispatch, useSelector } from 'react-redux'
//import{TextField}from "@mui/icons-material/TextFields"
import TextField from '@mui/material/TextField';
import { login } from '../ApartmentProject/api';
import { current } from 'immer';
import { Box } from '@mui/material';
import '../style.css'

export const Login = () => {
    const current=useSelector(x => x.CurrentUser);
    const navigate = useNavigate()
    //const [errors, setErrors] = useState({});
    const [user, setUser] = useState({});
    const dispach=useDispatch();
    const send = () => {

        if ( user.password&&user.email) {
            // dispach(addUser(user));
            // dispach(SetUser({ ...user }));
           
           
            login(user).then
           

                (x=>{dispach(SetUser({...x.data.user}))
               
                navigate(`/personOptions`)
                console.log(x.data.token)
                 console.log(current)
                 localStorage.setItem('token',x.data.token)})
                 
              
           .catch(x=>swal(`לא תקין`, 'נא הכנס את הפרטים שוב', 'error'))
            navigate(`/login`) 

        }
        else {

            swal(` חובה`, 'חובה להכניס', 'error')
        }
    }
    //const current = useSelector(store => store.CurrentUser);
    const checkPassword = (value) => {  
    }
    const checkEmail = (value) => {
    }

return<>
  <Box
                // component="form"
                // sx={{
                //     '& > :not(style)': { m: 1, width: '25ch' },
                // }}
                // noValidate
                // autoComplete="off"
            >
             <h1 id="register">התחברות</h1>
<div className='login'>

<TextField id="outlined-basic" label=" הכנס קוד" variant="outlined"  onBlur={(e) => setUser({ ...user, password: e.target.value })} onChange={(e) => checkPassword(e.target.value)}/>
<TextField id="outlined-basic" label=" הכנס מייל" variant="outlined"  onBlur={(e) => setUser({ ...user, email: e.target.value })}onChange={(e) => checkEmail(e.target.value)}/>
</div>
<Button className='buto' onClick={send} variant="contained" endIcon={<SendIcon/>}>send</Button>

</Box>
</>
}
