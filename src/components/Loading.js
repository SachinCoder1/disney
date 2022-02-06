import React from 'react'
import styled from 'styled-components'
import gatsbyIconImage from '../images/Spinner-1s-200px.svg'

function Loading() {
    return (
        <Loader>

          <div>
        <img src={gatsbyIconImage} />

          </div>
        </Loader>
        
    )
}

export default Loading

const Loader = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   img{
       object-fit: cover;
   }

`





