import { useEffect, useState } from "react";
import { getAllperson } from "../ApartmentProject/api";
import '../style.css'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useNavigate } from "react-router-dom";
export const Allperson = () => {
const nav=useNavigate()
    const [person, setperson] = useState()

    useEffect(() => {
        getAllperson()
            .then(x => {
                console.log(x.data);
                // x.data - נתונים
                // מפעילה useDispatch - שמירה בסטור
                // לבדוק מה צד שרת מחזיר
                setperson(x.data)
                // setArticle(x.data.article)
            })
            .catch(err => {

            })
    }, [])

    return <>
            <ArrowForwardIcon id="back" onClick={() => nav(`/personOptions`)}></ArrowForwardIcon><br></br>

        <h1 id="register">המשכירים הכי הכי!!!</h1>
        {person&&person.map((item, index) =>
            <div key={index}>

                <div className="login" >
                <h2> מייל: {item.email}</h2>
                <h2> טלפון: {item.fhone}</h2>
                <h2>  טלפון נוסף: {item.anotherFhone}</h2>
                <h2> סיסמה: {item.password}</h2>
               
            </div>
            </div> )}
    </>
}