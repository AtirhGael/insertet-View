import React,{useEffect, useState} from 'react'
import axios from 'axios'

function Results() {
const [data,setdata] = useState([])
 
async function fetchdata(){
  const UserData = await axios.get('http://localhost:5000')
 
  setdata(UserData.data)
}

 useEffect(()=>{
  fetchdata()
 },[])

  return (
    <div>
      <h3> Number of items in the DataBase = { data.length}</h3>
       <table>
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      {data.map((items,id)=>(
      <tr key={id}>
        <td data-column="First Name">{items.id}</td>
        <td data-column="Last Name">{items.name}</td>
        <td data-column="Job Title">{items.email}</td>
        <td data-column="Twitter">{items.phone}</td>
      </tr>
      ))}
      
    </tbody>
  </table></div>
  )
}

export default Results