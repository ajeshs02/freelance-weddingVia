import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.webp'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const UttarPradesh = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Uttar Pradesh state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Uttar Pradesh'}
        subtitle={
          "Find your perfect match within Uttar Pradesh's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within Uttar Pradesh communities? WeddingVia
Matrimony presents profiles from major Uttar Pradesh communities such as Brahmin, Rajput, Yadav,
Jat, Kayastha, Bania, Vaishya, Scheduled Castes (SC), Scheduled Tribes (ST), Muslim, Christian, and
more.`}
      />
    </div>
  )
}

export default UttarPradesh
