import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Slippery Enchanted Stork</title>
        <meta property="og:title" content="Slippery Enchanted Stork" />
      </Helmet>
      <div className="home-container1"></div>
      <div className="home-container2">
        <h1>Heading</h1>
      </div>
      <div className="home-container3"></div>
    </div>
  )
}

export default Home
