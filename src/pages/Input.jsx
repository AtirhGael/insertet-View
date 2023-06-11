import React,{useState} from 'react'
import './styles.css'
import axios from 'axios'



function Input() {
  const [name,setname] = useState('')
  const [email,setemail] = useState('')
  const [phone, setphone] = useState('')
 
  const onsubmitform = async() =>{
   
    await axios.post('http://localhost:5000',{
      name,email,phone
  }) 
     .then((res)=>{
      // console.log(res.data);
     })
  }
  return (
    <div>
        <h3>This Is View Part For The MVC Architecture</h3>
         <form  onSubmit={onsubmitform} >
                <label for="fname">Name</label>
                <input type="text" id="fname" 
                 placeholder="Your name.."
                 value={name}
                 onChange={(e)=>setname(e.target.value)}
                 />

                <label for="lname">Email</label>
                <input type="text" id="lname" 
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                placeholder="Your Email.."/>

                <label for="country">Phone</label>
                <input type="text" id="lname" 
                value={phone}
                onChange={(e)=>setphone(e.target.value)}
                placeholder="Your Phone Number.."/>

             
            
                <input type="submit" value="Submit"/>
  </form>
    </div>
  )
}

export default Input