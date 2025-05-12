import { Link } from "react-router-dom";

const RedactorPA = () => {
  return (
    <body>
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
          <ul className="'internship-list">
            <li className="internship-el">
              <a href="#" className="list-item">
                <img
                  src="../content-img-sample1.png"
                  height="249px"
                  width="296px"
                  className="white"
                />
                <h3>Универсальный шаблон</h3>
                <h4>Для любой стажировки</h4>
              </a>
              <div className="button-div">
                <button className="create-internship open-internship">
                  Открыть для всех
                </button>
                <button className="create-internship open-internship hidden">
                  Закрыть публикацию
                </button>
                <button className="create-internship open-internship">
                  Удалить
                </button>
              </div>
            </li>
          </ul>
        </section>
        <div className="container">
          <a>
            <Link to="/sample" className="create-internship">
              Создать стажировку
            </Link>
          </a>
        </div>
      </main>
    </body>
  );
};
export default RedactorPA;
