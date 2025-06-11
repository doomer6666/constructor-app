import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPages } from "../api/getPagesApi";
import { BASE_URL } from "../api/authApi";
import { patchPageState } from "../api/patchPageStateApi";
import { logOut } from "../api/logOut";
import UpButton from "../components/UpButton";

const TemplatePA = () => {
  const [pages, setPages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const result = await getPages();
        setPages(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPages();
  }, []);

  const onStateClick = async (pageId, newState) => {
    setPages((prevPages) =>
      prevPages.map((page) =>
        page.id === pageId ? { ...page, state: newState } : page
      )
    );
    try {
      await patchPageState({ id: pageId, state: newState });
    } catch (err) {
      console.log(err);
    }
  };

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
        <p className="lk">Личный кабинет</p>
        <div className="redactor-head-div">
          <Link to="/">
            <button className="transit">Все страницы</button>
          </Link>
          <Link to="/redactor">
            <button className="transit">Мои страницы</button>
          </Link>
          <button className="exit" onClick={logOut}>
            <img src="/log-out.svg" />
          </button>
        </div>
      </header>
      <main className="redactor-main">
        <section className="hero">
          <h1 className="inter-h1">Шаблоны страниц</h1>
          <h2>Выберите новый шаблон и адаптируйте его под ваши цели</h2>
        </section>
        <section className="internships">
          <ul className="internship-list">
            <li className="internship-el readonly">
              <Link to="/sample/" className="list-item">
                <img src="/white.png" />
                <h3>Пустая страница</h3>
                <p>
                  Для тех, кто хочет
                  <br /> начать с нуля
                </p>
              </Link>
            </li>
            {pages.map((page) => {
              if (page.state !== "temp") {
                return;
              }
              return (
                <li className="internship-el readonly" key={page.id}>
                  {page.deletable && (
                    <button
                      className="trash"
                      onClick={() => onStateClick(page.id, "delete")}
                    >
                      <img src="/trash.svg" height="25px" width="23px" />
                    </button>
                  )}
                  <Link to={`/sample/${page.id}`} className="list-item">
                    <img src={`${BASE_URL}\\${page.image}`} alt={page.name} />
                    <h3>{page.name}</h3>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
        <UpButton />
      </main>
    </div>
  );
};

export default TemplatePA;
