import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">НАЈАВИ СЕ</span>
      <form className="loginForm">
        <label>Е- маил</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Лозинка</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Најави се</button>
      </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Регистрирај се</Link>
          </button>
    </div>
  );
}