import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './SearchPage.css'
import CocktailList from '../../Components/Cocktail/CocktailList/CocktailList';

const SearchPage = () => {

    const [name, setName] = useState('')
    const [cocktails, setCoctails] = useState([])

    const handleGetName = (e) => {
        setName(e.target.value)
    }

    const handleSearch = () => {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
            .then(({ data }) => setCoctails(data.drinks))
            .catch((error) => {
                console.error(error)
                setCoctails([])
            })
    }

    return (
        <main>
            <section>
                <div className='container'>
                    <h1 className='main__title'>Search Page</h1>
                    <div className='search-cocktail'>
                        <input type="text"
                            className='search-cocktail__input'
                            placeholder='Entern name cocktail:'
                            value={name}
                            onChange={handleGetName} />
                        <button className='search-cocktail__button'
                            onClick={handleSearch}>
                                Search
                        </button>
                    </div>
                    <CocktailList cocktails={cocktails} />
                </div>
            </section>
        </main>
    );
}

export default SearchPage;
