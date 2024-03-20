import React from 'react'
import { Link } from 'react-router-dom'
import Feature from '../Feature/Feature'
import AppDownload from '../AppDownkoad/AppDownload'
import SearchByCategory from './SearchByCategory'
import ios from '../../images/Apple.png'
import android from '../../images/android.png'
import CommonHomeBanner from '../CommonHomeBanner.js/CommonHomeBanner'

const StateDetails = (props) => {
  const { bannerImage, title, subtitle, content } = props
  return (
    <div>
      <CommonHomeBanner title={title} />

      <div className="new-categoryDetails-wrapper">
        <div className="row g-0 align-items-center">
          <div className="col-md-6">
            <img src={bannerImage} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="categoryDetails-block ">
              <h1 style={{ fontSize: '44px' }}>{title}</h1>
              <h6>{subtitle}</h6>
              <p>{content}</p>

              <p>
                WeddingVia features 100% verified profiles and uses matchmaking
                based on interests and likes. It's a safe and secure platform
                where you can communicate with profiles without unlocking them.
                We offer features like single profile unlock, showing numbers
                and images to interested profiles only, and chats initiated with
                acceptance only.
              </p>

              <p>
                Join WeddingVia Matrimony for a hassle-free and secure
                matrimonial experience.
              </p>
              <p>
                Start your journey towards happily ever after journey today!
              </p>
              <h5>
                Find your perfect match with WeddingVia Matrimony.
                <br /> Download now and start your happily ever after!
              </h5>

              <div className="downlaod">
                <div className="d-flex align-items-center">
                  <Link
                    to="https://apps.apple.com/us/app/weddingvia-matrimony/id1518963636"
                    target={'_blank'}
                  >
                    {' '}
                    <img src={ios} className="img-fluid app-icon me-3" />
                  </Link>
                  <Link
                    to="https://play.google.com/store/apps/details?id=com.weddingvia&pli=1"
                    target={'_blank'}
                  >
                    {' '}
                    <img src={android} className="img-fluid app-icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ul className='containt-block'>
                            <li>
                                Connect & discover <br /> without unlocking profile
                            </li>
                            <li>
                                Photo Guard, Number Guard & <br /> Profile Protect Feature
                            </li>
                            </ul>
                        <ul className='containt-block'>
                            <li>
                                Complete biodata <br /> downloads & free horoscope
                            </li>
                            <li>
                                Profiles from <br /> all Indians communities
                            </li>
                        </ul> */}
      <Feature />
      <AppDownload />
      <SearchByCategory />
    </div>
  )
}

export default StateDetails
