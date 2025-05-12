import { Link } from "react-router-dom";
import { useGetPageQuery } from "../api/pageApi";

const MainPage = () => {
  const { data, isLoading, error } = useGetPageQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  const title =
    data?.blocks?.find((block) => block.type === "header")?.data.content
      .title1 || "Без заголовка";

  return (
    <div className="main-page">
      <header className="redactor-head">
        <button className="exit">Выход</button>
        <p className="lk">Личный кабинет</p>
      </header>
      <main className="redactor-main">
        <section className="hero">
          <h1 className="inter-h1">Мои стажировки</h1>
          <h2>Можно продолжать редактировать</h2>
        </section>
        <section className="internships">
          <ul className="internship-list">
            <li className="internship-el">
              <Link to="/sample" className="list-item">
                <h3>{title}</h3>
              </Link>
            </li>
          </ul>
        </section>
        <div className="container">
          <Link to="/sample/new" className="create-internship">
            Создать стажировку
          </Link>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
