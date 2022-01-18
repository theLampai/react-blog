import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
    return (
        <div className="register">
      <span className="registerTitle">РЕГИСТРАЦИЈА</span>
      <form className="registerForm">
        <label>Корисничко име</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Е- маил</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Лозинка</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton">Регистрирај се</button>
      </form>
        <button className="registerLoginButton"><Link className="link" to="/login">Најави се</Link></button>
    </div>
    )
}