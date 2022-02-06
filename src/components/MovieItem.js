import React from 'react'
import styled from 'styled-components'
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loading from './Loading'

function Companies() {
    const movies = useSelector(selectMovies)
    //     console.log("This is movies", movies.map((movie, index)=>{
    //      return movie.image
    // }))
    return (
        <MovieCont>
            <h3>
                Movies recommended for you
            </h3>

            <Container>

                {
                    movies == "" ? "Loading..." : movies.map((movie, index) => {
                        console.log(movie.image)
                        return (
                           
                            <div>
                            <Link to= {`/details/${movie.id}`}>
                                <img src={movie.image? movie.image : "https://lh3.googleusercontent.com/2iBfnzYDQNd_KY-vtOpq1pqAEhegSq3BDNKefAusDl5LnuNzJO8uZ8FpaBNpRb8TQ7WjySpEGL-imS87LNMWL0PORKbPIpCpFNEyem1o=h450"} alt="" />
                               </Link>
                            </div>
                        )

                    })

                }
            </Container>
        </MovieCont>
    )
}

export default Companies
const MovieCont = styled.div`
h3{
width: 90%;
margin:0px 30px;
color: white;

}
`
const Container = styled.div`
text-align: center;
font-size: 20px;
font-weight: bold;

display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 20px;
margin: 30px auto;
width: 95vw;
color: white;

div{
    height: 29vh;
    ${'' /* margin: 0px 20px; */}
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 89%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms ease-in-out;
    transform: scale(0.8);
    &:hover{
    transform: scale(1.05);
    
}
}
img{
    width:100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid white;
    border-radius: 15px;
    transition: all 200ms ease-in-out;
    &:hover{
      
       border: 2px solid white;
    
    }

}

`
