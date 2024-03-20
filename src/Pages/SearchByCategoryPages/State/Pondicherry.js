import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.webp'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Pondicherry = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Pondicherry state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Pondicherry'}
        subtitle={
          "Find your perfect match within Pondicherry's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Looking for matrimony in Pondicherry communities? WeddingVia Matrimony offers profiles from
major Pondicherry communities like Gounder, Vanniaar, Mudaliar, Brahmin, Chettiar, Muslim,
and Christian.
`}
      />
    </div>
  )
}

export default Pondicherry
