import styled from "styled-components"
// import {Link} from "react-router-dom"
import React from 'react'
// import {animateScroll as scroll } from "react-scroll"
import {FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaGoogle, FaApple} from "react-icons/fa"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink >How it Works</FooterLink>
                                <FooterLink >Our Platform</FooterLink>
                                <FooterLink >News</FooterLink>
                                <FooterLink >Terms of Service</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                             <FooterLinkItems>
                            <FooterLinkTitle>Work With Us</FooterLinkTitle>
                                <FooterLink >Twitter</FooterLink>
                                <FooterLink >Facebook</FooterLink>
                                <FooterLink >LinkedIn</FooterLink>
                                <FooterLink >Instagram</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>Garden Glow</SocialLogo>
                        <WebsiteRights>GardenGlow Landscape Lighting © {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="//www.play.google.com" target="_blank" aria-label="Google Play">
                                <FaGoogle />
                            </SocialIconLink>
                            <SocialIconLink href="//www.apple.com/app-store" target="_blank" aria-label="Apple">
                                <FaApple />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer


const FooterContainer = styled.footer`
    background: linear-gradient(
        180deg,
        rgba(0,0,0,0.8) 0%,
        rgba(0,0,0,0.9) 35%,
        rgba(0,0,0,1) 100%
    )
`

const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    `

const FooterLinksContainer = styled.div`
        display: flex;
        justify-content: center;

        @media screen and (max-width: 820px) {
            padding-top: 32px;
        }
    `

const FooterLinksWrapper = styled.div`
        display: flex;

        @media screen and (max-width: 820px) {
            flex-direction: column;
        }
    `

const FooterLinkItems = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 16px;
        text-align: left;
        width: 160xp;
        box-sizing: border-box;
        color: #fff;
    
    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

const FooterLink = styled.a`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    
    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }`

const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

const SocialLogo = styled.a`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px
`