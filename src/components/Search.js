import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import './Search.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Search = ({ hideButtons = false }) => {

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`/search/${search}`)
    }

    return (
        <form className='search' onSubmit={handleSearch}>
            <div>
                <div className={`search-container ${hideButtons ? 'search-container-hide' : ''}`}>
                    <div className="input-area">
                        <SearchIcon className='search-icon' />
                        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
                        <MicIcon />
                    </div>
                </div>
            </div>
            {!hideButtons &&
                <div className="buttons">
                    <Button type='submit' variant='outlined'>Google Search</Button>
                    <Button variant='outlined'>I'm Feeling Lucy</Button>
                </div>}
        </form>
    )
}

export default Search
