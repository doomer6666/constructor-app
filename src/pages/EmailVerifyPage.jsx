import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postEmail } from "../api/postEmail";

const EmailVerifyPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = localStorage.getItem("email");
    const formData = { email, code };
    try {
      const data = await postEmail(formData);
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      navigate("/redactor");
    } catch (err) {
      console.error("Неверный код:", err);
      setError("Неверный код");
    }
  };
  const handleChange = (e) => {
    const { _, value } = e.target;
    setCode(value);
  };
  return (
    <main>
      {error && <p className="error">{error}</p>}
      <section className="sec-form email">
        <form method="post" onSubmit={handleSubmit}>
          <h1 className="reg-h1">Подтвердите почту</h1>
          <input
            type="text"
            placeholder="Код отправлен Вам на почту"
            className="field"
            name="first_name"
            value={code}
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

export default EmailVerifyPage;
