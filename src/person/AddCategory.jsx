
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createCate } from "../ApartmentProject/api";
import swal from "sweetalert";
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useNavigate } from "react-router-dom";
export const AddCategory = () => {
    const nav=useNavigate()
    const [newCate, setCate] = useState([]);
    const send = () => {
        try{
        console.log(newCate);
        
        createCate(newCate)
    swal(" נוספה בהצלחה קטגוריה"," יש לרענן את הדף בשביל לראות את הדירה שנוספה","success")}

       catch{console.log("ihgyf")}
   
    }


return<>
<ArrowForwardIcon id="back" onClick={() => nav(`/personOptions`)}></ArrowForwardIcon><br></br>

<TextField id="outlined-basic" label="שם:" variant="outlined" onBlur={(e) => setCate({ ...newCate, name: e.target.value })}  />
<Button className="buto" onClick={()=>send()} variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
</>
}
