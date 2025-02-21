import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
// // import {Data} from "./Data"
 import store from "./ApartmentProject/redux/store"
// // import {Cars} from "./Cars"
 import{Nav} from "./ApartmentProject/Nav"
 import { Routing } from "./ApartmentProject/Routing"
 //import { Login } from "./ApartmentProject/Login"
 //import { Allperson } from "./person/Allperson"
//export{store }from"./ApartmentProject/redux/store"

export function Main() {
    return <>
 <Provider store={store}>
            <BrowserRouter>
                {/* <Data></Data> */}
                <Nav></Nav>
                {/* <Login></Login> */}

                <Routing></Routing>


            </BrowserRouter>

    </Provider>  
    </>

}