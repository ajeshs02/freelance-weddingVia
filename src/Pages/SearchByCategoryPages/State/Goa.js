import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.webp'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Goa = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Goa state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Goa'}
        subtitle={
          "Find your perfect match within Goa's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you in search of matrimonial alliances within Goa communities? WeddingVia Matrimony offers
profiles from major Goan communities such as Catholic, Hindu, Gaud Saraswat Brahmin (GSB),
Roman Catholic, Goud Saraswat Brahmin (GSB), Maratha, Bhandari, Kunbi, Muslim, and others.`}
      />
    </div>
  )
}

export default Goa
