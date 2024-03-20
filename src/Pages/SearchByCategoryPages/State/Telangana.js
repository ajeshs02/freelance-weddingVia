import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.png'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Telangana = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Telangana state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Telangana'}
        subtitle={
          "Find your perfect match within Telangana's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you in search of matrimonial prospects within Telangana communities? WeddingVia Matrimony
offers profiles from major Telangana communities such as Reddy, Kamma, Velama, Padmashali,
Munnuru Kapu, Brahmin, Muslim, Christian, Scheduled Castes, Scheduled Tribes, and more.`}
      />
    </div>
  )
}

export default Telangana
