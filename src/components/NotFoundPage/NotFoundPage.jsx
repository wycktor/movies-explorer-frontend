import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
      <Link className="not-found__link" to="/">
        Назад
      </Link>
    </section>
  );
}

export default NotFoundPage;
