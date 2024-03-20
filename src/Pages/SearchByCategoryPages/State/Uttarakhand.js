import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.webp'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Uttarakhand = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Uttarakhand state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Uttarakhand'}
        subtitle={
          "Find your perfect match within Uttarakhand's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within Uttarakhand communities? WeddingVia
Matrimony presents profiles from major Uttarakhand communities such as Garhwali, Kumaoni,
Brahmin, Rajput, Thakur, Bhotiya, Scheduled Castes (SC), Scheduled Tribes (ST), Muslim, Christian,
and more.`}
      />
    </div>
  )
}

export default Uttarakhand
