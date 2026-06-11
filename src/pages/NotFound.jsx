import { Link } from 'react-router-dom'

export default function NotFound({
  title = 'Page not found',
  message = "The page you're looking for doesn't exist or may have been moved.",
  backTo = '/',
  backLabel = 'Back to home',
  secondaryTo = '/portfolio',
  secondaryLabel = 'View portfolio',
}) {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <p className="not-found__code">404</p>
        <h1>{title}</h1>
        <p className="not-found__message">{message}</p>
        <div className="not-found__actions">
          <Link className="btn btn--primary" to={backTo}>
            {backLabel}
          </Link>
          <Link className="btn btn--ghost" to={secondaryTo}>
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
