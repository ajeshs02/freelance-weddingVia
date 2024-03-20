import React from 'react'
import { Link } from 'react-router-dom'
import '../../Blog.scss'
import BlogHeader from '../../BlogHeader'
import Picture1 from '../../../../images/Blog/Picture1.png'
import Picture2 from '../../../../images/Blog/Picture2.png'
import { Helmet } from 'react-helmet'

const WellnessBlogList = () => {
  return (
    <div className="blog main-padding">
      <BlogHeader />
      <Helmet>
        <title>
          Safe & Successful Online Dating: Tips & Resources from WeddingVia
        </title>
        <meta
          name="description"
          content="Blogs by Weddingvia, India's most trusted matrimony app, connects you with compatible
matches. Enjoy free chat, verified profiles, free biodata and horoscope downloads,
matrimony profiles from all India communities"
          data-react-helmet="true"
        />
      </Helmet>
      <h5>No Blogs Available</h5>
    </div>
  )
}

export default WellnessBlogList
