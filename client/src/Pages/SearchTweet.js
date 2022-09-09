import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function SearchTweet() {

    let navigate = useNavigate()
    let {username} = useParams

    return (
        <div className='container'>
            <h1>Search Tweet for {username}</h1>
            <button onClick={() => {navigate('/home')}}>
            change to home page
            </button>    
        </div>
    )
}

export default SearchTweet