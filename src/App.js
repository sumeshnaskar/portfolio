import React from 'react'
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
    </>
  )
}


