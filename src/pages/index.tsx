import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Background from '../components/Background'
import { GET_COINS_QUERY } from '../utils/queries'



const Home = () => {
  
  return (
    <div className="w-full h-full  ">
      {/** Calling Three main functions of the project to run them through index.tsx */}
      <Background />
      <Header />
      <Landing />
    </div>
  )
}

export default Home
