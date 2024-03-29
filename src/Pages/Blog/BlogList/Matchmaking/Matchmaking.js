import React from 'react'
import { Link } from 'react-router-dom'
import '../../Blog.scss'
import BlogHeader from '../../BlogHeader'
import Intriguingbiossparking from '../../../../images/Blog/Intriguing bios sparking.webp'
import { Helmet } from 'react-helmet'

const Matchmaking = () => {
  return (
    <div className="blog main-padding">
      <BlogHeader />
      <Helmet>
        <title>Icebreaker Bonanza: Sparking Conversations After a Match.</title>
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
          <Link to="/MatchmakingDetails">
            <div className="row mb-4">
              <div className="col-md-4">
                <img
                  src={Intriguingbiossparking}
                  alt={'Intriguing bios sparking'}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <h4>
                  Icebreaker Bonanza: Sparking Conversations After a Match.
                </h4>
                <p>
                  Congratulations! You've scored a match, but now what? Fear
                  not, the conversation doesn't have to fizzle out faster than a
                  dying campfire...
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
                <Link to={'/MatchmakingDetails'}>Matchmaking Insights</Link>
              </li>
              <li>
                <Link>Matchmaking Success</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="blog"></div>
    </div>
  )
}

export default Matchmaking
