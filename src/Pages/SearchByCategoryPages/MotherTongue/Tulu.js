import React from 'react';
import CategoryDetails from '../../../components/SearchByCategory/CategoryDetails';
import banner from '../../../images/poster.png';
import { Helmet } from 'react-helmet';

const Tulu = () => {
    return (
        <div>
             <Helmet>
                <meta name="description" content="Find Your Perfect Tulu Bride/Groom Matrimony Profile On Weddingvia.Com. Join Today and Start Your Partner Search on India’s Free Matrimony Portal." data-react-helmet="true"/>
             </Helmet>
            <CategoryDetails 
                bannerImage = {banner} 
                title={"WeddingVia Matrimony For Tulu Community"} 
                subtitle={"Join and find your partner from Tulu Community"} 
                content={"Search and connect with your ideal partner from our verified matrimonial profiles. Matrimony for Tulu community consists of active profiles from all castes, sub-castes, major professions such as managers, IT professional, doctors, lawyers, administrative professionals etc. Including NRI profiles from major locations such as United States, United Arab Emirates, United Kingdom, Australia, Canada, Singapore, Saudi Arabia etc."} 
            />
        </div>
    )
}

export default Tulu;