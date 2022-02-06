import React, {useEffect} from 'react'
import styled from 'styled-components'
import Slider from './SlideImage'
import bgImage from '../images/home-background.png'
import Companies from './Companies'
import Movies from './Movies'
import db from '../firebase'
import MovieItem from './MovieItem'
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movie/movieSlice'


function Home() {
  const dispatch = useDispatch();
    
     useEffect(() => {
      //  return  () => {
        db.collection("movies").onSnapshot((snapshot)=>{
            let tempMovies = snapshot.docs.map((doc)=>{
              // console.log(doc.data())
              return {id: doc.id, ...doc.data()}
            })
            dispatch(setMovies(tempMovies))
            console.log(tempMovies)

        })
      //  }
     }, [])
     

    return (
      <>
      <Container>

      <SlideCont>
        <Slider />
      </SlideCont>
      <Companies />
      <MovieItem />

      
      </Container>
      </>
    )
}

export default Home

const Container = styled.div`
  
  ${'' /* width: 100vw; */}
  min-height: 100vh;
  background-image:url(${bgImage});
background-repeat: repeat;
background-size: cover;
background-position: top center;
`

const SlideCont = styled.div`
${'' /* margin-top:5px; */}

`
