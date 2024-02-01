import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
import MainFirstVideo from './MainFirstVideo'
import SlidingTexts from './SlidingTexts'
import SectionAfterSlidingText from './SectionAfterSlidingText'
import FeaturedProjects from './FeaturedProjects'
import WhoWeWorkwith from './WhoWeWorkwith'
import TeamObjective from './TeamObjective'

export default function FirstPage() {
  return (
    <>
      <div>
        <NavBar />
        <Header />
        <MainFirstVideo />
        <SlidingTexts />
        <SectionAfterSlidingText />
        <TeamObjective />
        <FeaturedProjects />
        <WhoWeWorkwith />
      </div>
      </>
  )
}
