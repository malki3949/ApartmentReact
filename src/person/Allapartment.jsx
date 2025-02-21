import { useEffect, useState } from "react";
import { getAll } from "../ApartmentProject/api";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

import '../style.css'

export const Allapartment = () => {

    const [apartment, setapartment] = useState()

    useEffect(() => {
        getAll()
            .then(x => {
                console.log(x.data);
                // x.data - נתונים
                // מפעילה useDispatch - שמירה בסטור
                // לבדוק מה צד שרת מחזיר
                setapartment(x.data)
                // setArticle(x.data.article)
            })
            .catch(err => {

            })
    }, [])

    return <>

        <h1>משלנו!!!</h1>
        
    </>
}