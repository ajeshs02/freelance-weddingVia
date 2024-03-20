import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.png'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const WestBengal = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect West Bengal state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'West Bengal'}
        subtitle={
          "Find your perfect match within West Bengal's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within West Bengal communities? WeddingVia
Matrimony presents profiles from major West Bengal communities such as Bengali, Brahmin,
Kayastha, Baidya, Barendra, Ghoti, Bangal, Rajbongshi, Scheduled Castes (SC), Scheduled Tribes (ST),
Muslim, Christian, and more.`}
      />
    </div>
  )
}

export default WestBengal
