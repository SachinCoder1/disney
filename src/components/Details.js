import React, {useEffect, useState} from 'react'
import backImm from '../images/slider-badging.jpg'
import styled from 'styled-components'
import playWhite from '../images/play-icon-white.png'
import playBlack from '../images/play-icon-black.png'
import groupIcon from '../images/group-icon.png'
import {useParams} from 'react-router-dom'
import db from '../firebase'
import Loading from './Loading'

function Details() {
    const {id} = useParams()
    console.log(id)
    const [movie, setmovie] = useState()
    
    useEffect(() => {
        db.collection("movies").doc(id).get().then((doc) => {
            setmovie(doc.data())
        })
    }, [])  
    console.log("this is a detail Movie", movie)


    return (
        <Container>
        {movie ?  (
            <>
            <BackImg>
                <img src={movie.image} alt="" />
            </BackImg>
            <DetailCont>
                <h1> 
                   {movie.title}
                </h1>
                <ButtonCont>
                    <PlayBtn>
                        <img src={playBlack} alt="" /><span>Play</span>
                    </PlayBtn>
                    <TrailerBtn>
                        <img src={playWhite} alt="" /><span>Trailer</span>
                    </TrailerBtn>
                    <AddBtn>
                        <span>+</span>
                    </AddBtn>
                    <GroupBtn>
                        <img src={groupIcon} alt="" />
                    </GroupBtn>
                </ButtonCont>
                <p>5.0 | 2h 23m  | 18+ | 2020</p>
                <p>{movie.description}</p>
            </DetailCont>

            </>
           
        ): <Loading /> }
           
        </Container>
    )
}

export default Details

const Container = styled.div`
margin-top: 20px;
padding: 20px 50px;
color: white;
position: relative;

`

const BackImg = styled.div`
z-index: -1;
position: fixed;
top: 50px;
left: 0;
bottom: 0;
right: 0;
opacity: 0.7;
${'' /* width: 100vw; */}
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

const ButtonCont = styled.div`
display: flex;
${'' /* justify-content: center; */}
align-items: center;

`
const PlayBtn = styled.div`
${'' /* width: 30%; */}
padding: 5px 30px;
background-color: white;
color: black;
display: flex;
justify-content: center;
align-items: center;
margin: 10px 5px;
cursor: pointer;
text-transform: uppercase;
&:hover{
    background: rgb(198,198,198)
}

`
const TrailerBtn = styled(PlayBtn)`
    background: rgb(122, 116, 116);
    color: white;
    &:hover{
    ${'' /* background: rgb(198,198,198); */}
}
`
const AddBtn = styled(PlayBtn)`
${'' /* border: 2px solid black; */}
background-color: white;
color: black;
padding: 5px 20px;
${'' /* font-size: 40px; */}
font-weight: bolder;
border-radius: 50%;
font-size: 30px;

`
const GroupBtn = styled(AddBtn)`
background-color: black;
padding: 9px 10px;

`
const DetailCont = styled.div`
  width: 50vw;
  ${'' /* padding: 20px; */}
  ${'' /* margin-top: 10px; */}
  ${'' /* z-index: 5; */}
  p{
  ${'' /* background-color: black; */}
      padding: 5px 10px;
      z-index: 5;
  }
  h1{
      font-size: 5vw;
      z-index: 5;
  }
`

