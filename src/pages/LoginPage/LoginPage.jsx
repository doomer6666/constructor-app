import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MainContainer,
  SectInfo,
  CompanyName,
  InfoBlock,
  FormContainer,
  InputField,
} from "../../components/Components";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отправка данных:", { login, password });
  };

  return (
    <MainContainer>
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
        <InputField type="submit" value="Вход" className="submit" />
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
