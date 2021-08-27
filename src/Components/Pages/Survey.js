import React,{useState} from 'react';
import { Button } from '../Button';
import {db} from '../../firebase/config'
import './Survey.css'


  


const Survey =()=> {
  
    const [name,setname]=useState('');
    const [Lname,setLname]=useState('');
    const [pnum,setpnum]=useState('');
    const [email,setemail]=useState('');
    const handlename=(event)=>{
        setname(event.target.value);

    }
    const handlelname=(event)=>{
        setLname(event.target.value);    
        
    }
    const handlepnum=(event)=>{
        setpnum(event.target.value);

        
    }
    const handleemail=(event)=>{
        setemail(event.target.value);

        
    }
    const handlesubmit=(event)=>{
        event.preventDefault();
        additem(name,Lname,pnum,email);

    }
    const additem=(name,Lname,pnum,email)=>{
        db.collection("FormProfile").add({
            Name:{name},
            Last_Name:{Lname},
            Phone_Number:{pnum},
            Email:{email}
            
        });
   
}


return(
    <div >
       
       
        
        {/* <h1 className='survey'>Complete Name</h1> */}
        <main>
        <form onSubmit={handlesubmit} >
            {/* <label>Name</label> */}
            <div class='container'>
            
            <div class='form1'>
            <div class='input_fields'>
          
            <input 
            class='input'
            // className='fields1'
            type='text' 
            id="name"
            value={name}
            onChange={handlename}
            placeholder='Type First Name here...'></input>
            {/* <label>Last Name</label> */}
            <input 
            class='input'
            // className='fields1'
            type='text'
            id="lname" 
            value={Lname}
            onChange={handlelname}
            placeholder='Type LastName here...'></input>

            {/* <label>Phone Number</label> */}
            <input 
            class='input'
            // className='fields1'
            type='text' 
            id="pnum"
            value={pnum}
            onChange={handlepnum}
            placeholder='Type Phone Number here...'></input>

            {/* <label>Email</label> */}
            <input 
            class='input'
            // className='fields1'
            type='text' 
            id="email"
            value={email}
            onChange={handleemail}
            placeholder='Type email here...'></input>
            
           
            </div>

            <div class='fields1'>

            <textarea  placeholder='message'>
                
            </textarea>
            <Button type='submit' onClick={handlesubmit}>Submit to Database</Button>
            </div>
            </div>
            </div>
           
            
            

           

            
        </form>
        </main>
        </div>
        
        
        

    
)
}

export default Survey;

