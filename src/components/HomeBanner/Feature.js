import React from 'react'
import unlockingprofileImg from '../../images/icon-1.png'
import protectfeatureImg from '../../images/icon-2.png'
import freehoroscopeImg from '../../images/icon-3.png'
import indianscommunitiesImg from '../../images/icon-4.png'

const Feature = () => {
  return (
    <div className="wow fadeIn delay-1s section">
      <h2 className="features-heading">
        Experience The Safe Matchmaking Journey With Weddingvia.com
      </h2>
      <ul className=" bottom-features">
        <li>
          <img
            src={unlockingprofileImg}
            className="img-fluid "
            alt="Connect & discover without unlocking profile"
          />

          <p>Connect & discover without unlocking profile</p>
        </li>
        <li>
          <img
            src={protectfeatureImg}
            className="img-fluid p-1"
            alt="Photo Guard, Number Guard & Profile Protect Feature"
          />

          <p>Photo Guard, Number Guard & Profile Protect Feature</p>
        </li>

        <li>
          <img
            src={freehoroscopeImg}
            className="img-fluid"
            alt="Complete biodata downloads & free horoscope"
          />

          <p>Complete biodata downloads & free horoscope</p>
        </li>
        <li>
          <img
            src={indianscommunitiesImg}
            className="img-fluid"
            alt="Profiles from all Indians communities"
          />

          <p>Profiles from all Indians communities</p>
        </li>
      </ul>
    </div>
  )
}
export default Feature
