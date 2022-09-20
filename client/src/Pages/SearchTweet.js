import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchTweet() {

    let navigate = useNavigate()
    let {username} = useParams

    const [userInput, setUserInput] = useState('')
    //const [searchValue, setSearchValue] = useState('')
    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    }

    function searchButton () {
        //setSearchValue(userInput)
    }

    return (
        <div className='container-fluid d-flex flex-column align-items-center justify-content-center'>

            <div className='row'>
                <h1>Search Tweet for {username}</h1>
                <button onClick={() => { navigate('/home') }}>
                    change to home page
                </button>
            </div>

            <div className='row w-50 mt-4 pt-4 mb-4 pt-4'>
                <input type='text' value={userInput} onChange={handleInputChange} placeholder='search for tweets' className="w-75"/>
                <button className='btn-primary w-25' onClick={searchButton}>Search</button>
            </div>
            
            <div className='container'>
                <div className='card'>
                    <h5 className='card-title'>Card Title</h5>
                    <p className='card-text'>Lorem ipsum dolor</p>
                    <button className='btn btn-primary'>Button One</button>
                </div>
            </div>
        </div>
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