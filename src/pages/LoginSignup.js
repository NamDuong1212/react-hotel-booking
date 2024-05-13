
import React, { useState } from "react"
import LoginSignupCSS from "../components/LoginSignup/LoginSignup.module.css"

import user_icon from '../components/Assets/person.png'
import email_icon from '../components/Assets/email.png'
import password_icon from '../components/Assets/password.png'


const LoginSignup = () => {

  const [action, setAction] = useState("Login");
          
  return (
    <div className={LoginSignupCSS.container}>
      <div className= {LoginSignupCSS.header}>
        <div className={LoginSignupCSS.text}>{action}</div>
        <div className={LoginSignupCSS.underline}></div>
      </div>
      <div className={LoginSignup.inputs}>
        <div className={LoginSignupCSS.input}>
          <img src={user_icon} alt = "" />
          <input type={LoginSignup.text} placeholder = "Name"/>
        </div>
        <div className={LoginSignupCSS.input}>
          <img src={email_icon} alt = "" />
          <input type={LoginSignup.email} placeholder = "Email Id"/>
        </div>
        <div className={LoginSignupCSS.input}>
          <img src={password_icon} alt = "" />
          <input type={LoginSignupCSS.password} placeholder = "Password"/>
        </div>
      </div>
      <div className={LoginSignupCSS.forgotpassword}>Lost Password? 
        <span className={LoginSignupCSS.forgotpassword_span}>
          Click Here!
        </span>
      </div>
      <div className={LoginSignupCSS.submitcontainer}>
        <div className={`${LoginSignupCSS.submit} ${action === "Login" ? LoginSignupCSS.submit.gray : LoginSignupCSS.submit}`} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={`${LoginSignupCSS.submit} ${action === "Sign Up" ? LoginSignupCSS.submit.gray : LoginSignupCSS.submit}`}onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup