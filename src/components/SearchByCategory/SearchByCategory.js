import React from 'react'
import { Link } from 'react-router-dom'
import './SearchByCategory.scss'
import { communitiesShortList } from '../../constants/constants.js'
const SearchByCategory = () => {
  return (
    <div className="search-by-category-wrapper main-padding section">
      <h6>BROWSE PROFILES BY </h6>

      <ul className="nav nav-pills" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-state-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-state"
            type="button"
            role="tab"
            aria-controls="pills-state"
            aria-selected="true"
          >
            State
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-mother-tongue-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-mother-tongue"
            type="button"
            role="tab"
            aria-controls="pills-mother-tongue"
            aria-selected="false"
          >
            Mother Tongue
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-religion-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-religion"
            type="button"
            role="tab"
            aria-controls="pills-religion"
            aria-selected="false"
          >
            Religion
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-communities-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-communities"
            type="button"
            role="tab"
            aria-controls="pills-communities"
            aria-selected="false"
          >
            Communities
          </button>
        </li>
      </ul>

      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-state"
          role="tabpanel"
          aria-labelledby="pills-state-tab"
          tabIndex="0"
        >
          <ul className="category-list">
            <li>
              <Link target={'_blank'} to="/matrimony-for-andhra-pradesh">
                Andhra Pradesh
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-arunachal-pradesh">
                {' '}
                Arunachal Pradesh
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-assam">
                {' '}
                Assam{' '}
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-bihar">
                Bihar{' '}
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-chhattisgarh">
                {' '}
                Chhattisgarh{' '}
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-goa">
                {' '}
                Goa
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-gujarat">
                Gujarat{' '}
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-haryana">
                Haryana{' '}
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-himachal-pradesh">
                Himachal Pradesh{' '}
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-jammu&kashmir">
                {' '}
                Jammu & Kashmir
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-jharkhand">
                {' '}
                Jharkhand
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-karnataka">
                {' '}
                Karnataka
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-kerala">
                {' '}
                Kerala
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-ladakh">
                {' '}
                Ladakh
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-lakshadweep">
                {' '}
                Lakshadweep
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-madhya-pradesh">
                {' '}
                Madhya Pradesh
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-maharashtra">
                Maharashtra{' '}
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-manipur">
                {' '}
                Manipur
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-meghalaya">
                {' '}
                Meghalaya
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-mizoram">
                {' '}
                Mizoram
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-nagaland">
                {' '}
                Nagaland
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-orissa">
                {' '}
                Orissa
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-pondicherry">
                Pondicherry{' '}
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-punjab">
                {' '}
                Punjab
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-rajasthan">
                {' '}
                Rajasthan
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-sikkim">
                {' '}
                Sikkim
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-tamilnadu">
                TamilNadu{' '}
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-telangana">
                Telangana{' '}
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-tripura">
                Tripura{' '}
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-uttar-pradesh">
                UttarPradesh{' '}
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-uttarakhand">
                Uttarakhand{' '}
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-west-bengal">
                West Bengal{' '}
              </Link>{' '}
            </li>
          </ul>
        </div>
        <div
          className="tab-pane fade"
          id="pills-mother-tongue"
          role="tabpanel"
          aria-labelledby="pills-mother-tongue-tab"
          tabIndex="0"
        >
          <ul className="category-list">
            <li>
              <Link target={'_blank'} to="/matrimony-for-arunachali">
                Arunachali
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-angika">
                Angika
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-assamese">
                Assamese
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-awadhi">
                Awadhi
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-badaga">
                Badaga
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-bengali">
                Bengali
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-bhojpuri">
                Bhojpuri
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-bihari">
                Bihari
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-brij">
                Brij
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-chatisgarhi">
                Chatisgarhi
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-dogri">
                Dogri
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-english">
                English
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-french">
                French
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-garhwali">
                Garhwali
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-garo">
                Garo
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-gujarati">
                Gujarati
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-haryanvi">
                Haryanvi
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-himachali-pahari">
                Himachali
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-hindi">
                Hindi
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-kanauji">
                Kanauji
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-kannada">
                Kannada
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-kashmiri">
                Kashmiri
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-khandesi">
                Khandesi
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-khasi">
                Khasi
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-konkani">
                Konkani
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-koshali">
                Koshali
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-kumaoni">
                Kumaoni
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-kutchi">
                Kutchi
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-ladacki">
                Ladacki
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-lepcha">
                Lepcha
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-magahi">
                Magahi
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-maithili">
                Maithili
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-malayalam">
                Malayalam
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-manipuri">
                Manipuri
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-marathi">
                Marathi
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-marwari">
                Marwari
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-miji">
                Miji
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-mizo">
                Mizo
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-monpa">
                Monpa
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-nepali">
                Nepali
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-nicobarese">
                Nicobarese
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-oriya">
                Oriya
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-punjabi">
                Punjabi
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-rajasthani">
                Rajasthani
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-sanskrit">
                Sanskrit
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-santhali">
                Santhali
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-sindhi">
                Sindhi
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-sourashtra">
                Sourashtra
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-tamil">
                Tamil
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-telugu">
                Telugu
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-tripuri">
                Tripuri
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-tulu">
                Tulu
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-urdu">
                Urdu
              </Link>{' '}
            </li>
          </ul>
        </div>
        <div
          className="tab-pane fade"
          id="pills-religion"
          role="tabpanel"
          aria-labelledby="pills-religion-tab"
          tabIndex="0"
        >
          <ul className="category-list">
            <li>
              <Link target={'_blank'} to="/matrimony-for-Hindu">
                Hindu
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-muslim-shia">
                Muslim - Shia
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-muslim-sunni">
                Muslim - Sunni
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-muslim">
                Muslim - Others
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-christian">
                Christian
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-sikh">
                Sikh
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-jain-digambar">
                Jain - Digambar
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-jain-shwetambar">
                Jain - Shwetambar
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-jain">
                Jain - Others
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-parsi">
                Parsi
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-jewish">
                Jewish
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-buddhist">
                Buddhist
              </Link>{' '}
              |{' '}
            </li>
            <li>
              <Link target={'_blank'} to="/matrimony-for-inter-religion">
                Inter-Religion
              </Link>{' '}
              |{' '}
            </li>
          </ul>
        </div>
        {/* <div
          className="tab-pane fade"
          id="pills-City"
          role="tabpanel"
          aria-labelledby="pills-City-tab"
          tabIndex="0"
        >
          <ul className="category-list">
            <li>
              <Link to="">Adelaide</Link> |{' '}
            </li>
            <li>
              <Link to="">Agartala</Link> |{' '}
            </li>
            <li>
              <Link to="">Ahmedabad</Link> |{' '}
            </li>
            <li>
              <Link to="">Alabama</Link> |{' '}
            </li>
            <li>
              <Link to="">Alappuzha</Link> |{' '}
            </li>
            <li>
              <Link to="">Alaska</Link> |{' '}
            </li>
            <li>
              <Link to="">Aligarh</Link> |{' '}
            </li>
            <li>
              <Link to="">Almora</Link> |{' '}
            </li>
            <li>
              <Link to="">Amara</Link> |{' '}
            </li>
            <li>
              <Link to="">Ambikapur</Link> |{' '}
            </li>
            <li>
              <Link to="">Amman</Link> |{' '}
            </li>
            <li>
              <Link to="">Amsterdam</Link> |{' '}
            </li>
            <li>
              <Link to="">Arizona</Link> |{' '}
            </li>
            <li>
              <Link to="">Arkansas</Link> |{' '}
            </li>
            <li>
              <Link to="">Armenia</Link> |{' '}
            </li>
            <li>
              <Link to="">Arun</Link> |{' '}
            </li>
            <li>
              <Link to="">Atlanta</Link> |{' '}
            </li>
            <li>
              <Link to="">Aurora</Link> |{' '}
            </li>
            <li>
              <Link to="">Austin</Link> |{' '}
            </li>
            <li>
              <Link to="">Avadi</Link> |{' '}
            </li>
            <li>
              <Link to="">Bagalkot</Link> |{' '}
            </li>
            <li>
              <Link to="">Balangir</Link> |{' '}
            </li>
            <li>
              <Link to="">Baltimore</Link> |{' '}
            </li>
            <li>
              <Link to="">Bangalore</Link> |{' '}
            </li>
            <li>
              <Link to="">Bangkok</Link> |{' '}
            </li>
            <li>
              <Link to="">Bankura</Link> |{' '}
            </li>
            <li>
              <Link to="">Barcelona</Link> |{' '}
            </li>
            <li>
              <Link to="">Bargarh</Link> |{' '}
            </li>
            <li>
              <Link to="">Bari</Link> |{' '}
            </li>
            <li>
              <Link to="">Batman</Link> |{' '}
            </li>
            <li>
              <Link to="">Benin</Link> |{' '}
            </li>
            <li>
              <Link to="">Bhadrak</Link> |{' '}
            </li>
            <li>
              <Link to="">Bhopal</Link> |{' '}
            </li>
            <li>
              <Link to="">Bhubaneshwar</Link> |{' '}
            </li>
            <li>
              <Link to="">Bidar</Link> |{' '}
            </li>
            <li>
              <Link to="">Bijapur</Link> |{' '}
            </li>
            <li>
              <Link to="">Birmingham</Link> |{' '}
            </li>
            <li>
              <Link to="">Blackburn</Link> |{' '}
            </li>
            <li>
              <Link to="">Boston</Link> |{' '}
            </li>
            <li>
              <Link to="">Brampton</Link> |{' '}
            </li>
            <li>
              <Link to="">Brent</Link> |{' '}
            </li>
            <li>
              <Link to="">Brisbane</Link> |{' '}
            </li>
            <li>
              <Link to="">Bromley</Link> |{' '}
            </li>
            <li>
              <Link to="">Budapest</Link> |{' '}
            </li>
            <li>
              <Link to="">Buffalo</Link> |{' '}
            </li>
            <li>
              <Link to="">Calgary</Link> |{' '}
            </li>
            <li>
              <Link to="">Cali</Link> |{' '}
            </li>
            <li>
              <Link to="">California</Link> |{' '}
            </li>
            <li>
              <Link to="">Casablanca</Link> |{' '}
            </li>
            <li>
              <Link to="">Central</Link> |{' '}
            </li>
            <li>
              <Link to="">Chandigarh</Link> |{' '}
            </li>
            <li>
              <Link to="">Chandler</Link> |{' '}
            </li>
            <li>
              <Link to="">Charlotte</Link> |{' '}
            </li>
            <li>
              <Link to="">Chennai</Link> |{' '}
            </li>
            <li>
              <Link to="">Cherthala</Link> |{' '}
            </li>
            <li>
              <Link to="">Chicago</Link> |{' '}
            </li>
            <li>
              <Link to="">Chidambaram</Link> |{' '}
            </li>
            <li>
              <Link to="">Chittoor</Link> |{' '}
            </li>
            <li>
              <Link to="">Cleveland</Link> |{' '}
            </li>
            <li>
              <Link to="">Colorado</Link> |{' '}
            </li>
            <li>
              <Link to="">Columbus</Link> |{' '}
            </li>
            <li>
              <Link to="">Connecticut</Link> |{' '}
            </li>
            <li>
              <Link to="">Copenhagen</Link> |{' '}
            </li>
            <li>
              <Link to="">Cuddalore</Link> |{' '}
            </li>
            <li>
              <Link to="">Cuddapah</Link> |{' '}
            </li>
            <li>
              <Link to="">Dali</Link> |{' '}
            </li>
            <li>
              <Link to="">Dallas</Link> |{' '}
            </li>
            <li>
              <Link to="">Delaware</Link> |{' '}
            </li>
            <li>
              <Link to="">Delhi</Link> |{' '}
            </li>
            <li>
              <Link to="">Denver</Link> |{' '}
            </li>
            <li>
              <Link to="">Dhaka</Link> |{' '}
            </li>
            <li>
              <Link to="">Dharwad</Link> |{' '}
            </li>
            <li>
              <Link to="">Dhenkanal</Link> |{' '}
            </li>
            <li>
              <Link to="">Dhule</Link> |{' '}
            </li>
            <li>
              <Link to="">Dindigul</Link> |{' '}
            </li>
            <li>
              <Link to="">District</Link> |{' '}
            </li>
            <li>
              <Link to="">District</Link> |{' '}
            </li>
            <li>
              <Link to="">Dublin</Link> |{' '}
            </li>
            <li>
              <Link to="">Dum</Link> |{' '}
            </li>
            <li>
              <Link to="">Edmonton</Link> |{' '}
            </li>
            <li>
              <Link to="">Elizabeth</Link> |{' '}
            </li>
            <li>
              <Link to="">Eluru</Link> |{' '}
            </li>
            <li>
              <Link to="">Engels</Link> |{' '}
            </li>
            <li>
              <Link to="">Faridabad</Link> |{' '}
            </li>
            <li>
              <Link to="">Florida</Link> |{' '}
            </li>
            <li>
              <Link to="">Garland</Link> |{' '}
            </li>
            <li>
              <Link to="">Gary</Link> |{' '}
            </li>
            <li>
              <Link to="">Georgia</Link> |{' '}
            </li>
            <li>
              <Link to="">Ghaziabad</Link> |{' '}
            </li>
            <li>
              <Link to="">Gibraltar</Link> |{' '}
            </li>
            <li>
              <Link to="">Glasgow</Link> |{' '}
            </li>
            <li>
              <Link to="">Gorakhpur</Link> |{' '}
            </li>
            <li>
              <Link to="">Greenwich</Link> |{' '}
            </li>
            <li>
              <Link to="">Guam</Link> |{' '}
            </li>
            <li>
              <Link to="">Guatemala</Link> |{' '}
            </li>
            <li>
              <Link to="">Gujranwala</Link> |{' '}
            </li>
            <li>
              <Link to="">Gujrat</Link> |{' '}
            </li>
            <li>
              <Link to="">Gurdaspur</Link> |{' '}
            </li>
            <li>
              <Link to="">Gurgaon</Link> |{' '}
            </li>
            <li>
              <Link to="">Haldwani</Link> |{' '}
            </li>
            <li>
              <Link to="">Hamilton</Link> |{' '}
            </li>
            <li>
              <Link to="">Haridwar</Link> |{' '}
            </li>
            <li>
              <Link to="">Haringey</Link> |{' '}
            </li>
            <li>
              <Link to="">Hassan</Link> |{' '}
            </li>
            <li>
              <Link to="">Hawaii</Link> |{' '}
            </li>
            <li>
              <Link to="">Hilla</Link> |{' '}
            </li>
            <li>
              <Link to="">Hollywood</Link> |{' '}
            </li>
            <li>
              <Link to="">Hong</Link> |{' '}
            </li>
            <li>
              <Link to="">Hospet</Link> |{' '}
            </li>
            <li>
              <Link to="">Hosur</Link> |{' '}
            </li>
            <li>
              <Link to="">Houston</Link> |{' '}
            </li>
            <li>
              <Link to="">Hyderabad</Link> |{' '}
            </li>
            <li>
              <Link to="">Hyderabad</Link> |{' '}
            </li>
            <li>
              <Link to="">Idaho</Link> |{' '}
            </li>
            <li>
              <Link to="">Illinois</Link> |{' '}
            </li>
            <li>
              <Link to="">Indiana</Link> |{' '}
            </li>
            <li>
              <Link to="">Indianapolis</Link> |{' '}
            </li>
            <li>
              <Link to="">Indore</Link> |{' '}
            </li>
            <li>
              <Link to="">Iowa</Link> |{' '}
            </li>
            <li>
              <Link to="">Islamabad</Link> |{' '}
            </li>
            <li>
              <Link to="">Istanbul</Link> |{' '}
            </li>
            <li>
              <Link to="">Jackson</Link> |{' '}
            </li>
            <li>
              <Link to="">Jaffna</Link> |{' '}
            </li>
            <li>
              <Link to="">Jaipur</Link> |{' '}
            </li>
            <li>
              <Link to="">Jeddah</Link> |{' '}
            </li>
            <li>
              <Link to="">Jhansi</Link> |{' '}
            </li>
            <li>
              <Link to="">Kadapa</Link> |{' '}
            </li>
            <li>
              <Link to="">Kakinada</Link> |{' '}
            </li>
            <li>
              <Link to="">Kalyan</Link> |{' '}
            </li>
            <li>
              <Link to="">Kalyani</Link> |{' '}
            </li>
            <li>
              <Link to="">Kanhangad</Link> |{' '}
            </li>
            <li>
              <Link to="">Kanpur</Link> |{' '}
            </li>
            <li>
              <Link to="">Kansas</Link> |{' '}
            </li>
            <li>
              <Link to="">Kansas</Link> |{' '}
            </li>
            <li>
              <Link to="">Karachi</Link> |{' '}
            </li>
            <li>
              <Link to="">Karimganj</Link> |{' '}
            </li>
            <li>
              <Link to="">Kendrapara</Link> |{' '}
            </li>
            <li>
              <Link to="">Kentucky</Link> |{' '}
            </li>
            <li>
              <Link to="">Khammam</Link> |{' '}
            </li>
            <li>
              <Link to="">Kolkata</Link> |{' '}
            </li>
            <li>
              <Link to="">Kullu</Link> |{' '}
            </li>
            <li>
              <Link to="">Kumbakonam</Link> |{' '}
            </li>
            <li>
              <Link to="">Lahore</Link> |{' '}
            </li>
            <li>
              <Link to="">Lakshadweep</Link> |{' '}
            </li>
            <li>
              <Link to="">Las</Link> |{' '}
            </li>
            <li>
              <Link to="">Latur</Link> |{' '}
            </li>
            <li>
              <Link to="">Leon</Link> |{' '}
            </li>
            <li>
              <Link to="">Lincoln</Link> |{' '}
            </li>
            <li>
              <Link to="">Long</Link> |{' '}
            </li>
            <li>
              <Link to="">Los</Link> |{' '}
            </li>
            <li>
              <Link to="">Louisville</Link> |{' '}
            </li>
            <li>
              <Link to="">Lucknow</Link> |{' '}
            </li>
            <li>
              <Link to="">Ludhiana</Link> |{' '}
            </li>
            <li>
              <Link to="">Madison</Link> |{' '}
            </li>
            <li>
              <Link to="">Maine</Link> |{' '}
            </li>
            <li>
              <Link to="">Malappuram</Link> |{' '}
            </li>
            <li>
              <Link to="">Male</Link> |{' '}
            </li>
            <li>
              <Link to="">Manchester</Link> |{' '}
            </li>
            <li>
              <Link to="">Mandi</Link> |{' '}
            </li>
            <li>
              <Link to="">Mandya</Link> |{' '}
            </li>
            <li>
              <Link to="">Mangalorean</Link> |{' '}
            </li>
            <li>
              <Link to="">Manila</Link> |{' '}
            </li>
            <li>
              <Link to="">Maryland</Link> |{' '}
            </li>
            <li>
              <Link to="">Massachusetts</Link> |{' '}
            </li>
            <li>
              <Link to="">Meghalaya</Link> |{' '}
            </li>
            <li>
              <Link to="">Memphis</Link> |{' '}
            </li>
            <li>
              <Link to="">Miami</Link> |{' '}
            </li>
            <li>
              <Link to="">Michigan</Link> |{' '}
            </li>
            <li>
              <Link to="">Milan</Link> |{' '}
            </li>
            <li>
              <Link to="">Minnesota</Link> |{' '}
            </li>
            <li>
              <Link to="">Mississippi</Link> |{' '}
            </li>
            <li>
              <Link to="">Missouri</Link> |{' '}
            </li>
            <li>
              <Link to="">Monaco</Link> |{' '}
            </li>
            <li>
              <Link to="">Montana</Link> |{' '}
            </li>
            <li>
              <Link to="">Montreal</Link> |{' '}
            </li>
            <li>
              <Link to="">Moradabad</Link> |{' '}
            </li>
            <li>
              <Link to="">Moscow</Link> |{' '}
            </li>
            <li>
              <Link to="">Mumbai</Link> |{' '}
            </li>
            <li>
              <Link to="">Muscat</Link> |{' '}
            </li>
            <li>
              <Link to="">Naga</Link> |{' '}
            </li>
            <li>
              <Link to="">Nagaland</Link> |{' '}
            </li>
            <li>
              <Link to="">Nagapattinam</Link> |{' '}
            </li>
            <li>
              <Link to="">Nagercoil</Link> |{' '}
            </li>
            <li>
              <Link to="">Nagpur</Link> |{' '}
            </li>
            <li>
              <Link to="">Nainital</Link> |{' '}
            </li>
            <li>
              <Link to="">Nairobi</Link> |{' '}
            </li>
            <li>
              <Link to="">Nalgonda</Link> |{' '}
            </li>
            <li>
              <Link to="">Nanded</Link> |{' '}
            </li>
            <li>
              <Link to="">Navi</Link> |{' '}
            </li>
            <li>
              <Link to="">Nebraska</Link> |{' '}
            </li>
            <li>
              <Link to="">Nevada</Link> |{' '}
            </li>
            <li>
              <Link to="">New</Link> |{' '}
            </li>
            <li>
              <Link to="">New</Link> |{' '}
            </li>
            <li>
              <Link to="">New</Link> |{' '}
            </li>
            <li>
              <Link to="">New</Link> |{' '}
            </li>
            <li>
              <Link to="">New</Link> |{' '}
            </li>
            <li>
              <Link to="">New</Link> |{' '}
            </li>
            <li>
              <Link to="">New</Link> |{' '}
            </li>
            <li>
              <Link to="">Nice</Link> |{' '}
            </li>
            <li>
              <Link to="">Nizamabad</Link> |{' '}
            </li>
            <li>
              <Link to="">Noida</Link> |{' '}
            </li>
            <li>
              <Link to="">North</Link> |{' '}
            </li>
            <li>
              <Link to="">North</Link> |{' '}
            </li>
            <li>
              <Link to="">Odessa</Link> |{' '}
            </li>
            <li>
              <Link to="">Ohio</Link> |{' '}
            </li>
            <li>
              <Link to="">Oklahoma</Link> |{' '}
            </li>
            <li>
              <Link to="">Omaha</Link> |{' '}
            </li>
            <li>
              <Link to="">Ongole</Link> |{' '}
            </li>
            <li>
              <Link to="">Ontario</Link> |{' '}
            </li>
            <li>
              <Link to="">Orange</Link> |{' '}
            </li>
            <li>
              <Link to="">Oregon</Link> |{' '}
            </li>
            <li>
              <Link to="">Orlando</Link> |{' '}
            </li>
            <li>
              <Link to="">Ottawa</Link> |{' '}
            </li>
            <li>
              <Link to="">Panvel</Link> |{' '}
            </li>
            <li>
              <Link to="">Paris</Link> |{' '}
            </li>
            <li>
              <Link to="">Patna</Link> |{' '}
            </li>
            <li>
              <Link to="">Pennsylvania</Link> |{' '}
            </li>
            <li>
              <Link to="">Periyar</Link> |{' '}
            </li>
            <li>
              <Link to="">Philadelphia</Link> |{' '}
            </li>
            <li>
              <Link to="">Pithoragarh</Link> |{' '}
            </li>
            <li>
              <Link to="">Pittsburgh</Link> |{' '}
            </li>
            <li>
              <Link to="">Portland</Link> |{' '}
            </li>
            <li>
              <Link to="">Puducherry</Link> |{' '}
            </li>
            <li>
              <Link to="">Pudukkottai</Link> |{' '}
            </li>
            <li>
              <Link to="">Puerto</Link> |{' '}
            </li>
            <li>
              <Link to="">Pune</Link> |{' '}
            </li>
            <li>
              <Link to="">Quebec</Link> |{' '}
            </li>
            <li>
              <Link to="">Raichur</Link> |{' '}
            </li>
            <li>
              <Link to="">Rajahmundry</Link> |{' '}
            </li>
            <li>
              <Link to="">Rajpura</Link> |{' '}
            </li>
            <li>
              <Link to="">Rayagada</Link> |{' '}
            </li>
            <li>
              <Link to="">Reading</Link> |{' '}
            </li>
            <li>
              <Link to="">Regina</Link> |{' '}
            </li>
            <li>
              <Link to="">Reno</Link> |{' '}
            </li>
            <li>
              <Link to="">Rhode</Link> |{' '}
            </li>
            <li>
              <Link to="">Richmond</Link> |{' '}
            </li>
            <li>
              <Link to="">Riga</Link> |{' '}
            </li>
            <li>
              <Link to="">Riverside</Link> |{' '}
            </li>
            <li>
              <Link to="">Riyadh</Link> |{' '}
            </li>
            <li>
              <Link to="">Rome</Link> |{' '}
            </li>
            <li>
              <Link to="">Sacramento</Link> |{' '}
            </li>
            <li>
              <Link to="">Saharanpur</Link> |{' '}
            </li>
            <li>
              <Link to="">San</Link> |{' '}
            </li>
            <li>
              <Link to="">San</Link> |{' '}
            </li>
            <li>
              <Link to="">San</Link> |{' '}
            </li>
            <li>
              <Link to="">Sargodha</Link> |{' '}
            </li>
            <li>
              <Link to="">Sari</Link> |{' '}
            </li>
            <li>
              <Link to="">Satara</Link> |{' '}
            </li>
            <li>
              <Link to="">Savannah</Link> |{' '}
            </li>
            <li>
              <Link to="">Scarborough</Link> |{' '}
            </li>
            <li>
              <Link to="">Seattle</Link> |{' '}
            </li>
            <li>
              <Link to="">Shanghai</Link> |{' '}
            </li>
            <li>
              <Link to="">Shillong</Link> |{' '}
            </li>
            <li>
              <Link to="">Sirsa</Link> |{' '}
            </li>
            <li>
              <Link to="">Slough</Link> |{' '}
            </li>
            <li>
              <Link to="">Sochi</Link> |{' '}
            </li>
            <li>
              <Link to="">Sofia</Link> |{' '}
            </li>
            <li>
              <Link to="">Solihull</Link> |{' '}
            </li>
            <li>
              <Link to="">South</Link> |{' '}
            </li>
            <li>
              <Link to="">Southampton</Link> |{' '}
            </li>
            <li>
              <Link to="">Split</Link> |{' '}
            </li>
            <li>
              <Link to="">Srikakulam</Link> |{' '}
            </li>
            <li>
              <Link to="">St</Link> |{' '}
            </li>
            <li>
              <Link to="">St</Link> |{' '}
            </li>
            <li>
              <Link to="">Surrey</Link> |{' '}
            </li>
            <li>
              <Link to="">Taliparamba</Link> |{' '}
            </li>
            <li>
              <Link to="">Tambaram</Link> |{' '}
            </li>
            <li>
              <Link to="">Tennessee</Link> |{' '}
            </li>
            <li>
              <Link to="">Texas</Link> |{' '}
            </li>
            <li>
              <Link to="">Thalassery</Link> |{' '}
            </li>
            <li>
              <Link to="">Thane</Link> |{' '}
            </li>
            <li>
              <Link to="">Tiruvannamalai</Link> |{' '}
            </li>
            <li>
              <Link to="">Tokyo</Link> |{' '}
            </li>
            <li>
              <Link to="">Toronto</Link> |{' '}
            </li>
            <li>
              <Link to="">Tower</Link> |{' '}
            </li>
            <li>
              <Link to="">Tulsa</Link> |{' '}
            </li>
            <li>
              <Link to="">Tuticorin</Link> |{' '}
            </li>
            <li>
              <Link to="">Ulhasnagar</Link> |{' '}
            </li>
            <li>
              <Link to="">Utah</Link> |{' '}
            </li>
            <li>
              <Link to="">Vadakara</Link> |{' '}
            </li>
            <li>
              <Link to="">Vancouver</Link> |{' '}
            </li>
            <li>
              <Link to="">Vermont</Link> |{' '}
            </li>
            <li>
              <Link to="">Victoria</Link> |{' '}
            </li>
            <li>
              <Link to="">Virginia</Link> |{' '}
            </li>
            <li>
              <Link to="">Vitoria</Link> |{' '}
            </li>
            <li>
              <Link to="">Volgograd</Link> |{' '}
            </li>
            <li>
              <Link to="">Warren</Link> |{' '}
            </li>
            <li>
              <Link to="">Washington</Link> |{' '}
            </li>
            <li>
              <Link to="">West</Link> |{' '}
            </li>
            <li>
              <Link to="">Windsor</Link> |{' '}
            </li>
            <li>
              <Link to="">Wisconsin</Link> |{' '}
            </li>
            <li>
              <Link to="">Wyoming</Link> |{' '}
            </li>
            <li>
              <Link to="">Yavatmal</Link>{' '}
            </li>
          </ul>
        </div> */}
        {/* <div
          className="tab-pane fade"
          id="pills-occupation"
          role="tabpanel"
          aria-labelledby="pills-occupation-tab"
          tabIndex="0"
        >
          <ul className="category-list">
            <li>
              <Link to="">IT</Link> |{' '}
            </li>
            <li>
              <Link to="">Teacher</Link> |{' '}
            </li>
            <li>
              <Link to="">CA/Accountant</Link> |{' '}
            </li>
            <li>
              <Link to="">Businessman</Link> |{' '}
            </li>
            <li>
              <Link to="">Doctor</Link> |{' '}
            </li>
            <li>
              <Link to="">Govt. Services</Link> |{' '}
            </li>
            <li>
              <Link to="">Lawyers</Link> |{' '}
            </li>
            <li>
              <Link to="">Defence</Link> |{' '}
            </li>
            <li>
              <Link to="">IAS</Link> |{' '}
            </li>
            <li>
              <Link to="">Cyber / Network Security</Link> |{' '}
            </li>
            <li>
              <Link to="">Police</Link> |{' '}
            </li>
            <li>
              <Link to="">Nurse</Link> |{' '}
            </li>
            <li>
              <Link to="">Psychologist</Link> |{' '}
            </li>
            <li>
              <Link to="">Pilot</Link> |{' '}
            </li>
            <li>
              <Link to="">Navy</Link> |{' '}
            </li>
            <li>
              <Link to="">Air Hostess</Link> |{' '}
            </li>
            <li>
              <Link to="">Engineers</Link> |{' '}
            </li>
            <li>
              <Link to="">NGO / Social Services</Link> |{' '}
            </li>
            <li>
              <Link to="">IT Non Tech</Link> |{' '}
            </li>
          </ul>
        </div> */}
        {/* <div
          className="tab-pane fade"
          id="pills-NRI"
          role="tabpanel"
          aria-labelledby="pills-NRI-tab"
          tabIndex="0"
        >
          <ul className="category-list">
            <li>
              <Link to="">India </Link> |{' '}
            </li>
            <li>
              <Link to="">United States</Link> |{' '}
            </li>
            <li>
              <Link to="">United Arab Emirates</Link> |{' '}
            </li>
            <li>
              <Link to="">United Kingdom</Link> |{' '}
            </li>
            <li>
              <Link to="">Australia </Link> |{' '}
            </li>
            <li>
              <Link to="">Canada </Link> |{' '}
            </li>
            <li>
              <Link to="">Pakistan </Link> |{' '}
            </li>
            <li>
              <Link to="">Singapore </Link> |{' '}
            </li>
            <li>
              <Link to="">NRI </Link> |{' '}
            </li>
            <li>
              <Link to="">China </Link> |{' '}
            </li>
            <li>
              <Link to="">Japan </Link> |{' '}
            </li>
            <li>
              <Link to="">France </Link> |{' '}
            </li>
            <li>
              <Link to="">Saudi </Link> |{' '}
            </li>
            <li>
              <Link to="">Spain </Link> |{' '}
            </li>
            <li>
              <Link to="">Indonesia </Link> |{' '}
            </li>
            <li>
              <Link to="">Kuwait </Link> |{' '}
            </li>
            <li>
              <Link to="">Qatar </Link> |{' '}
            </li>
            <li>
              <Link to="">Italy </Link> |{' '}
            </li>
            <li>
              <Link to="">Ireland </Link> |{' '}
            </li>
            <li>
              <Link to="">Afghanistan </Link> |{' '}
            </li>
            <li>
              <Link to="">Mauritius </Link> |{' '}
            </li>
            <li>
              <Link to="">Thailand </Link> |{' '}
            </li>
            <li>
              <Link to="">Oman </Link> |{' '}
            </li>
            <li>
              <Link to="">Sweden </Link> |{' '}
            </li>
            <li>
              <Link to="">Philippines </Link> |{' '}
            </li>
            <li>
              <Link to="">Poland </Link> |{' '}
            </li>
            <li>
              <Link to="">Bahrain </Link> |{' '}
            </li>
            <li>
              <Link to="">Kenya </Link> |{' '}
            </li>
            <li>
              <Link to="">Switzerland </Link> |{' '}
            </li>
            <li>
              <Link to="">Belgium </Link> |{' '}
            </li>
            <li>
              <Link to="">Hong Kong</Link> |{' '}
            </li>
            <li>
              <Link to="">Albania </Link> |{' '}
            </li>
            <li>
              <Link to="">Liberia </Link> |{' '}
            </li>
            <li>
              <Link to="">Netherlands </Link> |{' '}
            </li>
            <li>
              <Link to="">Papua New Guinea</Link> |{' '}
            </li>
            <li>
              <Link to="">Sierra Leone </Link> |{' '}
            </li>
            <li>
              <Link to="">Zambia </Link> |{' '}
            </li>
          </ul>
        </div> */}
        <div
          className="tab-pane fade"
          id="pills-communities"
          role="tabpanel"
          aria-labelledby="pills-communities-tab"
          tabIndex="0"
        >
          {/* CATEGORY LIST */}
          <ul className="category-list">
            {communitiesShortList.map((data) => (
              <li key={data.index}>
                <Link target="_blank" to={`/matrimony-for/${data.community}`}>
                  {data.community}
                </Link>{' '}
                |{' '}
              </li>
            ))}
            <Link
              target="_blank"
              className="show_all"
              to={'/search-by-communities'}
            >
              Show all &#187;
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SearchByCategory
