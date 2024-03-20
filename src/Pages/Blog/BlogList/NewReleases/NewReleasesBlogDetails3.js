import React from 'react'
import '../../Blog.scss'
import { Link } from 'react-router-dom'
import Enabled from '../../../../images/Blog/Enabled complete Biodata downloads with all profiles.webp'
import { Helmet } from 'react-helmet'
import Feature from '../../../../components/HomeBanner/Feature'
import Download from '../../../../components/AppDownkoad/Download'

const NewReleasesBlogDetails3 = () => {
  return (
    <div className="blog-details-wrapper main-padding">
      <Helmet>
        <title>
          Dive Deeper into Compatibility Matchmaking by Interests and Likes on
          WeddingVia Matrimony
        </title>
        <meta
          name="description"
          content="Blogs by Weddingvia, India's most trusted matrimony app, connects you with compatible
matches. Enjoy free chat, verified profiles, free biodata and horoscope downloads,
matrimony profiles from all India communities"
          data-react-helmet="true"
        />
      </Helmet>
      <div className="blog-back">
        <Link to="/new-releases-blogList">Back</Link>
      </div>

      <div className="blog-details">
        <div className="text-center">
          <img
            src={Enabled}
            alt="Icebreaker Bonanza Sparking"
            className="img-fluid w-50"
          />
        </div>
        <h1>
          Dive Deeper into Compatibility Matchmaking by Interests and Likes on
          WeddingVia Matrimony
        </h1>
        <p>
          Whether you're a bookworm, a foodie, or a fitness enthusiast, find
          compatible matches who share your zest for life. Love often blossoms
          from shared experiences and passions. At WeddingVia Matrimony, we
          believe your journey to meaningful connections deserves more than just
          basic profiles. Introducing our innovative Interests & Likes-Based
          Matching, powered by intelligent algorithms that unlock compatibility
          beyond physical attraction.
        </p>

        <h5>Unveiling Shared Passions, Sparks Fly:</h5>
        <p>
          <strong>Dive into their profile:</strong> Mention something specific
          that caught your eye in their bio, pictures, or interests. "Your love
          for rock climbing is impressive! What's your favourite climbing spot?"
        </p>
        <p>
          <strong>Tell us your story:</strong> Share your interests and likes
          during registration, creating a rich profile that attracts compatible
          matches.
        </p>
        <p>
          <strong>Go beyond the basics:</strong> Discover profiles that align
          with your hobbies, interests, and life aspirations, fostering deeper
          connections.
        </p>
        <p>
          <strong>Spark meaningful conversations:</strong> Initiate discussions
          based on shared passions, breaking the ice and building deeper
          understanding.
        </p>
        <p>
          <strong>Find your tribe:</strong> Connect with individuals who share
          your lo-ve for adventure, creativity, or intellectual pursuits.
        </p>

        <h5>Intelligent Algorithms, Personalized Matches</h5>
        <p>
          Our smart technology learns your preferences and avoids generic
          suggestions, say goodbye to random profiles – discover individuals who
          truly resonate with your unique passions.
        </p>
        <p>
          Experience the magic of shared passions: Let your hobbies and
          interests guide your journey, leading you to connections that spark
          genuine excitement.
        </p>
        <p>
          Embrace the power of Interests & Likes-Based Matching on WeddingVia
          Matrimony.{' '}
        </p>
        <p>
          Tell your story, explore diverse interests, and discover profiles that
          resonate with your unique personality. Remember, this is just the
          beginning. Update your profile with your passions, explore
          recommendations, and embark on a journey of meaningful connections
          guided by shared interests and aspirations.
        </p>
      </div>
      <div className="new-release-bottom ">
        <div className="text-box">
          <h2>Hello There!</h2>
          <p>
            Our product development team is eager to hear your thoughts and
            ideas for enhancing our app. <br /> Your feedback is invaluable in
            shaping the best matchmaking experience.
            <br /> Share your suggestions with us at
            tech-primary@wedding.via.com <br />
            Lets make matchmaking even better together!
          </p>
        </div>
        {/* features bottom */}
        <Feature />
        <Download />
      </div>
    </div>
  )
}

export default NewReleasesBlogDetails3
