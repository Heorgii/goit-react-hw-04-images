import PropTypes from 'prop-types';
import { useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Searchbar = ({onSubmit}) => {
    const [query, setQuery] = useState('');


    const handleInputChange = e => {
        setQuery(e.target.value.toLowerCase());
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (query === '') {
            toast.error('Sorry, there are no images matching your search query. Please try again.');
            return;
        }

        onSubmit(query);
    }

    return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={handleSubmit}>

                <input
                    onInput={handleInputChange}
                    value={query}
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />

                <button type="submit" className="SearchForm-button">
                    <span>Search</span>
                </button>
            </form>
        </header>
    );
}

Searchbar.protoType = {
    onSubmit: PropTypes.func,
}

export default Searchbar;