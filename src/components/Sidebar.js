import React from 'react'
import styled from "styled-components"
import {FaTimes} from "react-icons/fa";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink onClick={toggle}>About</SidebarLink>
                <SidebarLink onClick={toggle}>Gallery</SidebarLink>
                <SidebarLink onClick={toggle}>Services</SidebarLink>
                <SidebarLink onClick={toggle}>Book a Consultation</SidebarLink>
                
            </SidebarMenu>
        
            
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen}) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen}) => (isOpen ? "0" : "-100%")};
`

const CloseIcon = styled(FaTimes)`
    color: #fff;
    `

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    `

const SidebarMenu = styled.ul`
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, 80px);
        text-align: center;

        @media screen and (max-width: 480px) {
            grid-template-rows: repeat(6, 60px);
        }
        `

const SidebarLink = styled.a`
        display: flex;
        align-items:center;
        justify-content: center;
        font-size: 1.5rem;
        text-decoration: none;
        list-style: none;
        transition: 0.2s ease-in-out;
        text-decoration: none;
        color: #fff;
        cursor: pointer;
        
        &:hover {
            color: #01bf71;
        }
`
