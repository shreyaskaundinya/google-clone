import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

function Search({ hideButtons = false }) {
    //
    var [{}, dispatch] = useStateValue();

    var [searchText, setSearchText] = useState('');

    // gives us the ability to use the browser history
    var history = useHistory();

    var getResults = (e) => {
        e.preventDefault();
        // when search btn is clicked
        // update the search text in the global state
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: searchText,
        });
        // search results
        // push to history
        history.push('/search');
    };

    return (
        <form className='Search'>
            <div className='search__form'>
                <SearchIcon className='search__formSearchIcon' />
                <input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className='search__formInput'
                />
                <MicIcon />
            </div>
            <div
                className={
                    hideButtons ? 'search__buttonsHidden' : 'search__buttons'
                }>
                <Button onClick={getResults} variant='outlined' type='submit'>
                    Google Search
                </Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button>
            </div>
        </form>
    );
}

export default Search;
