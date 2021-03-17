import React from 'react'
import styled from "styled-components";
import img1 from "./../images/night.jpg"
import img2 from "./../images/logo.svg"
import {Button} from "./Button"


const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <PictureBg></PictureBg>
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <LogoImg src={img2} alt="image"/>
                    <HeroH1>Modernly Crafted</HeroH1>
                    <HeroP>Professionally Designed</HeroP>
                    <Button round="true" big="true" to="/gallery">See Our Work</Button>
                </HeroItems>
                
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -140px;
    background-image: url(${img1});
    background-repeat: no-repeat;
    background-size: cover;

    :before {
        content: "";
        position: absolute;
          top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), 
            linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    }
`
const HeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%; 
    height: 100%; 
    overflow: hidden;
`

const PictureBg = styled.image`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const HeroContent = styled.div`
    z-index: 3;
    height: calc(100vh - 540px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`
const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
`

const HeroH1 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 2rem);
    margin-bottom: 1rem;
    letter-spacing: 3px;
    padding: 0 1rem;

     @media screen and (max-width: 768px) {
    display: none;
      }
`

const HeroP = styled.p`
    font-size: clamp(1rem, 3vw, 1.4rem);
    margin-bottom: 3rem;
    font-weight: 400;
    margin-bottom: 124px;

     @media screen and (max-width: 768px) {
    display: none;
      }
`

const LogoImg = styled.img`
        max-width: 100%;
        max-height: 100%;
        width: 645px;
        display: flex;
        z-index: 5;
        margin-top: 178px;
        margin-bottom: 1rem;

`
