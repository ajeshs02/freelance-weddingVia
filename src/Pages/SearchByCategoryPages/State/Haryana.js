import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.webp'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Haryana = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Haryana state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Haryana'}
        subtitle={
          "Find your perfect match within Haryana's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within Haryana communities? WeddingVia Matrimony
presents profiles from major Haryana communities such as Jat, Brahmin, Punjabi, Khatri, Yadav,
Rajput, Agarwal, Arora, Baniya, Saini, Muslim, and more.`}
      />
    </div>
  )
}

export default Haryana
