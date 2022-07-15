import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Search from '../../components/Search'
import './SearchResult.css'
import SearchIcon from '@mui/icons-material/Search';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import Card from '../../components/card/Card';

import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';

const SearchResult = () => {
    const location = useLocation()
    const search = location.pathname.split('/')[2]

    const [result, setResult] = useState(null)

    useEffect(() => {
        const searchFun = async () => {
            const res = await axios(`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=e609bf087565ed3a8&q=${search}`)
            console.log(res)
            setResult(res.data)
        }
        searchFun()
    }, [search])

    return (
        <div className='search-result'>
            <div className="search-result-header">
                <div className="left">
                    <div className="google-branding">
                        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
                    </div>
                    <div className="search-area">
                        <Search hideButtons />
                        <div className="search-options">
                            <div className="left">
                                <div className="option">
                                    <SearchIcon />
                                    <p>All</p>
                                </div>
                                <div className="option">
                                    <NewspaperIcon />
                                    <p>News</p>
                                </div>
                                <div className="option">
                                    <ImageIcon />
                                    <p>Images</p>
                                </div>
                                <div className="option">
                                    <LocalOfferIcon />
                                    <p>Shopping</p>
                                </div>
                                <div className="option">
                                    <LocationOnIcon />
                                    <p>Maps</p>
                                </div>
                                <div className="option">
                                    <MoreVertIcon />
                                    <p>More</p>
                                </div>
                            </div>
                            <div className="right">
                                <p>Settings</p>
                                <p>Tools</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <SettingsIcon className='right-options' />
                    <AppsIcon className='right-options' />
                    <Avatar className='right-options' />
                </div>
            </div>
            <hr />
            <div className="result-container">
                <div className="search-stat">
                    {result && <p>About {result.searchInformation.formattedTotalResults} results ({result.searchInformation.formattedSearchTime} seconds)</p>}
                </div>
                {result && result.items.map(item => (
                    <Card key={item.cacheId} link={item.link} displayLink={item.displayLink} title={item.title} snippet={item.snippet}
                        pagemap={item.pagemap}
                    />
                ))}
            </div>

        </div>
    )
}

export default SearchResult
