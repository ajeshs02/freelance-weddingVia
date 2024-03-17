import React from 'react'
import banner from '../../images/banner.webp'
import './StateHomeBanner.scss'
import Modal from '../modal/Modal'

const StateHomeBanner = ({ title }) => {
  return (
    <div>
      <div
        className="state-home-banner-wrapper main-padding"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="containt-block">
          <div className="wow fadeInDown delay-1s">
            <h1>Wedding Matrimony For {title} State</h1>
          </div>
        </div>
      </div>
      <div className="wow d-md-none fadeIn delay-1s"></div>
    </div>
  )
}

export default StateHomeBanner
