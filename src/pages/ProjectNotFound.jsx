import NotFound from './NotFound'

export default function ProjectNotFound() {
  return (
    <NotFound
      backLabel="Back to portfolio"
      backTo="/portfolio"
      message="This project is not in our portfolio yet. Browse our other work or return to the portfolio page."
      secondaryLabel="Go to home"
      secondaryTo="/"
      title="Project not found"
    />
  )
}
