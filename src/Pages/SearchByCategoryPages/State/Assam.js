import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.webp'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Assam = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Assam state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Assam'}
        subtitle={
          "Find your perfect match within Assam's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within Assam communities? WeddingVia Matrimony
presents profiles from major Assam communities such as Assamese, Bengali, Bodo, Karbi, Ahom,
Tiwa, Koch Rajbongshi, Mising, Dimasa, Rabha, Muslim, Hindu, Christian, and more.`}
      />
    </div>
  )
}

export default Assam
