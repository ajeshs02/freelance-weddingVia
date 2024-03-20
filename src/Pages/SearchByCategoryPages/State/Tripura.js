import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.png'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Tripura = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Tripura state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Tripura'}
        subtitle={
          "Find your perfect match within Tripura's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within Tripura communities? WeddingVia Matrimony
presents profiles from major Tripura communities such as Tripuri (Tipra), Bengali, Manipuri, Reang,
Chakma, Jamatia, Halam, Garo, Hajong, Muslim, Hindu, Buddhist, and more.`}
      />
    </div>
  )
}

export default Tripura
