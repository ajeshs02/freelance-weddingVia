import React from 'react'
import { Link } from 'react-router-dom'
import '../../Blog.scss'
import BlogHeader from '../../BlogHeader'
import Picture1 from '../../../../images/Blog/Picture1.webp'
import Picture2 from '../../../../images/Blog/Picture2.webp'
import { Helmet } from 'react-helmet'

const DatingTips = () => {
  return (
    <div className="blog main-padding">
      <BlogHeader />
      <Helmet>
        <title>
          Safe & Successful Online Dating: Safe Matrimony from WeddingVia
        </title>
        <meta
          name="description"
          content="Blogs by Weddingvia, India's most trusted matrimony app, connects you with compatible
matches. Enjoy free chat, verified profiles, free biodata and horoscope downloads,
matrimony profiles from all India communities"
          data-react-helmet="true"
        />
      </Helmet>
      <div className="row">
        <div className="col-md-8">
          <Link to="/SafeMatrimonyDetails1">
            <div className="row mb-4">
              <div className="col-md-4">
                <img
                  src={Picture1}
                  alt={'Icebreaker Bonanza Sparking'}
                  className="img-fluid"
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="col-md-8">
                <h4>Navigating Online Matchmaking Journey Safely.</h4>
                <p>
                  In the exciting world of online matchmaking, finding love
                  sparks joy, but sharing information requires caution. Striking
                  the right balance between expressing..
                </p>
                <span>June 28, 2021</span>
              </div>
            </div>
          </Link>

          <Link to="/SafeMatrimonyDetails2">
            <div className="row mb-4">
              <div className="col-md-4">
                <img
                  src={Picture2}
                  alt="Navigating Overly Forward Profiles on Dating Apps"
                  className="img-fluid"
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="col-md-8">
                <h4>
                  Red Flags, Green Lights: Navigating Information Sharing on
                  Matchmaking Apps.
                </h4>
                <p>
                  The excitement of finding love online can make it tempting to
                  share personal details quickly....
                </p>
                <span>June 28, 2021</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <div className="tags">
            <ul>
              <li>
                <Link to={'/SafeMatrimonyDetails1'}>Secure matchmaking</Link>
              </li>
              <li>
                <Link to={'/SafeMatrimonyDetails2'}>Safe Matrimony Tips</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="blog"></div>
    </div>
  )
}

export default DatingTips
