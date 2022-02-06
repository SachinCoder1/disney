import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import {
    Link
  } from "react-router-dom";
  import { auth, provider } from '../firebase';
import logo from '../images/logo.svg';
import movie from '../images/movie-icon.svg';
import series from '../images/series-icon.svg';
import home from '../images/home-icon.svg';
import original from '../images/original-icon.svg';
import search from '../images/search-icon.svg';
import watchlist from '../images/watchlist-icon.svg';

import {
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    setSignOut
} from "../features/user/userSlice"
import { useDispatch, useSelector} from "react-redux"


function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() => {
        auth.onAuthStateChanged(async (user) =>{
            if(user){
                // let user = result.user
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                navigate("/")
            }else{
                navigate("/login")
            }
        })
    }, [])

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            console.log(result)
            let user = result.user
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            navigate("/")
        })
    }
    // console.log(userName, "and ", userPhoto)
    const signOut = ()=>{
        auth.signOut().then(()=>{
            dispatch(setSignOut())
            navigate("/login")
        })
    }

    return (
        <>
            <NavCont>
                <Logo>
                <img src={logo} alt="" />
                </Logo>
                {!userName ? (
                    <LoginCont>
                    <Login onClick={signIn}>Login</Login>
                    </LoginCont>
                 ): 

                <>
                <MainMenu>
                    <li>  <Link to="/"><img src={home} alt="" />home</Link></li>
                    <li>  <Link to="/"><img src={search} alt="" />search</Link></li>
                    <li>  <Link to="/"><img src={movie} alt="" />Movies</Link></li>
                    <li>  <Link to="/"><img src={series} alt="" />series</Link></li>
                    <li>  <Link to="/"><img src={original} alt="" />original</Link></li>
                    <li>  <Link to="/"><img src={watchlist} alt="" />watchlist</Link></li>
                </MainMenu>
                <RightMenu onClick={signOut}>
                   <img src={userPhoto && userPhoto} alt="" />
                </RightMenu>
                </>
                
                }
               
            </NavCont>
        </>
    )
}

export default Navbar

const NavCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0f1522;
    max-height: 6vh;
    padding: 10px 20px;

    `
const Logo = styled.div`
  color: white;
  img{
      width: 70px;
  }
`;
const MainMenu = styled.div`
    display: flex;
    align-items: center;
    list-style-type: none;
   
    
    img{
      width: 20px ;
  }
  a{
    display: flex;
    align-items: center;
        text-decoration: none;
        color: white;
        text-transform: capitalize; 

  }
    li{
       
        padding: 0px 10px;
        position: relative;
       
       
      
  
        &:after{
        content :"";
        height: 2px;
        width: 0px;
        background-color: white;
        position: absolute;
        bottom: -2px;
        left: 30px; 
        transition: width 250ms ease-in-out;       
    }
     &:hover{
         &:after{
             width: 50px;
         }
     }
    }
    
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    width: 3.5%;
    ${'' /* overflow: hidden; */}
img{
    cursor: pointer;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

const LoginCont = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;

`
const Login = styled.div`

border: 1px solid white;
padding: 8px 16px;
border-radius: 8px;
text-transform: uppercase;
letter-spacing: 1.5px;
color: white;
cursor: pointer;
transition: all 250ms ease;
&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
}
`