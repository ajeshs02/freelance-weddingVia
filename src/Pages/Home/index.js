import React from 'react'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import Feature from '../../components/Feature/Feature'
import AppDownload from '../../components/AppDownkoad/AppDownload'
import SearchByCategory from '../../components/SearchByCategory/SearchByCategory'

const Home = () => {
  return (
    <div className="home-wrapper">
      <HomeBanner />
      <Feature />
      <AppDownload />
      <SearchByCategory />
    </div>
  )
}

export default Home
