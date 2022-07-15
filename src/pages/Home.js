import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from '../components/Search';

const Home = () => {
    return (
        <div className='home'>
            <div className="home-header">
                <div className="home-header-left">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className="home-header-right">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="head-body">
                <div className="google-branding">
                    <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
                </div>
                <Search />
            </div>
        </div>
    )
}

export default Home
