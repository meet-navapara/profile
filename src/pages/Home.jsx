import { Link } from 'react-router-dom'
import Hero from '../components/home/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <h2>Ready to start your next project?</h2>
          <p>Growth-focused strategies, personalized support, results that drive success.</p>
          <Link className="btn btn--primary" to="/portfolio">
            See full portfolio
          </Link>
        </div>
      </section>
    </>
  )
}
