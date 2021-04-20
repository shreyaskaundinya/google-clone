import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from '../../components/Search/Search';

function HomePage() {
    return (
        <div className='home'>
            <div className='home__header'>
                <div className='home__headerLeft'>
                    {/* Link to About */}
                    <Link to='/about'>About</Link>
                    {/* Link to Store*/}
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home__headerRight'>
                    {/* Link */}
                    <Link to='/gmail'>Gmail</Link>
                    {/* Link */}
                    <Link to='/images'>Images</Link>
                    {/* Icon */}
                    <AppsIcon />
                    {/* Account Avatar */}
                    <Avatar />
                </div>
            </div>
            <div className='home__body'>
                <img
                    className='home__bodyLogo'
                    src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                    alt='google'
                />
                <div className='home__inputContainer'>
                    <Search />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
