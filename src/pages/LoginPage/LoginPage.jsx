import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Добавлен useNavigate
import {
  MainContainer,
  SectInfo,
  CompanyName,
  InfoBlock,
  FormContainer,
  InputField,
} from "../../components/Components";
import { useLoginMutation } from "../../api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../slices/AuthSlice";

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
      navigate("/dashboard");
    } catch (err) {
      console.error("Ошибка входа:", err);
    }
  };

  return (
    <MainContainer>
      {error && <p style={{ color: "red" }}>Ошибка: {error.message}</p>}{" "}
      <SectInfo>
        <CompanyName>
          <p>Uralintern</p>
        </CompanyName>
        <InfoBlock>
          <p>Сайт с шаблонами для создания плана стажировок</p>
          <img src="/decor-index.png" alt="Декор" width="365" height="218" />
        </InfoBlock>
      </SectInfo>
      <FormContainer onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <InputField
          type="submit"
          value={"Вход"}
          className="submit"
          disabled={isLoading}
        />
        <Link
          to="/register"
          style={{
            color: "unset",
            textDecoration: "unset",
            backgroundColor: "#D8D8D8",
            fontSize: "35px",
            padding: "5px",
            paddingRight: "10px",
            paddingLeft: "10px",
            borderRadius: "20px",
            transition: "backgroundColor 0.3s, color 0.3s",
          }}
        >
          Зарегистрироваться
        </Link>
      </FormContainer>
    </MainContainer>
  );
};

export default LoginPage;
