import React from 'react'
import './Feature.scss'
import verified_data from '../../images/verified_data.png'
import connect from '../../images/Match.png'
import promotional from '../../images/No promotional calls.png'
import Per_Profile from '../../images/Pay Per Profile.png'
import Privacy from '../../images/Privacy first.png'
import Match from '../../images/Match and connect for free.png'
import CompleteInformation from '../../images/Complete Information.png'

const Feature = () => {
  return (
    <div className="feature-wrapper main-padding">
      <div className="wow fadeIn">
        <h2 className="text-center">
          All that you need to meet your soulmate.
        </h2>
      </div>
      <div className="row justify-content-center g-5 mb-5 align-items-stretch">
        <div className="col-md-3">
          <div className="feature text-center">
            <div className="feature-img">
              <img
                src={verified_data}
                className="img-fluid"
                alt="verified_data"
              />
            </div>
            <div className="wow fadeIn">
              <h6>100% verified data</h6>
              <p>
                Find your perfect match with confidence, WeddingVia Matrimony
                comes with 100% verified profiles ensured with state-of-the-art
                technology.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature text-center">
            <div className="feature-img">
              <img src={Match} className="img-fluid" alt="Match" />
            </div>
            <div className="wow fadeIn">
              <h6>Match with like-minded</h6>
              <p>
                Find like-minded profiles within your community and meet your
                ideal match. Our AI-driven profile sorter delivers exclusive
                matches tailored to your preferences, interests, and passions.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature text-center">
            <div className="feature-img">
              <img
                src={connect}
                className="img-fluid"
                alt="Match and connect for free"
              />
            </div>
            <div className="wow fadeIn">
              <h6>Safe Matchmaking</h6>
              <p>
                Experience safe matchmaking with WeddingVia, where profiles are
                listed with an AI-driven three-layer verification system backed
                up by human routine audits. Profiles are protected with features
                such as photo lock, number lock, and the option to hide full
                names, among others.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-stretch justify-content-center g-5">
        <div className="col-md-3">
          <div className="feature text-center">
            <div className="feature-img">
              <img
                src={CompleteInformation}
                className="img-fluid"
                alt="No promotional calls"
              />
            </div>
            <div className="wow fadeIn">
              <h6>Complete Information</h6>
              <p>
                Explore 100% verified profiles that come with complete biodata
                downloads,you can generate free horoscope scores and match with
                profiles that are compatible with your horoscope.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature text-center">
            <div className="feature-img">
              <img src={Privacy} className="img-fluid" alt="Privacy first" />
            </div>
            <div className="wow fadeIn">
              <h6>Privacy first</h6>
              <p>
                We won't share your contact details if the details are locked
                unless you communicate with them. Additionally, you can decide
                who wants to see your photos, complete name etc.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="feature text-center">
            <div className="feature-img">
              <img src={Per_Profile} className="img-fluid" alt="Per Profile" />
            </div>
            <div className="wow fadeIn">
              <h6>Pay Per Profile</h6>
              <p>
                When you're ready to take the next step, simply unlock a single
                profile by Pay Per Plan and initiate a chat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
