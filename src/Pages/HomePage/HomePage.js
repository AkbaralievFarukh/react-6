import React, { useEffect, useState } from 'react';
import CocktailList from '../../Components/Cocktail/CocktailList/CocktailList';
import axios from 'axios';
import './HomePage.css'

const HomePage = () => {

    const [cocktails, setCoctails] = useState([])

    useEffect(() => {
        axios('https://www.thecocktaildb.com/api/json/v2/1/popular.php')
        .then(({data}) => setCoctails(data.drinks))
    }, [])

    return (
        <main className='main'>
            <section className='main__section'>
                <div className='container'>
                    <h1 className='main__title'>Home Page</h1>
                    <CocktailList cocktails={cocktails} />
                </div>
            </section>
        </main>
    );
}

export default HomePage;
