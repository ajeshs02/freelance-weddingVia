import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.png'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Nagaland = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Nagaland state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Nagaland'}
        subtitle={
          "Find your perfect match within Nagaland's vibrant communities with WeddingVia Matrimony!"
        }
        content={`
        Are you searching for matrimonial alliances within Nagaland communities? WeddingVia Matrimony
presents profiles from major Nagaland communities such as Angami, Ao, Sema, Lotha, Konyak,
Chakhesang, Chang, Phom, Rengma, Zeliang, Sumi, Christian, Hindu, Naga tribes, and more.`}
      />
    </div>
  )
}

export default Nagaland
