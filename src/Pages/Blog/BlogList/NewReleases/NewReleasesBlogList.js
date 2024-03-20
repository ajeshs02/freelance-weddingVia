import React from 'react'
import { Link } from 'react-router-dom'
import '../../Blog.scss'
import BlogHeader from '../../BlogHeader'
import Automatic from '../../../../images/Blog/Automatic, free horoscope downloaded enabled.webp'
import Dial from '../../../../images/Blog/Dial into Trust Your Number, Your Choice with Public Number Visibility on WeddingVia Matrimon.webp'
import Enabled from '../../../../images/Blog/Enabled complete Biodata downloads with all profiles.webp'
import Initiate from '../../../../images/Blog/Initiate Connections on Your Terms with Chat Approval on WeddingVia Matrimony.webp'
import Introducing from '../../../../images/Blog/Introducing Magic Links Share the Love.webp'
import security from '../../../../images/Blog/We are updated with 4 new features to ensure your data security.webp'
import { Helmet } from 'react-helmet'

const NewReleasesBlogList = () => {
  return (
    <div className="blog main-padding">
      <BlogHeader />
      <Helmet>
        <title>
          Safe & Successful Online Dating: New Releases from WeddingVia
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
          <Link to="/new-releases-blogList-details1">
            <div className="row mb-4 align-items-center">
              <div className="col-md-4 text-center">
                <img
                  src={Automatic}
                  alt={'Automatic, free horoscope downloaded enabled'}
                  className="img-fluid w-75"
                />
              </div>
              <div className="col-md-8">
                <h4>
                  Get Free Horoscope score and downloads with all profiles!
                </h4>
                <p>
                  In the vast dance of life, understanding your celestial rhythm
                  can bring clarity and insight. At WeddingVia Matrimony...
                </p>
              </div>
            </div>
          </Link>

          <Link to="/new-releases-blogList-details2">
            <div className="row mb-4 align-items-center">
              <div className="col-md-4 text-center">
                <img
                  src={Dial}
                  alt={
                    'Dial into Trust Your Number, Your Choice with Public Number Visibility on WeddingVia Matrimon'
                  }
                  className="img-fluid w-75"
                />
              </div>
              <div className="col-md-8">
                <h4>
                  Dial into Trust Your Number, Your Choice with Public Number
                  Visibility on WeddingVia Matrimony.
                </h4>
                <p>
                  The online matchmaking journey unfolds through connection, but
                  sharing personal information can feel like a leap of faith...
                </p>
              </div>
            </div>
          </Link>

          <Link to="/new-releases-blogList-details3">
            <div className="row mb-4 align-items-center">
              <div className="col-md-4 text-center">
                <img
                  src={Enabled}
                  alt={'Enabled complete Biodata downloads with all profiles'}
                  className="img-fluid w-75"
                />
              </div>
              <div className="col-md-8">
                <h4>
                  Dive Deeper into Compatibility Matchmaking by Interests and
                  Likes on WeddingVia Matrimony.
                </h4>
                <p>
                  Whether you're a bookworm, a foodie, or a fitness enthusiast,
                  find compatible matches who share your zest for life. Love
                  often blossoms from shared...
                </p>
              </div>
            </div>
          </Link>

          <Link to="/new-releases-blogList-details4">
            <div className="row mb-4 align-items-center">
              <div className="col-md-4 text-center">
                <img
                  src={Enabled}
                  alt={
                    'Initiate Connections on Your Terms with Chat Approval on WeddingVia Matrimony'
                  }
                  className="img-fluid w-75"
                />
              </div>
              <div className="col-md-8">
                <h4>Enabled complete Biodata downloads with all profiles.</h4>
                <p>
                  Imagine finding your soulmate online, not just through a
                  picture and a few basic details, but by unlocking a deeper
                  understanding of their values, aspirations, and life goals...
                </p>
              </div>
            </div>
          </Link>

          <Link to="/new-releases-blogList-details5">
            <div className="row mb-4 align-items-center">
              <div className="col-md-4 text-center">
                <img
                  src={Initiate}
                  alt={'Introducing Magic Links Share the Love'}
                  className="img-fluid w-75"
                />
              </div>
              <div className="col-md-8">
                <h4>
                  Initiate Connections on Your Terms with Chat Approval on
                  WeddingVia Matrimony.
                </h4>
                <p>
                  The online matchmaking landscape thrives on connections, but
                  not all connections are created equal. At WeddingVia
                  Matrimony...
                </p>
              </div>
            </div>
          </Link>

          <Link to="/new-releases-blogList-details6">
            <div className="row mb-4 align-items-center">
              <div className="col-md-4 text-center">
                <img
                  src={Introducing}
                  alt={
                    'We are updated with 4 new features to ensure your data security'
                  }
                  className="img-fluid w-50"
                />
              </div>
              <div className="col-md-8">
                <h4>Hello Papa, use Magic Links!</h4>
                <p>
                  Eliminating password hassles and forgotten logins, offering a
                  secure and convenient way for parents and loved ones to join
                  WeddingVia Matrimony....
                </p>
              </div>
            </div>
          </Link>

          <Link to="/new-releases-blogList-details7">
            <div className="row mb-4 align-items-center">
              <div className="col-md-4 text-center">
                <img
                  src={security}
                  alt={
                    'We are updated with 4 new features to ensure your data security'
                  }
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <h4>
                  Privacy Prevails: We are updated with 4 new features to ensure
                  your data security.
                </h4>
                <p>
                  In today's digital age, privacy concerns are at the forefront
                  of many users' minds, especially when it comes to online
                  matchmaking platforms. We have introduced...
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <div className="tags">
            <ul>
              <li>
                <Link to={'/new-releases-blogList-details1'}>
                  Indian Matrimony
                </Link>
              </li>
              <li>
                <Link to={'/new-releases-blogList-details2'}>
                  Indian Matrimonial Site
                </Link>
              </li>
              <li>
                <Link to={'/new-releases-blogList-details3'}>
                  Indian Wedding Portal
                </Link>
              </li>
              <li>
                <Link to={'/new-releases-blogList-details4'}>
                  Matrimonial Services India
                </Link>
              </li>
              <li>
                <Link to={'/new-releases-blogList-details5'}>
                  Indian Matchmaking
                </Link>
              </li>
              <li>
                <Link to={'/new-releases-blogList-details6'}>
                  Indian Bride Search
                </Link>
              </li>
              <li>
                <Link to={'/new-releases-blogList-details7'}>
                  Indian Groom Search
                </Link>
              </li>
              <li>
                <Link to={'/new-releases-blogList-details7'}>
                  Free matrimony{' '}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="blog"></div>
    </div>
  )
}

export default NewReleasesBlogList
