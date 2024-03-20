import React from 'react'
import '../../Blog.scss'
import { Link } from 'react-router-dom'
import Dial from '../../../../images/Blog/Dial into Trust Your Number, Your Choice with Public Number Visibility on WeddingVia Matrimon.png'
import { Helmet } from 'react-helmet'
import Feature from '../../../../components/HomeBanner/Feature'
import Download from '../../../../components/AppDownkoad/Download'

const NewReleasesBlogDetails2 = () => {
  return (
    <div className="blog-details-wrapper main-padding">
      <Helmet>
        <title>
          Dial into Trust Your Number, Your Choice with Public Number Visibility
          on WeddingVia Matrimony.
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
            src={Dial}
            alt="Icebreaker Bonanza Sparking"
            className="img-fluid w-50"
          />
        </div>
        <h1>
          Dial into Trust Your Number, Your Choice with Public Number Visibility
          on WeddingVia Matrimony.
        </h1>
        <p>
          The online matchmaking journey unfolds through connection, but sharing
          personal information can feel like a leap of faith. At WeddingVia
          Matrimony, we understand your desire for privacy and control over your
          phone number. Introducing our innovative Public Number Visibility
          feature, empowering you to decide when and how your number appears on
          your profile, fostering a safer and more comfortable matchmaking
          experience.
        </p>

        <p>
          <strong>Hide your phone number completely:</strong> Keep your contact
          information private by default, ensuring control over your online
          presence.
        </p>
        <p>
          <strong>Go public at your own pace:</strong> Activate public
          visibility whenever you're comfortable, fostering trust and
          transparency at your own speed.
        </p>
        <p>
          <strong>Initiate connections freely:</strong> Engage in chats and
          messages without revealing your number initially, focusing on shared
          values and personality.
        </p>
        <p>
          <strong>Create a secure space for early interactions:</strong>{' '}
          Minimize unwanted calls and prioritize safe communication channels
          while building rapport.
        </p>
        <p>
          <strong>Maintain privacy while expressing interest:</strong> Engage
          with chat and messaging features, showcasing your interest without
          compromising privacy.
        </p>

        <p>
          Embrace the power of Public Number Visibility on WeddingVia Matrimony.
          Build deeper connections through meaningful interactions, and feel
          empowered to share your phone number at your own pace. Remember, this
          is just the beginning. Use the feature wisely, share your positive
          experiences, and advocate for a safe and respectful online matchmaking
          environment.
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

export default NewReleasesBlogDetails2
