import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.png'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const ArunachalPradesh = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Arunachal Pradesh state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Arunachal Pradesh'}
        subtitle={
          "Find your perfect match within Arunachal Pradesh's vibrant communities with WeddingVia Matrimony!"
        }
        content={
          'Looking for matrimony in Arunachal Pradesh community? WeddingVia Matrimony offers profiles from all castes, sub-casts, major professions such as managers, IT professional, doctors, lawyers, administrative professionals etc. Including NRI profiles from major locations such as United States, United Arab Emirates, United Kingdom, Australia, Canada, Singapore, Saudi Arabia etc.'
        }
      />
    </div>
  )
}

export default ArunachalPradesh
