import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.webp'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Punjab = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Punjab state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Punjab'}
        subtitle={
          "Find your perfect match within Punjab's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within Punjab communities? WeddingVia Matrimony
presents profiles from major Punjab communities such as Jat, Sikh, Brahmin, Ramgarhia, Arora,
Khatri, Rajput, Scheduled Castes (SC), Scheduled Tribes (ST), Muslim, Christian, and more.`}
      />
    </div>
  )
}

export default Punjab
