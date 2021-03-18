import React, {useState} from "react"

import Sidebar from "./Sidebar"
import {Header} from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children}) => {

      const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }
 
  return (
    <>
      <GlobalStyle />
      <Sidebar toggle={toggle} isOpen={isOpen}/>
      <Header toggle={toggle}/>
        <main>{children}</main>
    </>
  )
}

export default Layout
