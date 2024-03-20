import React, { useEffect, useState } from 'react'
import banner from '../../../images/poster.webp'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'
import Modal from '../../../components/modal/Modal'

const AndhraPradesh = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Andhra Pradesh state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Andhra Pradesh'}
        subtitle={
          "Find your perfect match within Andhra Pradesh's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within Andhra Pradesh communities? WeddingVia
Matrimony presents profiles from major Andhra Pradesh communities such as Kamma, Reddy, Kapu,
Brahmin, Velama, Munnuru Kapu, Muslim, Christian, Scheduled Castes, Scheduled Tribes, and more.`}
      />
    </div>
  )
}

export default AndhraPradesh
