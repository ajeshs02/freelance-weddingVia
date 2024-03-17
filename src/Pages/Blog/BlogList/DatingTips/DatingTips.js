import React from 'react'
import { Link } from 'react-router-dom'
import '../../Blog.scss'
import BlogHeader from '../../BlogHeader'
import IcebreakerBonanzaSparking from '../../../../images/Blog/Icebreaker Bonanza Sparking.png'
import NavigatingOverly from '../../../../images/Blog/Navigating Overly Forward Profiles on Dating Apps.png'
import SharingSavvy from '../../../../images/Blog/Sharing Savvy Navigating.png'
import { Helmet } from 'react-helmet'

const DatingTips = () => {
  return (
    <div className="blog main-padding">
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
      <BlogHeader />
      <div className="row">
        <div className="col-md-8">
          <Link to="/BlogDetail1">
            <div className="row mb-4">
              <div className="col-md-4">
                <img
                  src={IcebreakerBonanzaSparking}
                  alt={'Icebreaker Bonanza Sparking'}
                  className="img-fluid"
                  style={{ borderRadius: '10px' }}
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

          <Link to="/BlogDetail2">
            <div className="row mb-4">
              <div className="col-md-4">
                <img
                  src={NavigatingOverly}
                  alt="Navigating Overly Forward Profiles on Dating Apps"
                  className="img-fluid"
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="col-md-8">
                <h4>Navigating Pushy Profiles on Matrimony.</h4>
                <p>
                  Finding love online is about compatibility, but sometimes you
                  encounter profiles that push boundaries instead of sparking
                  connections...
                </p>
                <span>June 28, 2021</span>
              </div>
            </div>
          </Link>

          <Link to="/BlogDetail3">
            <div className="row mb-4">
              <div className="col-md-4">
                <img
                  src={SharingSavvy}
                  alt="Sharing Savvy Navigating Information on Your First Date"
                  className="img-fluid"
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="col-md-8">
                <h4>
                  Want a Career in Technology? Make This Your Secret Weapon
                </h4>
                <p>
                  Want a Career in Technology? Make This Your Secret Weapon Want
                  a Career in Technology? Make This Your Secret Weapon Want a
                  Career in Technology? Make This Your Secret Weapon
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
                <Link to="/BlogDetail1">Dating for Indians </Link>
              </li>
              <li>
                <Link to="/BlogDetail2">Dating Mistakes to Avoid</Link>
              </li>
              <li>
                <Link to="/BlogDetail3">Dating Profile Tips</Link>
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