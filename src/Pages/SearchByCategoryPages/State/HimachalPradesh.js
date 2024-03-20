import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.png'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const HimachalPradesh = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Himachal Pradesh state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Himachal Pradesh'}
        subtitle={
          "Find your perfect match within Himachal Pradesh's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within Himachal Pradesh communities? WeddingVia
Matrimony presents profiles from major Himachal Pradesh communities such as Brahmin, Rajput,
Thakur, Chamar, Scheduled Tribes, Gaddi, Gujjar, Koli, Bhutti, Muslim, and more.`}
      />
    </div>
  )
}

export default HimachalPradesh
