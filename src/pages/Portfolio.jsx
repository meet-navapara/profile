import Hero from '../components/home/Hero'
import ProjectGrid from '../components/home/ProjectGrid'

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <Hero compact />
      <ProjectGrid />
    </div>
  )
}
