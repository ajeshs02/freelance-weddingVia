import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.png'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Gujarat = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Gujarat state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Gujarat'}
        subtitle={
          "Find your perfect match within Gujarat's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you in search of matrimonial alliances within Gujarat communities? WeddingVia Matrimony
offers profiles from major Gujarat communities such as Patel, Brahmin, Jain, Rajput, Vaishnav,
Kshatriya, Lohana, Leva Patel, Kadva Patel, Muslim, Sindhi, and more.`}
      />
    </div>
  )
}

export default Gujarat
