import * as React from "react"
import { Link } from "gatsby";
import styled from "styled-components";
import {FaBars} from "react-icons/fa";

import { menuData } from "../data/MenuData"
import {Button} from "./Button"


const Header = ({toggle}) => {
  return (
    <Nav>
      <NavLink to="/">Garden Glow</NavLink>
      <MobileIcon onClick={toggle}>
        <Bars/>
      </MobileIcon>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
          <Button round="true" to="/consultation">Book a Consultation</Button>
      </NavBtn>
    </Nav>
  )
}


export default Header

const Nav = styled.nav`
  background: transparent;
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2.5rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-length: 768px) {
    display: none;
  }
  `

  const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`
