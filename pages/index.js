import Head from 'next/head'
import styled from 'styled-components';


const Hero = styled.div ` 
 height: 90vh;
 display: flex;
 justify-content: center;
 align-items: center;
 background: #fff;

`
const Heading = styled.h1 ` 
color: #000;
font-size: 10rem;
font-weight :900;

`

export default function Home() {
  return (
    <>
      <Head>
      <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      
      </Head>
      <Hero>
        <Heading>
        {/* <div className ="video-container"> */}
          {/* <video src ="/video/backgroundVideo.mp4" autoPlay loop muted/> */}
        {/* </div> */}
        
      
        </Heading>
        <video src ="/video/backgroundVideo.mp4" autoPlay loop muted/>
      </Hero>
      <p>Hey there everyone</p>
   

   </>   

  );
}
