import { useEffect, useState } from "react";
import { getAllcity } from "../ApartmentProject/api";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useNavigate } from "react-router-dom";
import '../style.css'

export const AllCity = () => {
const nav=useEffect()
    const [city, setcity] = useState()

    useEffect(() => {
        getAllcity()
            .then(x => {
                console.log(x.data);
                // x.data - נתונים
                // מפעילה useDispatch - שמירה בסטור
                // לבדוק מה צד שרת מחזיר
                setcity(x.data)
                // setArticle(x.data.article)
            })
            .catch(err => {

            })
    }, [])

    return <>
                <ArrowForwardIcon id="back" onClick={() => nav(`/personOptions`)}></ArrowForwardIcon><br></br>
<h1>!!!הערים</h1>
        {city&&city.map((item, index) =>
            <div key={index}>
                <div className="login" >
                <h2>{item.name}</h2>
                {/* <h2> טלפון: {item._id}</h2> */}
                
            </div>
            </div> )}
    </>
}