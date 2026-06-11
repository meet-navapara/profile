import { companyInfo } from '../../data/projects'
import Logo from './Logo'

function MailIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m5 7 7 5 7-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="M8.5 5.5h2l1.2 3.2-1.6 1.1a11 11 0 0 0 4.8 4.8l1.1-1.6 3.2 1.2v2a2 2 0 0 1-2 2C10.6 18.2 5.8 13.4 5.5 7.5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__about">
          <p className="footer__logo">
            <Logo variant="light" />
          </p>
          <p className="footer__description">{companyInfo.description}</p>
        </div>

        <div className="footer__contact">
          <h2 className="footer__heading">Contact Us</h2>

          <ul className="footer__contact-list">
            <li>
              <span className="footer__icon">
                <MailIcon />
              </span>
              <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
            </li>
            <li>
              <span className="footer__icon">
                <PhoneIcon />
              </span>
              <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>{companyInfo.phone}</a>
            </li>
            <li>
              <span className="footer__icon">
                <LocationIcon />
              </span>
              <span>{companyInfo.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__divider" />

      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {companyInfo.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
