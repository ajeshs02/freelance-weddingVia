import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.webp'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Chhattisgarh = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Chhattisgarh state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Chhattisgarh'}
        subtitle={
          "Find your perfect match within Chhattisgarh's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within Chhattisgarh communities? WeddingVia
Matrimony presents profiles from major Chhattisgarh communities such as Satnami, Rajput, Yadav,
Sahu, Brahmin, Kurmi, Gond, Teli, OBC, Muslim, and more.`}
      />
    </div>
  )
}

export default Chhattisgarh
