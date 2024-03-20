import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.png'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const MadhyaPradesh = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Madhya Pradesh state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Madhya Pradesh'}
        subtitle={
          "Find your perfect match within Madhya Pradesh's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within Madhya Pradesh communities? WeddingVia
Matrimony presents profiles from major Madhya Pradesh communities such as Brahmin, Rajput,
Yadav, Thakur, Kayastha, Kshatriya, Bhil, Gond, Muslim, Sindhi, Marathi, and more.`}
      />
    </div>
  )
}

export default MadhyaPradesh
