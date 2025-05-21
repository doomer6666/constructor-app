import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logup } from "../api/registerApi";
const RegisterPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    second_name: "",
    username: "",
    password: "",
    repeatPassword: "",
    role: "",
  });

  const validateInput = (data) => {
    const unsafePattern = /[<>]/;
    const textFields = ["first_name", "second_name", "username"];
    for (const field of textFields) {
      if (unsafePattern.test(data[field])) {
        return `Поле/я содержит/ат недопустимые символы (< или >)`;
      }
    }
    if (data.password.length < 6) {
      return "Пароль должен содержать не менее 6 символов";
    }
    if (data.password !== data.repeatPassword) {
      return "Пароли не совпадают";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const validationError = validateInput(formData);
      if (validationError) {
        setError(validationError);
        return;
      }
      const data = await logup(formData);
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      console.log("Успешная регистрация:", data);
      navigate("/redactor");
    } catch (err) {
      console.error("Ошибка регистрации:", err);
      setError("Ошибка регистрации, смените логин");
    }
  };

  return (
    <main>
      {error && <p className="error">{error}</p>}
      <section className="sec-form">
        <form method="post" onSubmit={handleSubmit}>
          <h1 className="reg-h1">Регистрация</h1>
          <input
            type="text"
            placeholder="Имя"
            className="field"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Фамилия"
            className="field"
            name="second_name"
            value={formData.second_name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Логин"
            className="field"
            name="username"
            value={formData.username}
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
