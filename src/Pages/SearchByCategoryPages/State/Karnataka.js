import React from 'react'
import banner from '../../../images/poster.png'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Karnataka = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Karnataka state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Karnataka'}
        subtitle={
          "Find your perfect match within Karnataka's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Searching for matrimonial prospects in Karnataka communities? WeddingVia Matrimony presents
profiles from major Karnataka communities including Lingayat, Brahmin, Vokkaliga, Kuruba, Nayaka,
Gowda, Billava, Mogaveera, Bunt, Christian, Muslim, Dalit, Scheduled Tribes, and more.`}
      />
    </div>
  )
}

export default Karnataka
