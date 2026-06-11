import { companyInfo } from '../../data/projects'

export default function Logo({ variant = 'light', className = '' }) {
  if (variant === 'dark') {
    return (
      <span className={`logo logo--dark ${className}`.trim()}>
        <img
          alt={`${companyInfo.name} logo`}
          className="logo__navbar-image"
          src={companyInfo.logoNavbar}
        />
      </span>
    )
  }

  return (
    <span className={`logo logo--light ${className}`.trim()}>
      <img
        alt={`${companyInfo.legalName} logo`}
        className="logo__image"
        src={companyInfo.logo}
      />
    </span>
  )
}
