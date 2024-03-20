import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.webp'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Lakshadweep = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Lakshadweep state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Lakshadweep'}
        subtitle={
          "Find your perfect match within Lakshadweep's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Looking for matrimony in Lakshadweep communities? WeddingVia Matrimony offers profiles
from major Lakshadweep communities like Ayyar, Malikkan, and Koya.`}
      />
    </div>
  )
}

export default Lakshadweep
