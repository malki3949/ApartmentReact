import { useEffect, useState } from "react";
import { getAllcategory } from "../ApartmentProject/api";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useNavigate } from "react-router-dom";
import '../style.css'

export const Allcategory = () => {
const nav=useNavigate()
    const [person, setperson] = useState()

    useEffect(() => {
        getAllcategory()
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

        <h1>!!!הקטגוריות</h1>
        {person&&person.map((item, index) =>
            <div key={index}>
                <div className="login" >
                <h2> שם: {item.name}</h2>
                {/* {item.apartments&&item.apartments.map((item1, index) =>
                <div key={index}>
                <div >
                <h2> שם: {item1}</h2>
                </div>
                </div> )}
                 */}
                
                





            </div>
            </div> )}
    </>
}