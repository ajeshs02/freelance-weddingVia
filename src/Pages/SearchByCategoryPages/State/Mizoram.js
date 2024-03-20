import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.webp'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Mizoram = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Mizoram state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Mizoram'}
        subtitle={
          "Find your perfect match within Mizoram's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within Mizoram communities? WeddingVia Matrimony
presents profiles from major Mizoram communities such as Mizo, Lushai, Hmar, Mara, Ralte, Pawi,
Paites, Reang, Chakma, Bru, Christian, Hindu, Buddhist, and more.`}
      />
    </div>
  )
}

export default Mizoram
