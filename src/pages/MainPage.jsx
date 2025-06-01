import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../api/authApi";
import { getPublicPages } from "../api/getPublicPages";

const MainPage = () => {
  const [pages, setPages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPublicPages();
        setPages(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return (
    <div className="main-page">
      <header className="redactor-head">
        <Link to={"/auth"}>
          <button className="exit">Вход</button>
        </Link>
        {/* <p className="lk">Личный кабинет</p> */}
      </header>
      <main className="redactor-main">
        <section className="hero">
          <h1 className="inter-h1">Все страницы</h1>
          <h2>Посмотрите, что делают другие</h2>
        </section>
        <section className="internships">
          <ul className="internship-list">
            {pages.map((page) => (
              <li className="internship-el">
                <Link to="/read" className="list-item">
                  <img src={BASE_URL + "\\" + page.image} />
                  <h3>{page.name}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        {/* <div className="container">
          <Link to="/sample/new" className="create-internship">
            Создать стажировку
          </Link>
        </div> */}
      </main>
    </div>
  );
};

export default MainPage;
