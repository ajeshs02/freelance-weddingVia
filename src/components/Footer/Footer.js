import React from 'react'
import './Footer.scss'
import apple from '../../images/apple-store-white.png'
import android from '../../images/Android-store-white.png'
import logo_white from '../../images/logo_white.png'
import two_hearts from '../../images/two-hearts.png'
import { Link } from 'react-router-dom'
import fb from '../../images/fb.png'
import Insta from '../../images/Insta.png'
import link from '../../images/link.png'
import Medium from '../../images/Medium.png'
import x from '../../images/x.png'
import yt from '../../images/yt.png'

const Footer = () => {
  return (
    <footer>
      <div className="row justify-content-between">
        <div className="col-md-auto">
          <img src={logo_white} className="img-fluid logo" />
          <h6 className="mt-3">MEET US ONLINE</h6>
          <ul className="social-icon">
            <li>
              <Link
                to="https://www.facebook.com/WeddingViaOfficial"
                target={'_blank'}
              >
                <img src={fb} alt="fb" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/weddingviaofficial/?igshid=MzRlODBiNWFlZA%3D%3D"
                target={'_blank'}
              >
                <img src={Insta} alt="Insta" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/company/weddingvia/"
                target={'_blank'}
              >
                <img src={link} alt="link" />
              </Link>
            </li>
            <li>
              <Link to="https://weddingvia.medium.com/" target={'_blank'}>
                <img src={Medium} alt="Medium" />
              </Link>
            </li>
            <li>
              <Link
                to="https://twitter.com/weddingvia?lang=en"
                target={'_blank'}
              >
                <img src={x} alt="x" />
              </Link>
            </li>
            <li>
              <Link to="https://www.youtube.com/@weddingvia" target={'_blank'}>
                <img src={yt} alt="yt" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-auto">
          <h6>GET THE MOBILE APP</h6>
          <Link
            to="https://apps.apple.com/us/app/weddingvia-matrimony/id1518963636"
            target={'_blank'}
          >
            {' '}
            <img src={apple} className="img-fluid app-icon me-3" />
          </Link>
          <Link
            to="https://play.google.com/store/apps/details?id=com.weddingvia&pli=1"
            target={'_blank'}
          >
            {' '}
            <img src={android} className="img-fluid app-icon" />
          </Link>
        </div>
        <ul className="footer-link">
          <li>
            <Link target={"_blank"} to={'/search-by-categories'}> Search by Categories</Link>{' '}
            &nbsp; |{' '}
          </li>
          <li>
            <Link target={"_blank"} to={'/get-mobile-app'}>Get Mobile App</Link> &nbsp;{' '}
            <span className="d-xs-none">|</span>{' '}
          </li>
          <li>
            {' '}
            <Link target={"_blank"} to="/user_agreement_matrimony_for_india">
              User Agreement
            </Link>{' '}
            &nbsp; |{' '}
          </li>
          <li>
            <Link target={"_blank"} to="/privacy_policy_matrimony_for_india">Privacy Policy</Link>{' '}
            &nbsp; <span className="d-xs-none">|</span>{' '}
          </li>
          <li>
            <Link target={"_blank"} to="/cookie-policy">Cookie Policy</Link> &nbsp; |{' '}
          </li>
          <li>
            <Link target={"_blank"} to="/DatingTips">Blog</Link> &nbsp; |{' '}
          </li>
          <li>
            <Link target={"_blank"} to={'/support'}>Support</Link> &nbsp;{' '}
            <span className="d-xs-none"></span>{' '}
          </li>
          {/* <li>Site Map  </li> */}
        </ul>
        <div className="block">
          <p className="slogen">
            <img src={two_hearts} className="img-fluid" /> Made with love, to
            find love
          </p>
          <img src={logo_white} className="img-fluid small-logo" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
