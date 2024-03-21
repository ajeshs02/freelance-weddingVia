import React, { useEffect, useLayoutEffect } from 'react'
import Header from './components/Header/Header'

import Footer from './components/Footer/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Support from './Pages/Support'
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy'
import CookiePolicy from './Pages/CookiePolicy/CookiePolicy'
import UserAgreement from './Pages/UserAgreement/UserAgreement'
import SearchbyCategories from './Pages/SearchbyCategories/SearchbyCategories'
import GetMobileApp from './Pages/GetMobileApp/GetMobileApp'

import DatingTips from './Pages/Blog/BlogList/DatingTips/DatingTips'
import BlogDetail1 from './Pages/Blog/BlogList/DatingTips/BlogDetail1'
import BlogDetail2 from './Pages/Blog/BlogList/DatingTips/BlogDetail2'
import BlogDetail3 from './Pages/Blog/BlogList/DatingTips/BlogDetail3'
import Matchmaking from './Pages/Blog/BlogList/Matchmaking/Matchmaking'
import MatchmakingDetails from './Pages/Blog/BlogList/Matchmaking/BlogDetail1'

import SafeMatrimony from './Pages/Blog/BlogList/Safe Matrimony/SafeMatrimony'
import SafeMatrimonyDetails1 from './Pages/Blog/BlogList/Safe Matrimony/BlogDetail1'
import SafeMatrimonyDetails2 from './Pages/Blog/BlogList/Safe Matrimony/BlogDetail2'

import NewReleasesBlogList from './Pages/Blog/BlogList/NewReleases/NewReleasesBlogList'
import NewReleasesBlogDetails1 from './Pages/Blog/BlogList/NewReleases/NewReleasesBlogDetails1'
import NewReleasesBlogDetails2 from './Pages/Blog/BlogList/NewReleases/NewReleasesBlogDetails2'
import NewReleasesBlogDetails3 from './Pages/Blog/BlogList/NewReleases/NewReleasesBlogDetails3'
import NewReleasesBlogDetails4 from './Pages/Blog/BlogList/NewReleases/NewReleasesBlogDetails4'
import NewReleasesBlogDetails5 from './Pages/Blog/BlogList/NewReleases/NewReleasesBlogDetails5'
import NewReleasesBlogDetails6 from './Pages/Blog/BlogList/NewReleases/NewReleasesBlogDetails6'
import NewReleasesBlogDetails7 from './Pages/Blog/BlogList/NewReleases/NewReleasesBlogDetails7'

import WellnessBlogList from './Pages/Blog/BlogList/Wellness/WellnessBlogList'

import AndhraPradesh from './Pages/SearchByCategoryPages/State/AndhraPradesh'
import ArunachalPradesh from './Pages/SearchByCategoryPages/State/ArunachalPradesh'
import Assam from './Pages/SearchByCategoryPages/State/Assam'
import Bihar from './Pages/SearchByCategoryPages/State/Bihar'
import Chhattisgarh from './Pages/SearchByCategoryPages/State/Chhattisgarh'
import Goa from './Pages/SearchByCategoryPages/State/Goa'
import Gujarat from './Pages/SearchByCategoryPages/State/Gujarat'
import Haryana from './Pages/SearchByCategoryPages/State/Haryana'
import HimachalPradesh from './Pages/SearchByCategoryPages/State/HimachalPradesh'
import JammuKashmir from './Pages/SearchByCategoryPages/State/JammuKashmir'
import Jharkhand from './Pages/SearchByCategoryPages/State/Jharkhand'
import Karnataka from './Pages/SearchByCategoryPages/State/Karnataka'
import Kerala from './Pages/SearchByCategoryPages/State/Kerala'
import Ladakh from './Pages/SearchByCategoryPages/State/Ladakh'
import Lakshadweep from './Pages/SearchByCategoryPages/State/Lakshadweep'
import MadhyaPradesh from './Pages/SearchByCategoryPages/State/MadhyaPradesh'
import Maharashtra from './Pages/SearchByCategoryPages/State/Maharashtra'
import Manipur from './Pages/SearchByCategoryPages/State/Manipur'
import Meghalaya from './Pages/SearchByCategoryPages/State/Meghalaya'
import Mizoram from './Pages/SearchByCategoryPages/State/Mizoram'
import Nagaland from './Pages/SearchByCategoryPages/State/Nagaland'
import Orissa from './Pages/SearchByCategoryPages/State/Orissa'
import Pondicherry from './Pages/SearchByCategoryPages/State/Pondicherry'
import Punjab from './Pages/SearchByCategoryPages/State/Punjab'
import Rajasthan from './Pages/SearchByCategoryPages/State/Rajasthan'
import Sikkim from './Pages/SearchByCategoryPages/State/Sikkim'
import Tamilnadu from './Pages/SearchByCategoryPages/State/Tamilnadu'
import Telangana from './Pages/SearchByCategoryPages/State/Telangana'
import Tripura from './Pages/SearchByCategoryPages/State/Tripura'
import UttarPradesh from './Pages/SearchByCategoryPages/State/UttarPradesh'
import Uttarakhand from './Pages/SearchByCategoryPages/State/Uttarakhand'
import WestBengal from './Pages/SearchByCategoryPages/State/WestBengal'

