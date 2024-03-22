import React from 'react'
import { Link } from 'react-router-dom'
import ios from '../../images/Apple.png'
import android from '../../images/Android.png'
import './Modal.scss'

const Modal = ({ setIsModalOpen }) => {
  return (
    <div
      className="custom-modal"
      tabIndex="-1"
      aria-labelledby="start-the-journeyLabel"
      aria-hidden="true"
    >
      <div className="custom-modal-container">
        <div className="custom-modal-body">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="btn-close"
          >
            &times;
          </button>
          <div className="">
            <div>
              <h2>WeddingVia Matrimony</h2>
              <p>Experience The Most Safe & Secured Indian Matrimony Service</p>
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
  )
}
export default Modal
