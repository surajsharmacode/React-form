import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {

    // const [userInput ,setUserInput]=useState(name=" ", email=" ",password=" ",confirmPass=" ");
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confpswd, setConfpswd]=useState('');
    const [errors,setErrors]=useState('false');
    const [submittedsuccesfully,setSubmittedSuccessfully]=useState(false);
    // const [success,setSuccess]=useState(false);

    const handleFormSubmit=(e)=>{
      e.preventDefault();
      //setSubmittedSuccessfully(true);
      // console.log(name,email,password,confpswd)
      const newError={};

      if(name.trim() === ''){
        newError.name="name cannot be empty!"
      }
      if(email.trim() === ''){
        newError.email="email cannot be empty!"
      }
      if(password.trim() === ''){
        newError.password='Password cannot be empty!';

      }
      if(confpswd!=password){
        newError.confpswd="password did not match!"
      }
      if(Object.keys(newError).length === 0){
        setSubmittedSuccessfully("successfully submitted")
      }
      else{
        setSubmittedSuccessfully('')
      }
      setErrors(newError);
      
    }

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="input-group" id="form">
        <input type="text" name="" className="input-field" placeholder="full Name" value={name} onChange={(e)=>setName(e.target.value)}  />
        {/* {errors.name && <span>{errors.name}</span>} */}

        <input type="email" name="" className="input-field" placeholder="Email address"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        {/* {errors.email && <span>{errors.email}</span>} */}

        <input type="password" name="" id="pswd" className="input-field" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        {/* {errors.password && <span>{errors.password}</span>} */}

        <input type="text" name="" id="conf-pswd" className="input-field" placeholder="Confirm Password" value={confpswd} onChange={(e)=>setConfpswd(e.target.value)} />
        {/* {errors.confpswd && <span>{errors.confpswd}</span>} */}

     <div className="show-error">
     {errors.name && <p>{errors.name}</p>}
      {errors.email && <p>{errors.email}</p>}
      {errors.password && <p>{errors.password}</p>}
      {errors.confpswd && <p>{errors.confpswd}</p>}
     </div>
   

        <button id="btn" type="submit">Create Account</button>
        <div className="show-success-msg">
       {submittedsuccesfully&& <p>{submittedsuccesfully}</p>}
     </div>
      </form>
    

    </div>
  );
};

export default Signup;
