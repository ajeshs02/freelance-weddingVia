import React from 'react'
import logoBlack from '../../images/logo_black.png'
import { Link } from 'react-router-dom'
import './AppDownload.scss'
import AppImage from '../../images/app.png'
import ios from '../../images/Apple.png'
import android from '../../images/android.png'
import EffortlessNavigation from '../../images/Effortless Navigation.png'
import PersonalizedRecommendations from '../../images/Personalized Recommendations.png'
import RealTimeNotifications from '../../images/Real-Time Notifications.png'
import SecureCommunication from '../../images/Secure Communication.png'

const AppDownload = () => {
  return (
    <div className="app-download-wrapper main-padding section">
      <div className="row align-items-center">
        <div className="col-md-5 text-center">
          <div className="wow zoomIn">
            <img src={AppImage} className="img-fluid" />
          </div>
        </div>
        <div className="col-md-7">
          <h2>Take your matchmaking journey on the go!</h2>
          <p>
            Finding your perfect match just got easier with the all-new
            WeddingVia mobile app. We've revamped the app to provide you with a
            seamless and intuitive experience, making your matrimony search
            journey simple and efficient.
          </p>
          <div className="row align-items-center">
            <div className="col-md-auto">
              <div className="img-block">
                <img src={EffortlessNavigation} className="img-fluid w-45" />
              </div>
            </div>
            <div className="col-md">
              <strong>Effortless Navigation</strong>
              <p>
                Our mobile app is designed with you in mind. Navigate through
                profiles effortlessly and find your potential matches with just
                a few taps.
              </p>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-auto">
              <div className="img-block">
                <img src={PersonalizedRecommendations} className="img-fluid" />
              </div>
            </div>
            <div className="col-md">
              <strong>Personalized Recommendations</strong>
              <p>
                Receive personalized recommendations based on your preferences
                and criteria, making it easier for you to find the perfect match
                tailored to your desires.
              </p>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-auto">
              <div className="img-block">
                <img src={RealTimeNotifications} className="img-fluid w-45" />
              </div>
            </div>
            <div className="col-md">
              <strong>Real-Time Notifications</strong>
              <p>
                Stay updated with real-time notifications about new matches,
                messages, and profile views, so you never miss out on any
                opportunity
              </p>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-auto">
              <div className="img-block">
                <img src={SecureCommunication} className="img-fluid" />
              </div>
            </div>
            <div className="col-md">
              <strong>Secure Communication</strong>
              <p>
                Connect with your matches securely through our messaging
                feature, ensuring your privacy is always protected.
              </p>
            </div>
          </div>

          <div className="downlaod">
            <div className="d-flex align-items-center justify-sm-content-center">
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
  )
}

export default AppDownload
