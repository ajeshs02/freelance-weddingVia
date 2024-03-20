import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.webp'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Rajasthan = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Rajasthan state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Rajasthan'}
        subtitle={
          "Find your perfect match within Rajasthan's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within Rajasthan communities? WeddingVia Matrimony
presents profiles from major Rajasthan communities such as Rajput, Brahmin, Jat, Meena, Gurjar,
Sindhi, Marwari, Jain, Scheduled Castes (SC), Scheduled Tribes (ST), Muslim, and more.`}
      />
    </div>
  )
}

export default Rajasthan
