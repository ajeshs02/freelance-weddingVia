import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Feature from '../Feature/Feature'
import AppDownload from '../AppDownkoad/AppDownload'
import SearchByCategory from './SearchByCategory'
import ios from '../../images/Apple.png'
import android from '../../images/Android.png'
import CommonHomeBanner from '../CommonHomeBanner.js/CommonHomeBanner'

const CategoryDetails = (props) => {
  const { bannerImage, title, subtitle, content, details } = props

  const startIndex = title.indexOf('For') + 4 // Start index after "For"
  const endIndex = title.indexOf('Community') // End index before "Community"
  const extractedTerm = title.slice(startIndex, endIndex).trim()

  return (
    <div>
      <CommonHomeBanner title={extractedTerm} type={'Community'} />
      <div className="new-categoryDetails-wrapper">
        <div className="row g-0 align-items-center">
          <div className="col-md-6">
            <img src={bannerImage} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="categoryDetails-block">
              <h1>{title}</h1>
              <h6>{subtitle}</h6>
              <p>{content}</p>
              {details && <p>{details}</p>}

              <h5>
                Find your perfect match with WeddingVia Matrimony.
                <br /> Download now and start your happily ever after!
              </h5>

              <div className="downlaod">
                <div className="d-flex align-items-center">
                  <Link
                    to="https://apps.apple.com/us/app/weddingvia-matrimony/id1518963636"
                    target={'_blank'}
                  >
                    {' '}
                    <img src={ios} className="img-fluid app-icon me-3" />
                  </Link>
                  <Link
                    to="https://play.google.com/store/apps/details?id=com.weddingvia&pli=1"
                    target={'_blank'}
                  >
                    {' '}
                    <img src={android} className="img-fluid app-icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Feature />
      <AppDownload />
      <SearchByCategory />
    </div>
  )
}

export default CategoryDetails
