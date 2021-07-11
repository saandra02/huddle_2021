import { useState } from "react";
import axios from 'axios';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        const authObject = {'Project-ID': "a6d8680f-e736-48dd-8d7f-ab79b785f47a", 'User-Name': username, 'User-Secret': password}

        try{
            axios.get('https://api.chatengine.io/chats',
            {
                headers: authObject
            });

            sessionStorage.setItem('username', username);
            sessionStorage.setItem('password', password);
            window.location.href='/chats';

        } catch(error){

            alert("Invalid Credentials! Try again or continue as guest.");

        }

    }

    const handleGuest = (e) =>{
        e.preventDefault();
        window.location.href = '/video';
    }

    const handleSignUp = (e) =>{
        e.preventDefault();
        window.location.href = '/signup';
    }

    return (
        <div className="wrapper">
            <button className="log-out-button" onClick={handleSignUp}>
                Sign Up
            </button>
            <div className="form">
                <h1 className="title"> Login</h1>
                <form onSubmit={handleSubmit} > 
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span> Login</span>
                        </button>

                    </div>
                </form>
                <div align="center">
                <button className="button" onClick={handleGuest}>
                    <span> Continue As Guest</span>
                </button>
            </div>
            </div>

        </div>
    )

}

export default LoginForm;