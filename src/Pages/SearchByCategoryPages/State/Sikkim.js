import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.webp'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Sikkim = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Sikkim state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Sikkim'}
        subtitle={
          "Find your perfect match within Sikkim's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within Sikkim communities? WeddingVia Matrimony
presents profiles from major Sikkim communities such as Bhutia, Lepcha, Nepali, Limbu, Sherpa, Rai,
Tamang, Gurung, Mangar, Newar, Christian, Buddhist, Hindu, and more.`}
      />
    </div>
  )
}

export default Sikkim
