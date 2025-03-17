const InternshipPage = ()=>{
    return(
        <main>
        <section class="hero">
          <h1 class = 'inter-h1'>Новая стажировка</h1>
          <h2>Выберите новый шаблон и адаптируйте его под ваши цели</h2>
        </section>
        <section class="samples">
          <ul class="sample-list">
            <li class="sample-item">
              <a href="{{ url_for('sample') }}" class="list-item">
                <div class = 'white'></div>
                <h3>Пустая страница</h3>
                <h4>Для тех, кто хочет начать с нуля</h4>
              </a>
            </li>
            <li class="sample-item">
              <a href="#" class="list-item">
                <img src="../static/img/sample-1.jpg" height="249px" width="296px" class = 'white'/>
                <h3>Универсальный шаблон</h3>
                <h4>Для любой стажировки</h4>
              </a>
            </li>
            <li class="sample-item">
              <a href="#" class="list-item">
                <img src="../static/img/sample-2.jpg" height="249px" width="296px" class = 'white'/>
                <h3>Универсальный шаблон</h3>
                <h4>Для любой стажировки(Темная тема)</h4>
              </a>
            </li>
            <li class="sample-item">
              <a href="#" class="list-item">
                <img src="../static/img/sample-3.jpg" height="249px" width="296px" class = 'white'/>
                <h3>Универсальный шаблон</h3>
                <h4>Креативное размещение в блоках</h4>
              </a>
            </li>
          </ul>
        </section>
    </main>
    );
}

export default InternshipPage;
