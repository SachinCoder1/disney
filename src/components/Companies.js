import React from 'react'
import styled from 'styled-components'
import disney from '../images/viewers-disney.png'
import marvel from '../images/viewers-marvel.png'
import national from '../images/viewers-national.png'
import pixar from '../images/viewers-pixar.png'
import starwars from '../images/viewers-starwars.png'
import Hoverone from '../components/Hoverone'
import disneyVideo from '../videos/1564674844-disney.mp4'
import marvelVideo from '../videos/1564676115-marvel.mp4'
import geographicVideo from '../videos/1564676296-national-geographic.mp4'
import pixarVideo from '../videos/1564676714-pixar.mp4'
import starwarsVideo from '../videos/1608229455-star-wars.mp4'



function Companies() {
    return (
        <Container>
            <div>
                <Hoverone videoSrc={starwarsVideo} imageSrc={starwars} />
            </div>
            <div>
                <Hoverone videoSrc={disneyVideo} imageSrc={disney} />
            </div>
            <div>
                <Hoverone videoSrc={marvelVideo} imageSrc={marvel} />
            </div>
            <div>
                <Hoverone videoSrc={geographicVideo} imageSrc={national} />
            </div>
            <div>
                <Hoverone videoSrc={pixarVideo} imageSrc={pixar} />
            </div>

        </Container>
    )
}

export default Companies

const Container = styled.div`

                display: grid;
                grid-template-columns: repeat(5, 1fr);
                margin: 50px auto;
                grid-gap: 25px;
                width: 95vw;
                div{
                    transition: all 250ms ease-in-out;
                 
                cursor: pointer;
                ${'' /* box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px; */}
                height: 100%;
                
                &:hover{
                    ${'' /* transform: scale(1.05) */}
                }                 
}

                `