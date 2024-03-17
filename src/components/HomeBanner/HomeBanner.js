import React from 'react'
import banner from '../../images/banner.webp'
import './HomeBanner.scss'
import unlockingprofileImg from '../../images/icon-1.png'
import protectfeatureImg from '../../images/icon-2.png'
import freehoroscopeImg from '../../images/icon-3.png'
import indianscommunitiesImg from '../../images/icon-4.png'
import Modal from '../modal/Modal'

const HomeBanner = (props) => {
  return (
    <div>
      <div
        className="home-banner-wrapper main-padding"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="containt-block">
          <div className="wow fadeInDown delay-1s">
            <h1>Safe & Secured Indian Matrimony Service</h1>
          </div>
          <div className="wow fadeIn delay-1s">
            <ul>
              <li>
                <img
                  src={unlockingprofileImg}
                  className="img-fluid p-1"
                  alt="Connect & discover without unlocking profile"
                />
                Connect & discover <br /> without unlocking profile
              </li>
              <li>
                <img
                  src={protectfeatureImg}
                  className="img-fluid p-1"
                  alt="Photo Guard, Number Guard & Profile Protect Feature"
                />
                Photo Guard, Number Guard & <br /> Profile Protect Feature
              </li>
              <li>
                <img
                  src={freehoroscopeImg}
                  className="img-fluid p-2"
                  alt="Complete biodata downloads & free horoscope"
                />
                Complete biodata <br /> downloads & free horoscope
              </li>
              <li>
                <img
                  src={indianscommunitiesImg}
                  className="img-fluid p-2"
                  alt="Profiles from all Indians communities"
                />
                Profiles from <br /> all Indians communities
              </li>
            </ul>
          </div>
          <div className="text-center">
            <div className="wow fadeIn delay-1s">
              <button
                id="modal_btn"
                className="yollow-btn butn__new"
                data-bs-toggle="modal"
                data-bs-target="#start-the-journey"
              >
                <span>
                  <strong>Start the Journey</strong>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="wow d-md-none fadeIn delay-1s">
        <ul className="containt-block">
          <li>
            <img
              src={unlockingprofileImg}
              className="img-fluid p-1"
              alt="Connect & discover without unlocking profile"
            />
            Connect & discover <br /> without unlocking profile
          </li>
          <li>
            <img
              src={protectfeatureImg}
              className="img-fluid p-1"
              alt="Photo Guard, Number Guard & Profile Protect Feature"
            />
            Photo Guard, Number Guard & <br /> Profile Protect Feature
          </li>
        </ul>
        <ul className="containt-block">
          <li>
            <img
              src={freehoroscopeImg}
              className="img-fluid p-2"
              alt="Complete biodata downloads & free horoscope"
            />
            Complete biodata <br /> downloads & free horoscope
          </li>
          <li>
            <img
              src={indianscommunitiesImg}
              className="img-fluid p-2"
              alt="Profiles from all Indians communities"
            />
            Profiles from <br /> all Indians communities
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomeBanner
