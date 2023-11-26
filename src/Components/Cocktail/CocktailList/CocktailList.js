import React from 'react';
import CocktailItem from '../CocktailItem/CocktailItem';

const CocktailList = ({cocktails}) => {
    return (
        <div className='row'>
            {
                cocktails.map(cocktail => 
                    <div key={cocktail.idDrink} className='col-3'>
                        <CocktailItem cocktail={cocktail} />
                    </div>
                )
            }
        </div>
    );
}

export default CocktailList;
