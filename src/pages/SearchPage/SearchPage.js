import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../../StateProvider';
import useGoogleSearch from '../../useGoogleSearch';
import Response from '../../response';
import { Link } from 'react-router-dom';
import Search from '../../components/Search/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
    //
    var [{ term }, dispatch] = useStateValue();
    // LIVE API CALL
    const { data } = useGoogleSearch(term);

    // MOCK API CALL
    // const data = Response;
    // console.log(data.items);

    const searchResultsComponents = data?.items.map((item) => {
        return (
            <div className='searchPage__result'>
                <a href={item.link} className='searchPage__resultLink'>
                    {item.pagemap.cse_image !== undefined ? (
                        <img
                            className='searchPage__resultsLinkImg'
                            src={item.pagemap.cse_image[0].src}
                            alt=' '
                        />
                    ) : (
                        ''
                    )}

                    {item.link}
                </a>
                <a href={item.link} class='searchPage__resultTitle'>
                    <h2>{item.title}</h2>
                </a>
                <p className='searchPage__resultSnippet'>{item.snippet}</p>
            </div>
        );
    });
    console.log(searchResultsComponents);
    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Link to='/'>
                    <img
                        className='searchPage__logo'
                        src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                        alt='google'
                    />
                </Link>
                <div className='searchPage__headerBody'>
                    <Search hideButtons />
                    <div className='searchPage__options'>
                        <div className='searchPage__optionsLeft'>
                            <div className='searchPage__option'>
                                <SearchIcon />
                                <Link to='/all'>All</Link>
                            </div>
                            <div className='searchPage__option'>
                                <DescriptionIcon />
                                <Link to='/news'>News</Link>
                            </div>
                            <div className='searchPage__option'>
                                <ImageIcon />
                                <Link to='/img'>Images</Link>
                            </div>
                            <div className='searchPage__option'>
                                <LocalOfferIcon />
                                <Link to='/shop'>Shopping</Link>
                            </div>
                            <div className='searchPage__option'>
                                <RoomIcon />
                                <Link to='/map'>Map</Link>
                            </div>
                            <div className='searchPage__option'>
                                <MoreVertIcon />
                                <Link to='/more'>More</Link>
                            </div>
                        </div>
                        <div className='searchPage__optionsRight'>
                            <div className='searchPage__option'>
                                <Link to='/more'>Settings</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to='/more'>Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {true && (
                <div className='searchPage__results'>
                    <div class='searchPage__resultsCount'>
                        <p>{`About ${data?.searchInformation.formattedTotalResults} results (${data?.searchInformation.formattedSearchTime} seconds) for ${term}`}</p>
                    </div>
                    {searchResultsComponents}
                </div>
            )}
        </div>
    );
}

export default SearchPage;
