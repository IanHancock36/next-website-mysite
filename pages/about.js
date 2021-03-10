import Head from 'next/head'
import BackgroundVideo from '../components/BackgroundVideo'



export default function About() {
  
  return (
    <div>
    
      <Head>
      <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      
    <h1>About</h1>
    <p> Hello I'm Ian Hancock I am a first year Front end Web-Developer born and Raised in Nikiski Alaska residing in Ft Worth Texas</p>
    <h2>Intrests</h2>
      <BackgroundVideo/ >
    </div>
  )
}