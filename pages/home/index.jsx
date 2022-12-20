import React from 'react'
import MenuWrapper from '../../components/product/MenuWrapper'
import About from '../../components/ui/About'
import Campaigns from '../../components/ui/Campaigns'
import Carousel from '../../components/ui/Carousel'

const Index = () => {
  return (
  <div>
    <Carousel/>
    <Campaigns/>
    <MenuWrapper/>
    <About />
  </div>
  )
}

export default Index