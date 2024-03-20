import React from 'react'
import banner from '../../images/banner.webp'
import './StateHomeBanner.scss'
import Feature from '../HomeBanner/Feature'

const CommonHomeBanner = ({ title, type = 'State' }) => {
  return (
    <div>
      <div
        className="state-home-banner-wrapper main-padding"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="containt-block">
          <div className="wow fadeInDown delay-1s">
            <h1>
              Wedding Matrimony For {title} {type}
            </h1>
          </div>
          <div className="wow fadeInDown delay-1s">
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
      <Feature />
    </div>
  )
}

export default CommonHomeBanner
