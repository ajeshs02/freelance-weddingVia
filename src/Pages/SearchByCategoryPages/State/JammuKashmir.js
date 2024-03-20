import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.webp'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const JammuKashmir = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Jammu&Kashmir state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Jammu & Kashmir'}
        subtitle={
          "Find your perfect match within Jammu & Kashmir's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Looking for matrimony in Jammu and Kashmir communities? WeddingVia Matrimony offers
profiles from major Jammu and Kashmir communities like Kashmiri Pandit, Sheikh, Mughal, Jatt,
Rajput, Brahmin, and Bakerwal.`}
      />
    </div>
  )
}

export default JammuKashmir
