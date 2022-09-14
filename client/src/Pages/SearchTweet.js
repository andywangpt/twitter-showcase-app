import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchTweet() {

    let navigate = useNavigate()
    let {username} = useParams

    const [userInput, setUserInput] = useState('')
    const [searchValue, setSearchValue] = useState(''
    )
    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    }

    function searchButton () {
        setSearchValue(userInput)
    }

    return (
        <>
            <div className='w-25 p-3'>
                <input className='w-25 p-3' type='text' value={userInput} onChange={handleInputChange} placeholder='search for tweets' />
                <button className='btn-primary' onClick={searchButton}>Search</button>
            </div>

            <div className='container'>
                <h1>Search Tweet for {username}</h1>
                <button onClick={() => {navigate('/home')}}>
                    change to home page
                </button>    
            </div>
        
        </>
 
    )
}

export default SearchTweet

// add search bar - search by user or content
// tweet container
// - heart icon
// - retweet icon


//<a target="_blank" href="https://icons8.com/icon/19411/love">Love</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/Mjt9Tkm04cgv/love">Love</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/20733/retweet">Retweet</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>