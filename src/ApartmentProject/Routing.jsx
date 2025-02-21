import { Route, Routes } from "react-router-dom";
import{Allapartment}from"../person/Allapartment"
import{Allcategory}from "../person/Allcategory"
import{Allperson} from"../person/Allperson"
import{Login} from"../person/Login"
import { Register } from "../person/Register";
 import{PersonOptions} from "../person/PersonOptions"
 import{AddApartment} from "../person/AddApartment"
import { Updateapart } from "../person/Updateapart";
import { AddCategory } from "../person/AddCategory";
import { AddCity } from "../person/AddCity";
import { AllCity } from "../person/AllCity";
import { Options } from "../person/Options";
import { AllMyapartment } from "../person/AllMyapartment";

export const Routing = () => {
    return <>
        <Routes>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="allperson" element={<Allperson></Allperson>}></Route>
            <Route path="register" element={<Register></Register>}></Route>
            <Route path="personOptions" element={<PersonOptions></PersonOptions>}></Route>
            <Route path="allcategory" element={<Allcategory></Allcategory>}></Route>
            <Route path="allapartment" element={<Allapartment></Allapartment>}></Route>
            <Route path="addapartment" element={<AddApartment></AddApartment>}></Route>
            <Route path="updateApart/:_id" element={<Updateapart></Updateapart>}></Route>
            <Route path="addCategory" element={<AddCategory></AddCategory>}></Route>
            <Route path="addCity" element={<AddCity></AddCity>}></Route>
            <Route path="allCity" element={<AllCity></AllCity>}></Route>
            <Route path="options" element={<Options></Options>}></Route>
            <Route path="myApartment/:id" element={<AllMyapartment></AllMyapartment>}></Route>

                </Routes>
          </>}




