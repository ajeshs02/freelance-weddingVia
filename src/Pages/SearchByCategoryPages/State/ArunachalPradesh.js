import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.png'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const ArunachalPradesh = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Arunachal Pradesh state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Arunachal Pradesh'}
        subtitle={
          "Find your perfect match within Arunachal Pradesh's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you in search of matrimonial prospects within Arunachal Pradesh communities? WeddingVia
Matrimony offers profiles from major Arunachal Pradesh communities such as Nyishi, Adi, Galo,
Apatani, Tagin, Monpa, Mishmi, Nishi, Tangsa, Nocte, Wancho, Singpho, Christian, Buddhist, Hindu,
and more.`}
      />
    </div>
  )
}

export default ArunachalPradesh
