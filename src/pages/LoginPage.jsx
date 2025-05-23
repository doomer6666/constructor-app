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
      navigate("/sample");
    } catch (err) {
      console.error("Ошибка входа:", err);
      setError("Неверные логин/пароль");
    }
  };

  return (
    <div className="login-page">
      {error && <p className="error">Ошибка: {error}</p>}

      {/* <div className="sectInfo">
        <div className="companyName">
          <p>Uralintern</p>
        </div>
        <div className="info">
          <p>Сайт с шаблонами для создания плана стажировок</p>
          <img src="/decor-index.png" alt="Декор" width="365" height="218" />
        </div>
      </div> */}

      <form onSubmit={handleSubmit}>
        <p>Вход</p>
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
        <input
          type="submit"
          value="Войти"
          className="field submit"
          // disabled={isLoading}
        />
        <Link to="/register" className="button">
          Зарегистрироваться
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
