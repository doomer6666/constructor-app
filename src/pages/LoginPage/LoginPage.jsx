import { Link } from "react-router-dom";
import { useState } from "react";
import decor from "../../assets/img/decor-index.png";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отправка данных:", { login, password });
  };

  return (
    <main>
      <section className="sect-info">
        <div className="company-name">
          <p>Uralintern</p>
        </div>
        <div className="info">
          <p>Сайт с шаблонами для создания плана стажировок</p>
          <img src={decor} alt="Декор" width="365" height="218" />
        </div>
      </section>

      <section className="reg">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Логин"
            className="field"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            className="field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Вход" className="field submit" />
          <Link to="/register" className="field submit button">
            Зарегистрироваться
          </Link>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
