import React, { useEffect, useState } from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails.js'
import banner from '../../../images/poster.png'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { communityData } from '../../../constants/communityData.js'

const Communities = () => {
  const { community } = useParams()

  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content={communityData[community].metaData}
          data-react-helmet="true"
        />
      </Helmet>
      <CategoryDetails
        bannerImage={banner}
        title={communityData[community]?.title}
        subtitle={communityData[community]?.descriptionLine1}
        content={communityData[community]?.descriptionLine2}
        details={communityData[community]?.descriptionLine3}
      />
    </div>
  )
}

export default Communities
