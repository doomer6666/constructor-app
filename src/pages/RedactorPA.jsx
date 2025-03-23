import { Link } from "react-router-dom";

const RedactorPA = () => {
  return (
    <body>
      <header>
        <button className="exit">Выход</button>
        <p className="lk">Личный кабинет</p>
      </header>
      <main>
        <section className="hero">
          <h1 className="inter-h1">Мои стажировки</h1>
          <h2>Можно продолжать редактировать</h2>
        </section>
        <section className="internships">
          <ul className="'internship-list"></ul>
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
