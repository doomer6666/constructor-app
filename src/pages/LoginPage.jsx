import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login-register.scss";
import { login } from "../api/authApi";

const LoginPage = () => {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ username: username, password: password });
      console.log(data);
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      navigate("/redactor");
    } catch (err) {
      console.error("Ошибка входа:", err);
      setError("Неверные логин/пароль");
    }
  };

  return (
    <div className="login-page">
      {error && <p className="error">Ошибка: {error}</p>}

      <div className="sec-info">
        <div className="company-name">
          <p>Точка сбора</p>
        </div>
        <div className="info">
          <p>
            Сайт для
            <br /> создания страниц
          </p>
          <img src="/decor-index.png" alt="Декор" width="365" height="218" />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="field"
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="field"
        />
        <input type="submit" value="Войти" className="field submit" />
        <Link to="/register" className="button-reg">
          Зарегистрироваться
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
