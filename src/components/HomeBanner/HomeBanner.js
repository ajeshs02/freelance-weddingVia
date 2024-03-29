import React from 'react'
import banner from '../../images/banner.webp'
import './HomeBanner.scss'
import Feature from './Feature'

const HomeBanner = (props) => {
  return (
    <div className="" style={{ height: 'auto' }}>
      <div
        className="home-banner-wrapper main-padding"
        style={{
          padding: 0,
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="containt-block">
          <div className="wow fadeInDown delay-1s">
            <h1>Safe & Secured Indian Matrimony Service</h1>
          </div>

          <div className="text-center">
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
      </div>
      {/* features icons */}
      <Feature />
    </div>
  )
}

export default HomeBanner

/*
if a iphone user clicks the android image, will that open is a new tab ? if the iphone user clicks the ios image, will that open the app store ? if a android user clicks the android, will that opens playstore respective app link  ? if a android user clicks the ios link, will that opens in a new tab ? if a laptop/windows user clicks either of this link, will that opens iin a new tab?   i want all of these behavior */
