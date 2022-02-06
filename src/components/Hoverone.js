import HoverVideoPlayer from "react-hover-video-player";
import styled from "styled-components";
export default function Hoverone(props) {
   


  return (
    <HoverCont>


      <HoverVideoPlayer
        videoSrc={props.videoSrc}
        pausedOverlay={
          <img
            src={props.imageSrc}
            alt=""
            style={{
              // Make the image expand to cover the video's dimensions
              width: '100%',
              height: '100%',
              objectFit: 'cover'
              
            }}
          />
        }
      />
    </HoverCont>
  );
}

const HoverCont = styled.div`
${'' /* border: 3px solid white; */}
border-radius: 10px;
transition: all 250ms ease-in-out;           
 cursor: pointer;
 box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
 ${'' /* width: 100%;
 height: 100%; */}
 img{

 }
 video{

   min-width: 100%;
   min-height: 100%;
   border-radius: 10px;
 }
 &:hover{
     transform: scale(1.05)
 } 


`