import React from 'react'
import { HeaderContainer } from './container/header'
import { IntroContainer } from './container/intro'

import { GlobalStyle } from './global-style'

//App Component
export default function App() {
  return (
    <>
      <GlobalStyle/>
      <HeaderContainer/>
      <IntroContainer/>
    </>
  )
}


