import React from 'react'
import '../../Blog.scss'
import { Link } from 'react-router-dom'
import Introducing from '../../../../images/Blog/Introducing Magic Links Share the Love.png'
import { Helmet } from 'react-helmet'

const NewReleasesBlogDetails6 = () => {
  return (
    <div className="blog-details-wrapper main-padding">
      <Helmet>
        <title>
          Safe & Successful Online Dating: Tips & Resources from WeddingVia
        </title>
        <meta
          name="description"
          content="Discover expert safety tips, product updates, and matchmaking insights to navigate your online dating journey with confidence on WeddingVia"
          data-react-helmet="true"
        />
      </Helmet>
      <div className="blog-back">
        <Link to="/new-releases-blogList">Back</Link>
      </div>

      <div className="blog-details">
        <h1>Hello Papa, use Magic Links!</h1>
        <strong>Indian matchmaking is a group effort, we get it!</strong>
        <p>
          Helping your loved ones embark on their matchmaking journey with just
          a tap.
        </p>
        <p>
          Eliminating password hassles and forgotten logins, offering a secure
          and convenient way for parents and loved ones to join WeddingVia
          Matrimony.
        </p>
        <p>
          Introducing Magic Links, a revolutionary feature that simplifies
          access and empowers you to share the love like never before in
          matrimony matchmaking!
        </p>

        <h5>What are Magic Links?</h5>
        <div className="text-center">
          <img
            src={Introducing}
            alt="Introducing Magic Links Share the Love"
            className="img-fluid w-50"
          />
        </div>
        <p>
          Magic Links are unique, secure one-time access codes generated within
          the WeddingVia Matrimony app. Share them with your loved ones or
          parents, and they can effortlessly join the platform without needing
          to create a password or remember complex login details.
        </p>

        <h5>How It Works:</h5>
        <p>
          <strong>Step 1: Generate a Magic Link:</strong> Within the app, choose
          "Create Magic Link" and select the relationship (parent, sibling,
          friend, etc.).
        </p>
        <p>
          <strong>Step 2:</strong> Share the Link: Send the link through
          WhatsApp, SMS, or any other messaging platform.
        </p>
        <p>
          Seamless Access: Recipients tap the link, enter their basic
          information, and voila! They're in, exploring profiles and initiating
          connections.
        </p>

        <p>
          Start using Magic Links on WeddingVia Matrimony today! Help your loved
          ones find their happily ever after, simplify the registration process,
          and experience the joy of shared connections.{' '}
        </p>
      </div>
    </div>
  )
}

export default NewReleasesBlogDetails6
