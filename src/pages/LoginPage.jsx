import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../slices/AuthSlice";
import "../styles/login-register.scss";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginMutation, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await loginMutation({ login, password }).unwrap();
      console.log("Успешный вход:", result);
      dispatch(setCredentials(result));
      navigate("/register");
    } catch (err) {
      console.error("Ошибка входа:", err);
    }
  };

  return (
    <div className="login-page">
      {error && <p className="error">Ошибка: {error.message}</p>}

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
          value={login}
          onChange={(e) => setLogin(e.target.value)}
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
          disabled={isLoading}
        />
        <Link to="/register" className="button">
          Зарегистрироваться
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
