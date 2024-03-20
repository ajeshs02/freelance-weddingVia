import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import black_logo from '../../images/logo_black.webp'
import logo_white from '../../images/logo_white.webp'
import ios from '../../images/Apple.png'
import android from '../../images/android.png'

import './Header.scss'
import { ModalCustomPaths } from '../../constants/constants'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const location = useLocation()

  const isCustomHeaderPath = (pathname) => {
    return ModalCustomPaths.some((path) => path === pathname.toLowerCase())
  }

  const handleMenu = () => {
    console.log('handleMenu', isMenuOpen)
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div>
      <header
        style={{ zIndex: 100 }}
        className={
          isCustomHeaderPath(location.pathname) ? 'custom-header ' : ' '
        }
      >
        <div className="row align-items-center justify-content-between">
          <div className="col-4 col-md-auto">
            <Link target={'_blank'} to="/">
              <img src={black_logo} className={'img-fluid logo black-logo'} />
            </Link>
            <Link target={'_blank'} to="/">
              <img
                loading="lazy"
                src={logo_white}
                className={'img-fluid logo white-logo'}
              />
            </Link>
          </div>
          <div className="col-8 col-md-auto">
            <div className="m-menu" onClick={handleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </div>
            <ul className={`${isMenuOpen ? 'active' : ''}`}>
              <li onClick={handleMenu}>
                <Link target={'_blank'} to="/get-mobile-app">
                  Get Mobile App
                </Link>
              </li>
              <li onClick={handleMenu}>
                <Link target={'_blank'} to="/DatingTips">
                  Blogs
                </Link>
              </li>
              <li onClick={handleMenu}>
                <Link target={'_blank'} to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* Modal */}
      <div
        className="modal fade"
        id="start-the-journey"
        tabIndex="-1"
        aria-labelledby="start-the-journeyLabel"
        aria-hidden="true"
        style={{ overflow: 'hidden' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                &times;
              </button>
              {/* <img src={black_logo} className="img-fluid logo" />
                        <p>Most Safe & Secured Matchmacking Service!</p>

                        <div className="input-group">
                            <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                <option selected>+91</option>
                                <option value="+91">+91</option>
                                <option value="+91">+91</option>
                                <option value="+91">+91</option>
                            </select>
                            <input type={"text"} className="text-control" />
                        </div>
                        <button className='yollow-btn butn__new' data-bs-toggle="modal" data-bs-target="#start-the-journey"><strong>SEND INVITE</strong></button> */}
              <div className="model-footer">
                <div>
                  <h2>WeddingVia Matrimony</h2>
                  <p>
                    Experience The Most Safe & Secured Indian Matrimony Service
                  </p>
                </div>
                <h6>GET THE MOBILE APP</h6>
                <Link
                  to="https://apps.apple.com/us/app/weddingvia-matrimony/id1518963636"
                  target={'_blank'}
                >
                  <img src={ios} className="img-fluid app-icon me-3" />
                </Link>
                <Link
                  to="https://play.google.com/store/apps/details?id=com.weddingvia&pli=1"
                  target={'_blank'}
                >
                  {' '}
                  <img src={android} className="img-fluid app-icon" />
                </Link>
                <label>
                  By registering, you agree to our <br />
                  <Link className="modal_link">Terms of Service</Link> &{' '}
                  <a
                    href={
                      'https://weddingvia.com/privacy_policy_matrimony_for_india'
                    }
                    target="_blank"
                    className="modal_link"
                  >
                    Privacy Policy.
                  </a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
