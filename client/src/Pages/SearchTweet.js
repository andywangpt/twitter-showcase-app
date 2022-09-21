import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo512 from '../Assets/logo512.png'
import icons8love48 from '../Assets/icons8love48.png'
import icons8retweet from '../Assets/icons8retweet.png'

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
                <input className="col-6" type='text' value={userInput} onChange={handleInputChange} placeholder='search for tweets' />
                <button className='btn-dark col-3' onClick={searchButton}>Search By User</button>
                <button className='btn-dark col-3' onClick={searchButton}>Search By User</button>
            </div>
            
                <div className='card w-50 mt-4'>
                    <div className= 'card-header'>
                        <div className='row'>
                            <div className='col-1'>
                                <img src={logo512} width='50' alt='logo'/>
                            </div>

                            <div className='col'>
                                <div className='row h-25'>
                                    <h5 className=' col-3'> UserName 1 </h5>
                                    <img src={icons8love48} width='50' className='col-8 align-items-right w-25'  alt='like'/>
                                  
                                </div>
                                <div className='row h-25'>
                                    <div className='row'>
                                        <h5 className=' col-3'> @UserName 2 </h5>
                                        <img src={icons8retweet} className='col-8 align-items-right' alt='retweet'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className='card-text'>Lorem ipsum dolor</p>
                    <button className='btn btn-dark'>Button One</button>
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