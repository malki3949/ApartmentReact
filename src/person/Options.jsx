import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

export const Options=()=>{
    const current=useSelector(x=>x.CurrentUser);

const nav=useNavigate()
    return<>
            <ArrowForwardIcon id="back" onClick={() => nav(`/personOptions`)}></ArrowForwardIcon><br></br>

                   {<button className="ab" onClick={() => nav(`/allperson`)}>  לצפיה בכל המשכירים</button>}{<br></br>} 
                   {<button className="ab" onClick={() => nav(`/allcategory`)}> לצפיה בכל הקטגוריות </button>}{<br></br>} 
                   {<button className="ab" onClick={() => nav(`/allcity`)}>  לצפיה בכל הערים</button>}{<br></br>} 
                   {<button className="ab" onClick={() => nav(`/myApartment/${current._id}`)}>  לצפיה בכל הדירות שלך</button>}{<br></br>} 

    
    </>
}