import { useState } from "react";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    login: "",
    password: "",
    repeatPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeatPassword) {
      alert("Пароли не совпадают");
      return;
    }
    navigate("/redactor");
  };
  return (
    <main>
      <section className="sec-form">
        <form method="post" onSubmit={handleSubmit}>
          <h1 className="reg-h1">Регистрация</h1>
          <input
            type="text"
            placeholder="Имя"
            className="field"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Фамилия"
            className="field"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Логин"
            className="field"
            name="login"
            value={formData.login}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            className="field"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Повторите пароль"
            className="field"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
            required
          />
          <input
            type="submit"
            value="Зарегистрироваться"
            className="field submit"
          />
        </form>
      </section>
    </main>
  );
};

export default RegisterPage;
