import React, { useState, useEffect } from 'react'
import { AboutContainer } from './container/about'
import { FooterContainer } from './container/footer'
import { HeaderContainer } from './container/header'
import { IntroContainer } from './container/intro'
import { LoadingContainer } from './container/loading'
import { ProjectContainer } from './container/project'

import { GlobalStyle } from './global-style'

//App Component
export default function App() {
  const [display, setDisplay ] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setDisplay(!display)
    },3000)
  },[])
  return (
    
    display ?
    <>
      <GlobalStyle/>
      <HeaderContainer/>
      <IntroContainer/>
      <ProjectContainer/>
      <AboutContainer/>
      <FooterContainer/>
    </> :
    <>
      <GlobalStyle/>
      <LoadingContainer/>
    </>
  )
}


