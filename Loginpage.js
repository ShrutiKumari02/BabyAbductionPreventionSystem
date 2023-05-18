import app from '../firebase.config';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { useState } from 'react';
import '../styling/loginpage.css';
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {

  const auth=getAuth(app);
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate = useNavigate();

  const signUp=()=>{
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Successfully created an account");
      })
      .catch((error) => {
        const errorCode = error.code;;
        alert(errorCode);
  
      });
   }

   const signIn=()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // alert("This user has successfully signed in");
      navigate('/home');
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode)
    });
  }
    return(
        <>
          <div className='loginpg'>
            <div className="main">
                <h1>Login Page</h1>
                <input type={"email"} 
                      placeholder="Email" 
                      className='input-field' 
                      onChange={(e)=>setEmail(e.target.value)} />
                <input type={"password"} 
                      placeholder="Password" 
                      className='input-field' 
                      onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={signIn} 
                        className='login-btn'>Sign In
                </button>
                <button onClick={signUp} 
                        className='register-btn '>Create Account
                </button>
            </div>
          </div>
        </>
    );
};
export default Loginpage;