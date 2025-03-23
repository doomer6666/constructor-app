import styled from "styled-components";

export const MainContainer = styled.main`
  font-family: "Manrope", sans-serif;
  color: black;
  margin: 0;
  min-height: 100vh;
  background: url(${new URL("/back.png", import.meta.url)}) no-repeat center
    center fixed;
  background-size: cover;
`;

// Секция с информацией
export const SectInfo = styled.section`
  max-width: 1920px;
  margin-right: 50px;
  margin-top: 10px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Выравнивание по вертикали */
`;

// Блок с названием компании
export const CompanyName = styled.div`
  background-color: #fff1e3;
  padding: 14px 82px 14px 122px;
  border-radius: 0 20px 20px 0;
  max-height: 144px;
  border-color: #ff7700;
  border-width: 2px;
  border-style: solid;
  align-self: center;

  p {
    font-size: 80px;
    margin: 0;
    padding: 0;
    max-height: 140px;
    white-space: nowrap; /* Запрет переноса текста */
  }
`;

// Информационный блок
export const InfoBlock = styled.div`
  padding: 10px 15px;
  border-color: #ff7700;
  border-width: 2px;
  border-style: solid;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  img {
    display: block;
  }
`;

// Контейнер формы
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 100px;
  background-color: #fff8f1;
  opacity: 0.95;
  border-radius: 20px;
  border: 2px solid black;

  /* Критически важные исправления */
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
  gap: 25px; // Для равномерных отступов между элементами
`;

// Поле ввода
export const InputField = styled.input`
  background-color: #fafafa;
  font-size: 35px;
  padding: 5px 20px;
  border-radius: 20px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background: #e0e0e0;
  }

  &:focus {
    background: #d0d0d0;
    outline: none;
  }

  &.submit {
    padding: 5px 20px;
    margin-bottom: 0;
    width: auto; /* Автоматическая ширина для кнопки */
    align-self: center; /* Центрирование кнопки */
  }
`;

export const FormA = styled.a`
  background-color: #fafafa;
  font-size: 35px;
  padding: 5px;
  padding-right: 180px;
  border-radius: 20px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background: #e0e0e0;
  }

  &:focus {
    background: #d0d0d0;
    outline: none;
  }

  &.submit {
    padding: 5px 20px;
    margin-bottom: 0;
    width: auto; /* Автоматическая ширина для кнопки */
    align-self: center; /* Центрирование кнопки */
  }
`;
