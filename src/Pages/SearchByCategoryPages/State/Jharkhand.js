import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.png'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Jharkhand = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Jharkhand state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Jharkhand'}
        subtitle={
          "Find your perfect match within Jharkhand's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within Jharkhand communities? WeddingVia Matrimony
presents profiles from major Jharkhand communities such as Kurmi, Teli, Brahmin, Rajput, Munda,
Santhal, Oraon, Ho, Muslim, Christian, Scheduled Tribes, Scheduled Castes, and more.`}
      />
    </div>
  )
}

export default Jharkhand
