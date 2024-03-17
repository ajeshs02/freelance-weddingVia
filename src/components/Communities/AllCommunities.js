import React, { useState } from 'react'
import './CommunityList.scss'
import {
  communityListByCategories,
} from '../../constants/communityList'
import CommunityList from './CommunityList'

const categoryValues = ['A', 'B', 'C', 'D', 'E', 'G', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'V', 'Y', 'Muslim', 'Christian', 'Sikh', 'Jain', 'Others'];

const AllCommunities = () => {
  const [selectedCategory, setSelectedCategory] = useState('A');
  return (
    <div className='section'>
    <h1 className='category_heading'>Search Categories</h1>
    <div className='category_value_btn_container'>
      {categoryValues.map(value => (
        <div className={`categoryValueBtn ${value === selectedCategory && 'selected'}`} key={value} onClick={() => setSelectedCategory(value)}>{value}</div>
      ))}
    </div>
    <div className="community_container">
      <CommunityList category={selectedCategory} communityList={communityListByCategories[selectedCategory].categories} />
    </div>
    </div>
  )
}
export default AllCommunities
