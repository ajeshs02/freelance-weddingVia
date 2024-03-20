import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.png'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Manipur = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Manipur state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Manipur'}
        subtitle={
          "Find your perfect match within Manipur's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within Manipur communities? WeddingVia Matrimony
presents profiles from major Manipur communities such as Meitei, Naga, Kuki, Pangal (Manipuri
Muslim), Tangkhul, Thadou, Kom, Kabui, Hmar, Paite, Christian, Hindu, Muslim, and more.`}
      />
    </div>
  )
}

export default Manipur
