import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

function Search({ filterMangasBytitle }) {
    const [titleQuery, setTitleQuery] = useState('');

    const handleQueryChange = e => {
        const inputValue = e.target.value;
        setTitleQuery(inputValue);
        filterMangasBytitle(inputValue);
    };

    return (
        <form className="Search">
            <input type="text" placeholder="🔎 Enter a manga title ..." value={titleQuery} onChange={handleQueryChange} />
        </form>
    );
}

Search.propTypes = {
    filterMangasBytitle: PropTypes.func.isRequired,
};

export default Search;
