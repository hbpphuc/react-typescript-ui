import './register.css'
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm">
            <label htmlFor="">Username</label>
            <input type="text" className="registerInput" placeholder='Enter your username...'/>
            <label htmlFor="">Email</label>
            <input type="text" className="registerInput" placeholder='Enter your email...'/>
            <label htmlFor="">Password</label>
            <input type="password" className="registerInput" placeholder='Enter your password...'/>
            <label htmlFor="">Confirm Password</label>
            <input type="password" className="registerInput" placeholder='Confirm your password...'/>
            <button className='registerButton'>Register</button>
            <button className='registerLoginButton'>
              <Link className='reactLink' to="/login">LOGIN</Link>
            </button>
        </form>
    </div>
  )
}
