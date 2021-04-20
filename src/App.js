import './App.css';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className='app'>
            <Router>
                <Switch>
                    <Route path='/search'>
                        <SearchPage />
                        {/* SearchPage (The results page) */}
                    </Route>
                    <Route path='/'>
                        {/* Home Page (page to search on) */}
                        <HomePage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
