import { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from './keys';

const CONTEXT_KEY = '3e30ca1ed65d0cf65';

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            );
            setData(res.data);
        };
        fetchData();
    }, [term]);
    return { data };
};

export default useGoogleSearch;
