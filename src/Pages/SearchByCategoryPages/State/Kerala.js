import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.png'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Kerala = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Jammu&Kashmir state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Kerala'}
        subtitle={
          "Find your perfect match within Kerala's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Looking for matrimony in Kerala communities? WeddingVia Matrimony offers profiles from major
Kerala communities like Nair, Ezhava, Thiyya, Christian, Sunni, Shia Muslim, Dalit, Pulaya, Brahmin,
Menon, Nambiar, Namboothiri, Vishwakarma, Dheevara, Nadar, Pillai, Nambuthiri, Malayan,
Mannan, Kurup, Panicker, Varma, and more.`}
      />
    </div>
  )
}

export default Kerala