import Hindu from './Pages/SearchByCategoryPages/Religion/Hindu'
import MuslimShia from './Pages/SearchByCategoryPages/Religion/MuslimShia'
import MuslimSunni from './Pages/SearchByCategoryPages/Religion/Muslimsunni'
import Muslim from './Pages/SearchByCategoryPages/Religion/Muslim'
import Christian from './Pages/SearchByCategoryPages/Religion/Christian'
import Sikh from './Pages/SearchByCategoryPages/Religion/Sikh'
import JainDigambar from './Pages/SearchByCategoryPages/Religion/JainDigambar'
import JainShwetambar from './Pages/SearchByCategoryPages/Religion/JainShwetambar'
import Jain from './Pages/SearchByCategoryPages/Religion/Jain'
import Parsi from './Pages/SearchByCategoryPages/Religion/Parsi'
import Jewish from './Pages/SearchByCategoryPages/Religion/Jewish'
import Buddhist from './Pages/SearchByCategoryPages/Religion/Buddhist'
import InterReligion from './Pages/SearchByCategoryPages/Religion/InterReligion'

import Angika from './Pages/SearchByCategoryPages/MotherTongue/Angika'
import Arunachali from './Pages/SearchByCategoryPages/MotherTongue/Arunachali'
import Assamese from './Pages/SearchByCategoryPages/MotherTongue/Assamese'
import Awadhi from './Pages/SearchByCategoryPages/MotherTongue/Awadhi'
import Badaga from './Pages/SearchByCategoryPages/MotherTongue/Badaga'
import Bengali from './Pages/SearchByCategoryPages/MotherTongue/Bengali'
import Bhojpuri from './Pages/SearchByCategoryPages/MotherTongue/Bhojpuri'
import Bihari from './Pages/SearchByCategoryPages/MotherTongue/Bihari'
import Brij from './Pages/SearchByCategoryPages/MotherTongue/Brij'
import Chatisgarhi from './Pages/SearchByCategoryPages/MotherTongue/Chatisgarhi'
import Dogri from './Pages/SearchByCategoryPages/MotherTongue/Dogri'
import English from './Pages/SearchByCategoryPages/MotherTongue/English'
import French from './Pages/SearchByCategoryPages/MotherTongue/French'
import Garhwali from './Pages/SearchByCategoryPages/MotherTongue/Garhwali'
import Garo from './Pages/SearchByCategoryPages/MotherTongue/Garo'
import Gujarati from './Pages/SearchByCategoryPages/MotherTongue/Gujarati'
import Haryanvi from './Pages/SearchByCategoryPages/MotherTongue/Haryanvi'
import HimachaliPhari from './Pages/SearchByCategoryPages/MotherTongue/HimachaliPhari'
import Hindi from './Pages/SearchByCategoryPages/MotherTongue/Hindi'
import Kanauji from './Pages/SearchByCategoryPages/MotherTongue/Kanauji'
import Kannada from './Pages/SearchByCategoryPages/MotherTongue/Kannada'
import Kashmiri from './Pages/SearchByCategoryPages/MotherTongue/Kashmiri'
import Khandesi from './Pages/SearchByCategoryPages/MotherTongue/Khandesi'
import Khasi from './Pages/SearchByCategoryPages/MotherTongue/Khasi'
import Konkani from './Pages/SearchByCategoryPages/MotherTongue/Konkani'
import Koshali from './Pages/SearchByCategoryPages/MotherTongue/Koshali'
import Kumaoni from './Pages/SearchByCategoryPages/MotherTongue/Kumaoni'
import Kutchi from './Pages/SearchByCategoryPages/MotherTongue/Kutchi'
import Ladacki from './Pages/SearchByCategoryPages/MotherTongue/Ladacki'
import Lepcha from './Pages/SearchByCategoryPages/MotherTongue/Lepcha'
import Magahi from './Pages/SearchByCategoryPages/MotherTongue/Magahi'
import Maithili from './Pages/SearchByCategoryPages/MotherTongue/Maithili'
import Malayalam from './Pages/SearchByCategoryPages/MotherTongue/Malayalam'
import Marathi from './Pages/SearchByCategoryPages/MotherTongue/Marathi'
import Marwari from './Pages/SearchByCategoryPages/MotherTongue/Marwari'
import Manipuri from './Pages/SearchByCategoryPages/MotherTongue/Manipuri'
import Miji from './Pages/SearchByCategoryPages/MotherTongue/Miji'
import Mizo from './Pages/SearchByCategoryPages/MotherTongue/Mizo'
import Monpa from './Pages/SearchByCategoryPages/MotherTongue/Monpa'
import Nepali from './Pages/SearchByCategoryPages/MotherTongue/Nepali'
import Nicobarese from './Pages/SearchByCategoryPages/MotherTongue/Nicobarese'
import Oriya from './Pages/SearchByCategoryPages/MotherTongue/Oriya'
import Punjabi from './Pages/SearchByCategoryPages/MotherTongue/Punjabi'
import Rajasthani from './Pages/SearchByCategoryPages/MotherTongue/Rajasthani'
import Sanskrit from './Pages/SearchByCategoryPages/MotherTongue/Sanskrit'
import Santhali from './Pages/SearchByCategoryPages/MotherTongue/Santhali'
import Sindhi from './Pages/SearchByCategoryPages/MotherTongue/Sindhi'
import Sourashtra from './Pages/SearchByCategoryPages/MotherTongue/Sourashtra'
import Tamil from './Pages/SearchByCategoryPages/MotherTongue/Tamil'
import Telugu from './Pages/SearchByCategoryPages/MotherTongue/Telugu'
import Tripuri from './Pages/SearchByCategoryPages/MotherTongue/Tripuri'
import Tulu from './Pages/SearchByCategoryPages/MotherTongue/Tulu'
import Urdu from './Pages/SearchByCategoryPages/MotherTongue/Urdu'
import Communities from './Pages/SearchByCategoryPages/Communities/Community'
import SearchByCommunities from './components/SeachByCommunities/SearchByCommunities'
import ModalWrapper from './components/modal/ModalWrapper'
import { ModalCustomPaths } from './constants/constants'
import TrackingScripts from './components/TrackingScripts/TrackingScripts'

