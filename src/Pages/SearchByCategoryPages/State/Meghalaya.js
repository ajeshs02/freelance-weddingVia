import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.png'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const AndhraPradesh = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Meghalaya state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Meghalaya'}
        subtitle={
          "Find your perfect match within Meghalaya's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within Meghalaya communities? WeddingVia Matrimony
presents profiles from major Meghalaya communities such as Khasi, Garo, Jaintia, Bhoi, Hajong,
Koch, Rabha, Assamese, Bengali, Nepali, Christian, Hindu, Muslim, and more.`}
      />
    </div>
  )
}

export default AndhraPradesh
