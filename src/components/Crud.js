import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import"./Crud.css"
import { FaEye } from "react-icons/fa";
import { toast } from 'react-toastify';


function Crud()
{
    const navigate = useNavigate()
 
    const[userdata,setuserdata]=useState({
        name:"",
        email:"",
    })
   
    const [ref,setref] = useState("")
    const [datas, setdatas] = useState("")

    const[edits,setedits] = useState("")
    const[ids, setids]  = useState("")

const getdata =()=>{
axios.get("https://66c461eeb026f3cc6cef1b3f.mockapi.io/demo").then((res)=>{
    console.log(res.data);
    setdatas(res.data)
    
   })

}

useEffect(()=>{
    getdata()
},[ref])

const handle =(e)=>{
    e.preventDefault()
    // console.log("hai");
    console.log(userdata);

   axios.post("https://66c461eeb026f3cc6cef1b3f.mockapi.io/demo",userdata).then((res)=>{

    setref(!ref)
    setuserdata((userdata)=>({...userdata, name:"" ,email:""}))
    toast.success("Submitted successfully")

   })
    
}

const deletedata=(v)=>{
axios.delete(`https://66c461eeb026f3cc6cef1b3f.mockapi.io/demo/${v.id}`).then((res)=>{
setref(!ref) 
toast.error("deleted succesfully")   
})
}




const [updatedatas,setupdatedatas]= useState({
    id:"",
    check:false
})

const updatedata=(v)=>{
    console.log(v.name,v.email,"hello");

setupdatedatas((updatedatas)=>({...updatedatas, id:v.id, check:true}))


setedits((edits)=>({...edits, name:v.name, email:v.email}))


console.log(edits);
setids(v.id);

}




  return (
   
    <div>
        {updatedatas.check}
        <form className='first'>
        <h1>Employee Details</h1>
        <label>EmpName</label> 
        <input type="text" value={userdata.name} onChange={(e)=>{setuserdata((userdata)=>({...userdata, name:e.target.value}))}} /><br/> <br/>
         <label>EmpEmail</label>
         <input type="email" value={userdata.email} onChange={(e)=>{setuserdata((userdata)=>({...userdata, email:e.target.value}))}}/><br/> <br/>
        <button onClick={handle} className='add'>Add</button>
        </form>
<br/> <br/>
        <div className='box'>
            <table>
                <thead>
                    <tr>
                    <td>s.no</td>
            <td>Name</td>
            <td>Email</td>
         
            <td>Action</td>
            <td> Remove</td>
            <td>Status</td>
                    </tr>


{datas&&datas.map((v,index)=>{
    console.log(v);


    return(
        <tr key={index}>
<td>{index+1}</td>
<td>{v.name}</td>
<td>{v.email}</td>
<td><button onClick={()=>updatedata((v))} className='update'>Update</button></td>
<td><button onClick={()=>deletedata((v))} className='delete'>Delete</button></td>
<td>
 <button id="eye" style={{
                        border: "none",
                        backgroundColor: "red",
                        padding: "5px",
                        color: "white",
                        borderRadius: "5px",
                      }}
                      onClick={()=>{navigate(`/Status/${v.id}`);}}
                    >
                      <FaEye />
                    </button>
                  </td>


        </tr>
    )
    
})}





                </thead>
            </table>



        </div>
<br/>
<br/>
        <div className='forms'>
              <h1>Update Form</h1>
              <label>Empname</label>
            <input type="text" value={edits.name} onChange={(e)=>{
                setedits((edits)=>({...edits, name:e.target.value}))
            }}/> <br/>
            <label>EmpEmail</label>
            <input type="email" value={edits.email} onChange={(e)=>{
                setedits((edits)=>({...edits,email:e.target.value}))
            }} /> <br/> <br/>
            <button onClick={()=>{
               setupdatedatas((updatedata)=>({...updatedatas, id:null, check:false}))
               axios.put(`https://66c461eeb026f3cc6cef1b3f.mockapi.io/demo/${ids}`,edits).then((res)=>{
                setref(!ref)
         
                setedits((edits)=>({...edits,name:"",email:""}))
                console.log(edits);  
                toast.success("update success")
            }) 
            }} className='updates'>Update</button>
        </div>
    </div>
  
  )
}

export default Crud