import React from 'react'
import './Blog.scss'
import BlogHeader from './BlogHeader'

const BlogDetails = () => {
  return (
    <div className="blog-details-wrapper main-padding section">
      <BlogHeader />

      <div className="blog-details">
        <div className="text-center">
          <img
            src="https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-news-image-2.jpg"
            className="img-fluid"
          />
        </div>
        <h1>Want a Career in Technology? Make This Your Secret Weapon</h1>

        <h3>Cursus iaculis etiam in</h3>
        <p>
          In nullam donec sem sed consequat scelerisque nibh amet, massa egestas
          risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit,
          commodo enim aliquet.
        </p>
        <p>
          Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean
          praesent sit habitant laoreet felis lorem nibh diam faucibus viverra
          penatibus donec etiam sem consectetur vestibulum purus non arcu
          suspendisse ac nibh tortor, eget elementum lacus, libero sem viverra
          elementum.
        </p>
        <p>
          Nulla pharetra, massa feugiat nisi, tristique nisi, adipiscing
          dignissim sit magna nibh purus erat nulla enim id consequat faucibus
          luctus volutpat senectus montes.
        </p>
        <p>
          Sollicitudin bibendum nam turpis non cursus eget euismod egestas sem
          nunc amet, tellus at duis suspendisse commodo lectus accumsan id
          cursus facilisis nunc eget elementum non ut elementum et facilisi dui
          ac viverra sollicitudin lobortis luctus sociis sed massa accumsan amet
          sed massa lectus id dictum morbi ullamcorper.
        </p>
      </div>
    </div>
  )
}

export default BlogDetails
