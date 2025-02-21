import axios from "axios"
const baseUrl = `http://localhost:3001`


export const login = (person) => {
    return axios.post(`${baseUrl}/person/login`,person)
}
export const getAllperson = () => {
    return axios.get(`${baseUrl}/person`)
   
}
export const register = (person) => {
    return axios.post(`${baseUrl}/person`,person)
   
}
// דירות---------------------------------
export const getAll = () => {
    return axios.get(`${baseUrl}/apartment`)
   
}
export const getAllmain = (personcode) => {
    return axios.get(`${baseUrl}/apartment/getAllmain/${personcode}`)
   
}
export const getById = (id) => {
    return axios.get(`${baseUrl}/apartment/getByid/${id}`)
   
}
export const getByCatgeory = (Catgeory) => {
    return axios.get(`${baseUrl}/apartment/getByCatgeory`,Catgeory)
   
}
export const getByCity = (City) => {
    return axios.get(`${baseUrl}/apartment/getByCity`,City)
   
}
export const getBybeds = (beds) => {
    return axios.get(`${baseUrl}/apartment/getBybeds`,beds)
   
}
export const getMoreBe = (beds) => {
    return axios.get(`${baseUrl}/apartment/getMoreBe`,beds)
   
}
export const geLessBe = (beds) => {
    return axios.get(`${baseUrl}/apartment/geLessBe`,beds)
   
}
export const geLessPrice = (price) => {
    return axios.get(`${baseUrl}/apartment/geLessPrice`,price)
   
}
export const gePrice = (price) => {
    return axios.get(`${baseUrl}/apartment/gePrice`,price)
   
}
export const geMorePrice = (price) => {
    return axios.get(`${baseUrl}/apartment/geMorePrice`,price)
   
}
export const getByCodePerson = (codeperson) => {
    return axios.get(`${baseUrl}/apartment/getByCodePerson`,codeperson)
   
}
export const create = (apartment) => {
    return axios.post(`${baseUrl}/apartment`,apartment)
   
}
export const removeapart = (id,codeperson) => {
     const header={Authorization:`Bearer${localStorage.getItem("token")}`}
    return axios.delete(`${baseUrl}/apartment/${id}/${codeperson}`,{headers:header})
    // {Headers:headers}
}
export const update = (id,codeperson,apartment) => {
    const headers={Authorization:`Bearer${localStorage.getItem("token")}`}

    return axios.patch(`${baseUrl}/apartment/${id}/${codeperson}`,apartment,{headers})
}
export const getAllcategory = () => {
    return axios.get(`${baseUrl}/category`)
   
}
export const getAllcity = () => {
    return axios.get(`${baseUrl}/city`)
   
}
export const createApart = (ap) => {
    const headers={Authorization:`Bearer ${localStorage.getItem("token")}`,
    'Content-Type': 'multipart/form-data'
}
// const headers={
//    'Content-Type': 'multipart/form-data'}
   
    return axios.post(`${baseUrl}/apartment`,ap,{headers})
   
}
// export const create = (ap) => {
//     const h={
//         Authorization:`Bearer ${localStorage.getItem('token')}`
//     }  
//       return axios.post(`${baseUrl}/Apartment`,ap,{headers:h})
   
// }

export const createCate = (cate) => {
     const headers={Authorization:`Bearer ${localStorage.getItem("token")}`}
      console.log(headers);
    return axios.post(`${baseUrl}/category`,cate,{headers})

   
}
export const createCity = (city) => {
    const headers={Authorization:`Bearer ${localStorage.getItem("token")}`}
     console.log(headers);
    return axios.post(`${baseUrl}/city`,city,{headers})
   
}
// export const getimages = () => {
//     return axios.get(`${baseUrl}/apartment/get-images`)
   
// }



