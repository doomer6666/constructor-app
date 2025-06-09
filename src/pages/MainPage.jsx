import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../api/authApi";
import { getPublicPages } from "../api/getPublicPages";
import { refreshToken } from "../api/refreshApi";
import { logOut } from "../api/logOut";

const MainPage = () => {
  const [pages, setPages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthAndFetchPages = async () => {
      try {
        const storedRefreshToken = localStorage.getItem("refresh");
        if (storedRefreshToken) {
          await refreshToken();
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.error(err);
        setIsAuthenticated(false);
      } finally {
        try {
          const result = await getPublicPages();
          setPages(result);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      }
    };

    checkAuthAndFetchPages();
  }, []);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return (
    <div className="main-page">
      <header className="redactor-head">
        <p className="logo">
          ТОЧКА
          <br />
          СБОРА
        </p>
        <p className="lk">Главная</p>
        {isAuthenticated ? (
          <div className="redactor-head-div">
            <Link to="/redactor">
              <button className="transit">Мои страницы</button>
            </Link>
            <Link to="/templates">
              <button className="transit">Шаблоны</button>
            </Link>
            <button className="exit" onClick={logOut}>
              <img src="/log-out.svg" />
            </button>
          </div>
        ) : (
          <div className="redactor-head-div">
            <Link to={"/auth"}>
              <button className="exit">
                <img src="/log-in.svg" />
              </button>
            </Link>
          </div>
        )}
      </header>
      <main className="redactor-main">
        <section className="hero">
          <h1 className="inter-h1">Все страницы</h1>
          <h2>Посмотрите, что публикуют другие</h2>
        </section>
        <section className="internships">
          <ul className="internship-list">
            {pages.map((page) => (
              <li className="internship-el">
                <Link to={`/read/${page.id}`} className="list-item">
                  <img src={BASE_URL + "\\" + page.image} />
                  <h3>{page.name}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
