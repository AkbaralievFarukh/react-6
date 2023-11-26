import React from 'react';
import './CocktailItem.css'

const CocktailItem = ({cocktail}) => {
    return (
        <div className='box'>
            <img className='cocktail__img' src={cocktail.strDrinkThumb} alt="" />
            <h4 className='cocktail__title'>{cocktail.strDrink}</h4>
        </div>
    );
}

export default CocktailItem;
