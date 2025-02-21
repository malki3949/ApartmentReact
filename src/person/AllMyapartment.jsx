
 import { getAllmain } from "../ApartmentProject/api";
 import { useEffect } from "react";
 import { useState } from "react";
 import { useParams } from "react-router-dom";
 import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useNavigate } from "react-router-dom";
export const AllMyapartment=()=>{ 

const nav=useNavigate()
    const params=useParams();
    console.log(params);

    const [my, setmy] = useState()

    useEffect(() => {
        getAllmain(params.id)
            .then(x => {
                console.log(x.data);
                // x.data - נתונים
                // מפעילה useDispatch - שמירה בסטור
                // לבדוק מה צד שרת מחזיר
                setmy(x.data)
                // setArticle(x.data.article)
            })
            .catch(err => {

            })
    }, [])
    const baseUrl = `http://localhost:3001`

return<>
        <ArrowForwardIcon id="back" onClick={() => nav(`/personOptions`)}></ArrowForwardIcon><br></br>

<h1 id="register">כל הדירות שלך</h1>

{my&&my.map((item, index) =>
            <div key={index}>
                <div className="login">
                 
                 <img src={`${baseUrl}/${item.image.substring(8)}`} height={180} width={350}></img>
                {item.codeCategory&&<h2> קטגוריה: {item.codeCategory.name}</h2> } 
                {/* {item.codeperson&&<h2> מייל משכיר: {item.codeperson.email}</h2> } */}
                 {/* {item.codeperson&&<h2> טלפון משכיר: {item.codeperson.fhone}</h2>}     */}
                <h2> הערות: {item.adds}</h2>
                   {item.codeCity&&<h2>עיר:{item.codeCity.name}</h2>}
                <h2> מחיר: {item.price}</h2>
                <h2> מיטות: {item.beds}</h2>
                </div>
                </div> )} 

</>


}