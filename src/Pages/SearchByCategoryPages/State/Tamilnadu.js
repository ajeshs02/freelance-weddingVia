import React from 'react'
import banner from '../../../images/poster.png'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Tamilnadu = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Tamil Nadu state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Tamil Nadu'}
        subtitle={
          "Find your perfect match within Tamil Nadu's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within Tamil Nadu communities? WeddingVia Matrimony
presents profiles from major Tamil Nadu communities such as Brahmin, Chettiar, Nadar, Mudaliar,
Vanniyar, Thevar, Pillai, Kongu Vellalar, Reddiar, Christian, Muslim, Scheduled Castes, Scheduled
Tribes, and more.`}
      />
    </div>
  )
}

export default Tamilnadu
