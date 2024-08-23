import axios from "axios";
import React , {useState}from "react";
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from "react-router-dom";

const Loginform = () => {
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const[error , setError ]    = useState('');
    const navigate = useNavigate()


    const hadelSubmit = async (e) => {
        e.preventDefault();
        console.log('Username:', email);
        console.log('Password:', password);
        setError('');

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login/", {
              email,
              password,
            });

          
          
             // Handle the response, e.g., store the token
            const accessToken = response.data.access;
            localStorage.setItem('access_token', accessToken);

          //   // Decode the JWT to get user details
            const decodedToken = jwtDecode(response.data.access);

           console.log('User det+++++++++++++++++++++++++++++++++++++++++++++ails:', decodedToken);
           console.log('accessToken', accessToken);
           navigate('/dashboard')
          
          } catch (err) {
            console.log("EROR is work ")
        
            setError("Invalid Username and Password");
          }
    };


   return(
    <>


    <h1>Login Form</h1>
    <form onSubmit={hadelSubmit}>
      <div>
      
      </div>
        

        <div>
            <label htmlFor="email">UserName : </label>
            <input type="email" name="email" value={email}  onChange={(e)=> setEmail(e.target.value)} required >

            </input>
        </div>
        <br></br>


        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br></br>
        <button type="submit">Login</button>


    </form>
    </>
   )

}


export default Loginform;