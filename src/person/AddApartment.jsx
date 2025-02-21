import { getAllperson } from "../ApartmentProject/api";
// import { createApart} from "../ApartmentProject/api"
import { createApart } from "../ApartmentProject/api.js";
import swal from "sweetalert"
import TextField from '@mui/material/TextField';
import { getAllcategory } from "../ApartmentProject/api";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
// import{fetchCategories} from"./PersonOptions"
import { getAllcity } from "../ApartmentProject/api";
import { useDispatch, useSelector } from "react-redux"
import Box from '@mui/material/Box';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

import '../style.css'
import { useNavigate } from "react-router-dom";

export const AddApartment = () => {




    const nav=useNavigate();
    const current = useSelector(x => x.CurrentUser)
  const [newApart,setnewapart]=useState({});
 const [category, setCategory] = useState([]);
    
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getAllcategory();
                console.log(response.data);
                setCategory(response.data);
                // Uncomment and dispatch your action here if needed
                 //dispatch(getAllcategory(response.data));
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();

    }, []);
// ----------------------------------------------
  const [city, setcity] = useState([]);
  useEffect(() => {
    const fetchbeds = async () => {
      console.log("llllllllllll");
        try {
            const response = await getAllcity();
            console.log(response.data);
            setcity(response.data);
            // Uncomment and dispatch your action here if needed
             //dispatch(getAllcategory(response.data));
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    fetchbeds();

}, []);

useEffect(() => {
    
    setnewapart({ ...newApart, codeperson: current._id })

}, []);

// -------------------------------------------------------
const [person, setperson] = useState([]);
  useEffect(() => {
    const fetchperson = async () => {
     
        try {
            const response = await getAllperson();
            console.log(response.data);
            setperson(response.data);
            // Uncomment and dispatch your action here if needed
             //dispatch(getAllcategory(response.data));
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    fetchperson();

}, []);

    const send = (event) => {
       console.log("send");
          
                event.preventDefault();
                console.log(event.target[0].value);
        
                // setupApar({ ...upapar, image: r.current.files[0]})
        
                const formData = new FormData();
                formData.append('name', event.target[0].value);
                formData.append('desc', event.target[1].value);
                // formData.append('adress',newApart.codeCity );
                formData.append('beds',event.target[2].value);
                formData.append('price', event.target[3].value);
                formData.append('adds',event.target[4].value);
                formData.append('image', event.target[5].files[0]);
                formData.append('codeCity', event.target[6].value);
                formData.append('codeCategory', event.target[7].value);
                formData.append('codeperson', current._id );
                console.log("from",formData.get('codeCity'))
                // console.log("from",formData)
        
                console.log("from",formData.get('price'))
                    createApart(formData).then(x=>
                   
                    swal("הדירה נוספה בהצלחה"," יש לרענן את הדף בשביל לראות את הדירה שנוספה","success")
                     )
                .catch(
                    x => {
                         swal("שגיאה", "המערכת נתקלה בבעיה", "error")
                        console.log(x);
                    }
                )
                
            }
        
    
    return <>
        
        <ArrowForwardIcon id="back" onClick={() => nav(`/personOptions`)}></ArrowForwardIcon><br></br>

    {/* <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            > */}
<div className="login">
<form form id="uploadForm" enctype="multipart/form-data" onSubmit={(e) => { send(e) }}>

                
                <input placeholder="שם" id="input"></input>
                <br></br>
                <br></br>
                <input placeholder="תאור" id="input"></input>
                <br></br> <br></br>
                <input placeholder="מיטות" id="input"></input>
                <br></br> <br></br>
                <input placeholder="מחיר" id="input"></input>
                <br></br><br></br>
                <input placeholder="הערות" id="input"></input>
                <br></br>
                <br></br>
                <input type="file" id="input"></input>
                <br></br><br></br>
                <select className="select">
                <option disabled selectede="true">שם עיר</option>
                {city&&city.map((item, index) => (
                    <option key={index} value={item._id}>
                        {item.name}
                    </option>
                ))} 
         </select> 
          <br></br>
          <br></br>
         <select className="select">
                <option disabled selectede>  שם קטגוריה:</option>
                {category&&category.map((item, index) => (
                    <option key={index} value={item._id}>
                        {item.name}
                    </option> 

                ))}
              </select>
              <br></br><br></br>
                <button>send</button>
            </form>
        </div>



    </>
}
