import React from 'react'
import '../../Blog.scss'
import { Link } from 'react-router-dom'
import security from '../../../../images/Blog/We are updated with 4 new features to ensure your data security.png'
import { Helmet } from 'react-helmet'

const NewReleasesBlogDetails7 = () => {
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
        <div className="text-center">
          <img
            src={security}
            alt="We are updated with 4 new features to ensure your data security"
            className="img-fluid w-50"
          />
        </div>
        <h1>
          Privacy Prevails: We are updated with 4 new features to ensure your
          data security.{' '}
        </h1>
        <p>
          In today's digital age, privacy concerns are at the forefront of many
          users' minds, especially when it comes to online matchmaking
          platforms. We have introduced a range of innovative features designed
          to prioritize privacy without compromising on the effectiveness of our
          matchmaking process safeguarding our users' personal information while
          providing them with a seamless and secure matchmaking experience.
        </p>

        <p>
          <strong>1.Hide Number by Default:</strong> With this feature, users
          can rest assured that their contact information remains private until
          they express interest in a particular profile. This not only prevents
          unsolicited communication but also gives users full control over who
          can access their contact details.
        </p>

        <p>
          <strong>2.Hide Photos:</strong> We understand that some users may be
          cautious about sharing their photos with everyone on the platform.
          With our "Hide Photos" feature, users can choose to keep their photos
          private and only reveal them to profiles they are genuinely interested
          in.
        </p>

        <p>
          <strong>3.Secure Chats:</strong> Communication is key in the
          matchmaking process, but it should also be secure. Our platform
          ensures that users' chats are encrypted and protected from
          unauthorized access. Personalized chats can only be initiated with the
          mutual consent of both parties, adding an extra layer of security to
          the conversation.
        </p>

        <p>
          <strong>4.Hide Name:</strong> You can choose how your name is
          displayed on the platform. You can either show your full name or just
          your first name for added privacy. Currently, your first name is
          displayed by default for your protection.
        </p>
        <p>Join us today and experience the difference for yourself!</p>
      </div>
    </div>
  )
}

export default NewReleasesBlogDetails7
