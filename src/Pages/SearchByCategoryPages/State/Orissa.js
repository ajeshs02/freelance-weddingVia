import React from 'react'
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails'
import banner from '../../../images/poster.png'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Orissa = () => {
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
        title={'Orissa'}
        subtitle={
          "Find your perfect match within Orissa's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within Odisha communities? WeddingVia Matrimony
presents profiles from major Odisha communities such as Khandayat, Brahmin, Kshatriya, Gouda,
Karan, Teli, Scheduled Castes (SC), Scheduled Tribes (ST), Muslim, Christian, OBC, and more.`}
      />
    </div>
  )
}

export default Orissa
