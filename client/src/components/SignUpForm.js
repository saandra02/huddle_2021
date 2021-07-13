import { useState } from "react";
import axios from 'axios';


const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordcopy, setPasswordCopy] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(password !== passwordcopy){
            alert("Passwords do not match. Please try again")
        }

        else {
            const headers = {'PRIVATE-KEY': "4d50407a-ec94-4187-a7bb-bbcc1406be30"}
            const data = {
                first_name: firstname,
                last_name: lastname,
                username: username,
                secret: password
            }
            axios.post('https://api.chatengine.io/users/', data,
            {
                headers: headers
            }).then((response) => {
                window.location.href = '/';
              }, (error) => {
                alert("Username already taken");
              });
        }
    }

    function handleLogin(){
        window.location.href = "/#/";
    }

    return (
        <div className="wrapper">
            <button className="log-out-button" onClick={handleLogin}>
                Log In
            </button>
            <div className="form">
                <h1 className="title"> Sign Up</h1>
                <form onSubmit={handleSubmit} > 
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="signup-input" placeholder="Username" required/>
                    <input type="text" value={firstname} onChange={(e)=>setFirstName(e.target.value)} className="signup-input" placeholder="First Name" required/>
                    <input type="text" value={lastname} onChange={(e)=>setLastName(e.target.value)} className="signup-input" placeholder="Last Name" required/>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="signup-input" placeholder="Password" required/>
                    <input type="password" value={passwordcopy} onChange={(e)=>setPasswordCopy(e.target.value)} className="signup-input" placeholder="Confirm Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span> Sign Up</span>
                        </button>

                    </div>
                </form>
            </div>

        </div>
    )

}

export default SignUpForm;