const App = () => {
  const Wrapper = ({ children }) => {
    const location = useLocation()
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0)
    }, [location.pathname])

    // for enabling modal for specific pages
    useEffect(() => {
      if (ModalCustomPaths.some((path) => path === location.pathname)) {
        const timer = setTimeout(() => {
          document.getElementById('modal_btn').click()
        }, 4000)
        return () => clearTimeout(timer)
      }
    }, [])
    return (
      <div style={{ paddingRight: 0, padding: 0 }}>
        <button
          id="modal_btn"
          className="yollow-btn butn__new float_btn"
          data-bs-toggle="modal"
          data-bs-target="#start-the-journey"
          style={{ display: 'none' }}
        ></button>
        {/* Tracking script for all component */}
        <TrackingScripts />
        {children}
      </div>
    )
  }
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route
          path="/privacy_policy_matrimony_for_india"
          element={<PrivacyPolicy />}
        />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route
          path="/user_agreement_matrimony_for_india"
          element={<UserAgreement />}
        />
        <Route path="/search-by-categories" element={<SearchbyCategories />} />
        <Route
          path="/search-by-communities"
          element={<SearchByCommunities />}
        />
        <Route path="/get-mobile-app" element={<GetMobileApp />} />

        {/* Blog Routs */}
        <Route path="/DatingTips" element={<DatingTips />} />
        <Route path="/BlogDetail1" element={<BlogDetail1 />} />
        <Route path="/BlogDetail2" element={<BlogDetail2 />} />
        <Route path="/BlogDetail3" element={<BlogDetail3 />} />

        <Route path="/Matchmaking" element={<Matchmaking />} />
        <Route path="/MatchmakingDetails" element={<MatchmakingDetails />} />

        <Route path="/SafeMatrimony" element={<SafeMatrimony />} />
        <Route
          path="/SafeMatrimonyDetails1"
          element={<SafeMatrimonyDetails1 />}
        />
        <Route
          path="/SafeMatrimonyDetails2"
          element={<SafeMatrimonyDetails2 />}
        />

        <Route
          path="/new-releases-blogList"
          element={<NewReleasesBlogList />}
        />
        <Route
          path="/new-releases-blogList-details1"
          element={<NewReleasesBlogDetails1 />}
        />
        <Route
          path="/new-releases-blogList-details2"
          element={<NewReleasesBlogDetails2 />}
        />
        <Route
          path="/new-releases-blogList-details3"
          element={<NewReleasesBlogDetails3 />}
        />
        <Route
          path="/new-releases-blogList-details4"
          element={<NewReleasesBlogDetails4 />}
        />
        <Route
          path="/new-releases-blogList-details5"
          element={<NewReleasesBlogDetails5 />}
        />
        <Route
          path="/new-releases-blogList-details6"
          element={<NewReleasesBlogDetails6 />}
        />
        <Route
          path="/new-releases-blogList-details7"
          element={<NewReleasesBlogDetails7 />}
        />

        <Route path="/wellness-blog-list" element={<WellnessBlogList />} />

        {/* BYC */}

        <Route
          path="/matrimony-for-andhra-pradesh"
          element={<AndhraPradesh />}
        />

        <Route path="/matrimony-for-maharashtra" element={<Maharashtra />} />
        <Route path="/matrimony-for-uttar-pradesh" element={<UttarPradesh />} />
        <Route path="/matrimony-for-karnataka" element={<Karnataka />} />
        <Route path="/matrimony-for-tamilnadu" element={<Tamilnadu />} />
        <Route path="/matrimony-for-west-bengal" element={<WestBengal />} />
        <Route
          path="/matrimony-for-madhya-pradesh"
          element={<MadhyaPradesh />}
        />
        <Route path="/matrimony-for-gujarat" element={<Gujarat />} />
        <Route path="/matrimony-for-haryana" element={<Haryana />} />
        <Route path="/matrimony-for-bihar" element={<Bihar />} />
        <Route path="/matrimony-for-kerala" element={<Kerala />} />
        <Route path="/matrimony-for-rajasthan" element={<Rajasthan />} />
        <Route path="/matrimony-for-punjab" element={<Punjab />} />
        <Route path="/matrimony-for-orissa" element={<Orissa />} />
        <Route path="/matrimony-for-assam" element={<Assam />} />
        <Route path="/matrimony-for-jammu&kashmir" element={<JammuKashmir />} />
        <Route path="/matrimony-for-goa" element={<Goa />} />
        <Route
          path="/matrimony-for-himachal-pradesh"
          element={<HimachalPradesh />}
        />
        <Route
          path="/matrimony-for-arunachal-pradesh"
          element={<ArunachalPradesh />}
        />
        <Route path="/matrimony-for-mizoram" element={<Mizoram />} />
        <Route path="/matrimony-for-pondicherry" element={<Pondicherry />} />
        <Route path="/matrimony-for-sikkim" element={<Sikkim />} />
        <Route path="/matrimony-for-tripura" element={<Tripura />} />
        <Route path="/matrimony-for-telangana" element={<Telangana />} />
        <Route path="/matrimony-for-jharkhand" element={<Jharkhand />} />
        <Route path="/matrimony-for-chhattisgarh" element={<Chhattisgarh />} />
        <Route path="/matrimony-for-uttarakhand" element={<Uttarakhand />} />
        <Route path="/matrimony-for-manipur" element={<Manipur />} />
        <Route path="/matrimony-for-nagaland" element={<Nagaland />} />
        <Route path="/matrimony-for-meghalaya" element={<Meghalaya />} />
        <Route path="/matrimony-for-lakshadweep" element={<Lakshadweep />} />
        <Route path="/matrimony-for-ladakh" element={<Ladakh />} />

        {/* Modal wrap close  */}
        <Route path="/matrimony-for-Hindu" element={<Hindu />} />
        <Route path="/matrimony-for-muslim-shia" element={<MuslimShia />} />
        <Route path="/matrimony-for-muslim-sunni" element={<MuslimSunni />} />
        <Route path="/matrimony-for-muslim" element={<Muslim />} />
        <Route path="/matrimony-for-christian" element={<Christian />} />
        <Route path="/matrimony-for-sikh" element={<Sikh />} />
        <Route path="/matrimony-for-jain-digambar" element={<JainDigambar />} />
        <Route
          path="/matrimony-for-jain-shwetambar"
          element={<JainShwetambar />}
        />
        <Route path="/matrimony-for-jain" element={<Jain />} />
        <Route path="/matrimony-for-parsi" element={<Parsi />} />
        <Route path="/matrimony-for-jewish" element={<Jewish />} />
        <Route path="/matrimony-for-buddhist" element={<Buddhist />} />
        <Route path="/matrimony-for-buddhist" element={<Buddhist />} />
        <Route
          path="/matrimony-for-inter-religion"
          element={<InterReligion />}
        />

        <Route path="/matrimony-for-arunachali" element={<Arunachali />} />
        <Route path="/matrimony-for-angika" element={<Angika />} />
        <Route path="/matrimony-for-assamese" element={<Assamese />} />
        <Route path="/matrimony-for-awadhi" element={<Awadhi />} />
        <Route path="/matrimony-for-badaga" element={<Badaga />} />
        <Route path="/matrimony-for-bengali" element={<Bengali />} />
        <Route path="/matrimony-for-bhojpuri" element={<Bhojpuri />} />
        <Route path="/matrimony-for-bihari" element={<Bihari />} />
        <Route path="/matrimony-for-brij" element={<Brij />} />
        <Route path="/matrimony-for-chatisgarhi" element={<Chatisgarhi />} />
        <Route path="/matrimony-for-dogri" element={<Dogri />} />
        <Route path="/matrimony-for-english" element={<English />} />
        <Route path="/matrimony-for-french" element={<French />} />
        <Route path="/matrimony-for-garhwali" element={<Garhwali />} />
        <Route path="/matrimony-for-garo" element={<Garo />} />
        <Route path="/matrimony-for-gujarati" element={<Gujarati />} />
        <Route path="/matrimony-for-haryanvi" element={<Haryanvi />} />
        <Route
          path="/matrimony-for-himachali-pahari"
          element={<HimachaliPhari />}
        />
        <Route path="/matrimony-for-hindi" element={<Hindi />} />
        <Route path="/matrimony-for-kanauji" element={<Kanauji />} />
        <Route path="/matrimony-for-kannada" element={<Kannada />} />
        <Route path="/matrimony-for-kashmiri" element={<Kashmiri />} />
        <Route path="/matrimony-for-khandesi" element={<Khandesi />} />
        <Route path="/matrimony-for-khasi" element={<Khasi />} />
        <Route path="/matrimony-for-konkani" element={<Konkani />} />
        <Route path="/matrimony-for-koshali" element={<Koshali />} />
        <Route path="/matrimony-for-kumaoni" element={<Kumaoni />} />
        <Route path="/matrimony-for-kutchi" element={<Kutchi />} />
        <Route path="/matrimony-for-ladacki" element={<Ladacki />} />
        <Route path="/matrimony-for-lepcha" element={<Lepcha />} />
        <Route path="/matrimony-for-magahi" element={<Magahi />} />
        <Route path="/matrimony-for-maithili" element={<Maithili />} />
        <Route path="/matrimony-for-malayalam" element={<Malayalam />} />
        <Route path="/matrimony-for-manipuri" element={<Manipuri />} />
        <Route path="/matrimony-for-marathi" element={<Marathi />} />
        <Route path="/matrimony-for-marwari" element={<Marwari />} />
        <Route path="/matrimony-for-miji" element={<Miji />} />
        <Route path="/matrimony-for-mizo" element={<Mizo />} />
        <Route path="/matrimony-for-monpa" element={<Monpa />} />
        <Route path="/matrimony-for-nepali" element={<Nepali />} />
        <Route path="/matrimony-for-nicobarese" element={<Nicobarese />} />
        <Route path="/matrimony-for-oriya" element={<Oriya />} />
        <Route path="/matrimony-for-punjabi" element={<Punjab />} />
        <Route path="/matrimony-for-rajasthani" element={<Rajasthani />} />
        <Route path="/matrimony-for-sanskrit" element={<Sanskrit />} />
        <Route path="/matrimony-for-santhali" element={<Santhali />} />
        <Route path="/matrimony-for-sindhi" element={<Sindhi />} />
        <Route path="/matrimony-for-sourashtra" element={<Sourashtra />} />
        <Route path="/matrimony-for-tamil" element={<Tamil />} />
        <Route path="/matrimony-for-telugu" element={<Telugu />} />
        <Route path="/matrimony-for-tripuri" element={<Tripuri />} />
        <Route path="/matrimony-for-tulu" element={<Tulu />} />
        <Route path="/matrimony-for-urdu" element={<Urdu />} />

        {/* categories */}
        <Route path="/matrimony-for/:community" element={<Communities />} />
      </Routes>

      <Footer />
    </Wrapper>
  )
}

export default App
