import React from 'react';
import CocktailItem from '../CocktailItem/CocktailItem';
import './CocktailList.css'

const CocktailList = ({cocktails}) => {
    return (
        cocktails ? (
            <div className='row'>
            {
                cocktails.map(cocktail => 
                    <div key={cocktail.idDrink} className='col-3'>
                        <CocktailItem cocktail={cocktail} />
                    </div>
                )
            }
        </div>
        ) : (
            <div className='error'>
                <h3 className='error__text'>Not Found</h3>
                <img className='error__img' src="https://cdn.pixabay.com/photo/2016/03/12/14/19/error-404-1252056_1280.png" alt="" />
            </div>
        )
    );
}

export default CocktailList;
