import React, { useState ,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const Status = () => {

    const navigate = useNavigate()
    const {id} = useParams()

    const [status ,setstaus]= useState({
        name:"",
        email:""
    })



         useEffect(() => {
          axios.get(`https://66c461eeb026f3cc6cef1b3f.mockapi.io/demo/${id}`).then((res)=>{
            console.log(res.data); 
           setstaus((status)=>({...status, name:res.data.name}))
           setstaus((status)=>({...status, email:res.data.email}))
   console.log(setstaus);
   
            
           })
   
            })
     
  return (

    <>
    <div>Status

     <h1>{status.name}</h1>
     <h1>{status.email}</h1>
   
    </div>

    <div><button onClick={()=>navigate("/")}>Back to Home</button></div>

    </>
  )
}
