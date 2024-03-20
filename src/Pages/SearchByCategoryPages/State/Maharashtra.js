import React from 'react'
import banner from '../../../images/poster.png'
import { Helmet } from 'react-helmet'
import StateDetails from '../../../components/SearchByCategory/StateDetails'

const Maharashtra = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Find your perfect Maharashtra state Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal."
          data-react-helmet="true"
        />
      </Helmet>
      <StateDetails
        bannerImage={banner}
        title={'Maharashtra'}
        subtitle={
          "Find your perfect match within Maharashtra's vibrant communities with WeddingVia Matrimony!"
        }
        content={`Are you searching for matrimonial alliances within Maharashtra communities? WeddingVia
Matrimony presents profiles from major Maharashtra communities such as Maratha, Brahmin, CKP
(Chandraseniya Kayastha Prabhu), Vaishya Vani, Kunbi, Mali, Dhangar, Muslim, Buddhist, Jain,
Christian, and more.`}
      />
    </div>
  )
}

export default Maharashtra
