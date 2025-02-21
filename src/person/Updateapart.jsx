import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import { getById } from "../ApartmentProject/api";
import { useNavigate } from "react-router-dom";
import { update } from "../ApartmentProject/api";
import { useSelector } from "react-redux";
import swal from "sweetalert"
import TextField from '@mui/material/TextField';
import { getAllcategory } from "../ApartmentProject/api";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
export const Updateapart=()=>{
    const nav=useNavigate()
    const current=useSelector(x=>x.CurrentUser);
const params=useParams();
console.log(params);
// console.log(_id);
const [apartment, setapartment] = useState({})
const [category, setCategory] = useState()
const [allapartment, setallapartment] = useState({})
const flag=true;
    useEffect(() => {
        getById(params._id)
            .then(x => {
                console.log(x.data);
                // x.data - נתונים
                // מפעילה useDispatch - שמירה בסטור
                // לבדוק מה צד שרת מחזיר
                setallapartment(x.data)
                console.log(allapartment);
                // setArticle(x.data.article)
            })
            .catch(err => {console.log("error");

            })
    }, [])

    console.log(apartment);
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


    // console.log(_id+"😂😂😂😂"+current._id+"🤣🤣🤣🤣"+apartment.codeperson);
    // if(current._id!=undefined&&allapartment.codeperson._id!=undefined&&current._id!=allapartment.codeperson._id){ flag=false;}
    
const updateapart=()=>{
    // console.log(_id+"😂😂😂😂"+current._id+"🤣🤣🤣🤣"+apartment.codeperson._id);
// console.log(apartment);
// console.log(allapartment);
console.log(current._id);
console.log(allapartment.codeperson._id);
// try{

    update(params._id,current._id,apartment).then(x=>{ swal("הדירה עודכנה בהצלחה","בהנאה","success")})

.catch(x=>{

    swal("טעות","הדירה אינה ברשותך אין אפשרות לעדכן","error")
})

}
// catch{

return<>
 {/* {current.password!=apartment.codeperson.password&&<h1>דירה זו אינה שלך אין אפשרות לעדכן</h1>} */}
    
{/* {current.password===apartment.codeperson&& */} 

<ArrowForwardIcon id="back" onClick={() => nav(`/personOptions`)}></ArrowForwardIcon><br></br>

<div className="login">
    {!flag&&<h1>דירה זו אינה שלך אין אפשרות לעדכן!!!</h1>}
    {allapartment&&
     <div>
     <h3> שם דירה: {allapartment.name}</h3>
      {<input placeholder='שינוי' onBlur={(e) => setapartment({ ...apartment, name: e.target.value})}></input>}  
   
     <br></br>
   <h3> תיאור:{allapartment.desc}</h3>
   { <input placeholder='שינוי' onBlur={(e) => setapartment({ ...apartment, desc: e.target.value })}></input> }
   <br></br>
     <select className="select" onBlur={(e) => setapartment({ ...apartment, codeCategory: e.target.value })} >
                <option disabled selectede="true">שם קטגוריה:</option>
                {category&&category.map((item1, index) => (
                    <option key={index} value={item1._id}>
                        {item1.name}
                    </option>
                ))}
              </select>
              <br></br>

     <h3>מחיר:{allapartment.price}</h3>
     <input placeholder='שינוי' onBlur={(e) => setapartment({ ...apartment, price: e.target.value })}></input>

     <br></br>
    <h3>הערות:{allapartment.adds}</h3>
    <input placeholder='שינוי' onBlur={(e) => setapartment({ ...apartment, adds: e.target.value })}></input>
    <br></br>
    <h3>מס מיטות: {allapartment.beds}</h3>
    <input placeholder='שינוי' onBlur={(e) => setapartment({ ...apartment, beds: e.target.value })}></input>
    </div>
            }
    <br></br>
    {/* {car.Available && <button onClick={() => c(upcar)}>עדכון הרכב</button>} */}
    {/* {car.Available&&<Button  className='buto' onClick={()=>c(upcar)} variant="contained" endIcon={<SendIcon />}>
    עדכון הרכב
        </Button>}*/

  <Button onClick={() => updateapart()} variant="contained" endIcon={<SendIcon />}>
         שליחה
     </Button> 

    }
    </div>
  </>
}