import React, {useState}from 'react';
import '../src/register.css'


function CreateUsers(){

    const [name, setName] = useState("");
    const [pw, setPw] = useState("");
    const [cpw, setCpw] = useState("");

function makeUser()
{
    let data={name, pw, cpw}
    console.warn("input values", data);
}
    return(
        <>
        

        <div class="container">
        <h1>Register as a New User</h1>
        
        <hr/>
        <label for="fn"><b>First Name</b></label>
        <input type="text" id ="fn" name = "username" onChange={(e)=>setName(e.target.value)} value ={name} placeholder="First Name" required />
        <label for="pw"><b>Password</b></label>
        <input type="password" id ="pw" name = "pw" onChange={(e)=>setPw(e.target.value)} value ={pw} placeholder="Password" required />
        <label for="cpw"><b>Confirm Password</b></label>
        <input type="password" id ="cpw" name="cpw" placeholder="Confirm Password" required />
        <hr/>
        <button onClick={(e)=>makeUser()} className= "eregisterbtn" type="submit">Register</button>

        
       
        
        </div>
        </>
    )
}

export default CreateUsers;