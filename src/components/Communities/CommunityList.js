import React from 'react'
import { Link } from 'react-router-dom'
import './CommunityList.scss'

const CommunityList = ({ category, communityList }) => {
  return (
    <div className="community_section">
      <h3>Matrimony Categories in "{category}"</h3>
      <div>
        <ul>
          {communityList.map((data) => (
            <li key={data.index}>
              <Link
                className="community_link"
                target="_blank"
                to={`/matrimony-for/${data.community}`}
              >
                {data.community}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default CommunityList
