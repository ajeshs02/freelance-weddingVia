import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.png'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Ladakh = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Jammu&Kashmir state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Ladakh'}
        subtitle={
          "Find your perfect match within Ladakh's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Looking for matrimony in Ladakhi communities? WeddingVia Matrimony offers profiles from
major Ladakhi communities like Bodh, Monpa, Changpa, and Drokpa.`}
      />
    </div>
  )
}

export default Ladakh
