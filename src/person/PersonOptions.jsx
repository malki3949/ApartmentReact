import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllcategory } from "../ApartmentProject/api";
import { getAll } from "../ApartmentProject/api";
import { getAllcity } from "../ApartmentProject/api";
import { getAllmain } from "../ApartmentProject/api";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

import '../style.css'
import { useSelector } from 'react-redux';
import {removeapart} from "../ApartmentProject/api";
import { getimages } from '../ApartmentProject/api';
import swal from 'sweetalert';
export const PersonOptions = () => 
    {         const nav=useNavigate();
        const [prefer, setPrefer] = useState({})
        const [apartment, setApartment] = useState([]);
        const [category, setCategory] = useState([]);
        const [filterA,setfilterarr]=useState([]);
        const current=useSelector(x=>x.CurrentUser);
        // console.log(current);
        // const [image, setimage] = useState()

        // useEffect(() => {
        //     getimages()
        //         .then(x => {
        //             console.log(x.data);
        //             // x.data - נתונים
        //             // מפעילה useDispatch - שמירה בסטור
        //             // לבדוק מה צד שרת מחזיר
        //             setimage(x.data)
        //             // setArticle(x.data.article)
        //         })
        //         .catch(err => {
    
        //         })
        // }, [])
       useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getAllcategory();
                console.log(response.data);
                setCategory(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();

    }, []);
    const filterApartment = (apartment) => {
        return apartment?.filter(apart => {
        //    var carModel = models.find(m => m.Code == car.CodeModelCar);

          if (
            (!prefer.codeCity || apart.codeCity._id === prefer.codeCity) &&
            (!prefer.codeCategory || apart.codeCategory._id === prefer.codeCategory) &&
            (!prefer.codeperson || apart.codeperson._id === prefer.codeperson) 
            // (!prefer.company || carModel.Company === prefer.company)
          ) {
            return true;
          }
          else {
            return false;
          }
        })
      }
 
    useEffect(() => {
      const fetchbeds = async () => {
          try {
              const response = await getAll();
              console.log(response.data);
              setApartment(response.data);
              setfilterarr(response.data)
              // Uncomment and dispatch your action here if needed
               //dispatch(getAllcategory(response.data));
          } catch (error) {
              console.error("Error fetching categories:", error);
          }
      };

      fetchbeds();

  }, []);


  
//   console.log(filter);
//   console.log(apartment);

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

const deletes=(item)=>{
   // console.log(current._id+"kjh"+item.codeperson._id);

 
        removeapart(item._id,current._id).then(x=>
            swal("הדירה נמחקה בהצלחה","יש לרענן בשביל לראות את המחיקה","success"))
        .catch(x=>
        swal("הדירה אינה ברשותך אין אפשרות למחוק","❌❌❌❌❌❌❌","error"))}

 

         const baseUrl = `http://localhost:3001`

    return (
        <>
                <ArrowForwardIcon id="back" onClick={() => nav(`/personOptions`)}></ArrowForwardIcon><br></br>

           {current.password && <button className="ab" onClick={()=>nav("/addapartment")}>הוספת דירה</button>}{<br></br>}
           {current.password && <button className="ab" onClick={() => nav(`/addCategory`)}>הוספת קטגוריה</button>}{<br></br>} 
           {current.password && <button className="ab" onClick={() => nav(`/addCity`)}>הוספת עיר</button>}{<br></br>} 

          <select className="select" onChange={(e) => setPrefer({ ...prefer, codeCategory: e.target.value })}>
            
            <option disabled selected="true">סנן לפי שם קטגוריה</option>
                {category&&category.map((item, index) => (
                    <option key={index} value={item._id}>
                        {item.name}
                    </option>
                ))}
            </select>
            
            
             <select className="select" onChange={(e) => setPrefer({ ...prefer, codeCity: e.target.value })}>

                <option disabled selected="true">סנן לפי  עיר</option>
                {city&&city.map((item, index) => (
                    <option key={index} value={item._id}>
                        {item.name}
                    </option>

                ))}
            </select>
            <button id="cancel" onClick={() => setPrefer({})}>בטל סינונים</button><br></br><br></br>

            <div id="allapart">
            {apartment&&filterApartment(apartment).map((item, index) =>
             
            <div key={index}>
            
                <div className="login">
                 {/* <img src="{item.image}" height={100} width={100}></img> */}
                 <img src={`${baseUrl}/${item.image.substring(8)}`} height={180} width={350}></img>
               
                {item.codeCategory&&<h2> קטגוריה: {item.codeCategory.name}</h2> } 
                {item.codeperson&&<h2> מייל משכיר: {item.codeperson.email}</h2> }
                 {item.codeperson&&<h2> טלפון משכיר: {item.codeperson.fhone}</h2>}    
                <h2> תוספות: {item.adds}</h2>
                   {item.codeCity&&<h2>עיר:{item.codeCity.name}</h2>}
                <h2> מחיר: {item.price}</h2>
                <h2> מיטות: {item.beds}</h2>
                {current.password && <button className="ab" onClick={() => deletes(item)}> מחיקת דירה</button>}{<br></br>}
               {current.password && <button className="ab" onClick={() =>nav(`/updateApart/${item._id}`)}> עדכון דירה</button>}{<br></br>} 

                   
            </div>
            </div> 
            )} </div>
             
           
        </>
    )
};
