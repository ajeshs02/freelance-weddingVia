import React, { useEffect } from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.webp'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'
import Modal from '../../../components/modal/Modal'

const Bihar = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Bihar state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Bihar'}
        subtitle={
          "Find your perfect match within Bihar's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial prospects within Bihar communities? WeddingVia Matrimony
offers profiles from major Bihar communities such as Bhumihar, Rajput, Yadav, Brahmin, Kayastha,
Kurmi, Muslim, Maithil, Baniya, Teli, and more.`}
      />
    </div>
  )
}

export default Bihar
