import React from 'react'
import ios from '../../images/Apple.png'
import android from '../../images/android.png'
import { Link } from 'react-router-dom'

const Download = () => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
  const isAndroid = /android/i.test(navigator.userAgent)

  const iosLink =
    'https://apps.apple.com/us/app/weddingvia-matrimony/id1518963636'
  const androidLink =
    'https://play.google.com/store/apps/details?id=com.weddingvia&pli=1'
  return (
    <div className="downlaod">
      <p>Get the WeddingVia matrimony app today !</p>
      <div className="d-flex align-items-center justify-sm-content-center">
        <Link to={iosLink} target={isIOS ? '_self' : '_blank'}>
          <img src={ios} className="img-fluid app-icon me-3" />
        </Link>
        <Link to={androidLink} target={isAndroid ? '_self' : '_blank'}>
          <img src={android} className="img-fluid app-icon" />
        </Link>
      </div>
    </div>
  )
}
export default Download
