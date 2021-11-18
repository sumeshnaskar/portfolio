import React from 'react'
import { AboutContainer } from './container/about'
import { HeaderContainer } from './container/header'
import { IntroContainer } from './container/intro'
import { ProjectContainer } from './container/project'

import { GlobalStyle } from './global-style'

//App Component
export default function App() {
  return (
    <>
      <GlobalStyle/>
      <HeaderContainer/>
      <IntroContainer/>
      <ProjectContainer/>
      <AboutContainer/>
    </>
  )
}


