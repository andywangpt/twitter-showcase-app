import React from 'react'
import twitterLogo from '../Assets/twitter.png'

function Home() {
  return (
    <div className='container-lg p-3 my-3 bg-dark text-white align-items-center'>
      
      <img className='twitter-logo mx-auto d-block img-fluid max-width:50% ' src={twitterLogo} alt='twitter logo' />

      <p className='lead'>
          This web app utilizes the Twitter API to fetch user tweets and present them in different ways. 
          <br></br><br></br>
          Use the user search feature to search through your favorite user tweets or search by your favorite Twitter topic. 
          <br></br><br></br>
          You can also select from my recommended list of Twitter users to fetch a random tweet.
      </ p>
      
      <a 
        href="../Assets/twitter.png" 
        className='attribute' 
        title="twitter icons">
        Twitter icons created by Pixel perfect - Flaticon
      </a>

    </div>
  )
}

export default Home

/*
      <img 
        src='/Users/andywang/codingProjectsMac/twitter-showcase-app/client/src/Assets/twitter.png' 
        alt='Twitter icons created by Pixel perfect - Flaticon'>
      </img>

*/