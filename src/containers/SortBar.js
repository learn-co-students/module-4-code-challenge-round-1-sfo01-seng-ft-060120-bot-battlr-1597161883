import React from 'react';

const SortBar = ({handleSort, sortByMethod}) => {
    return (
        <div>
            <label>Sort by (ascending order):</label>
            <div onChange={(e) => handleSort(e)}>
                <label>
                <input type="radio" name="sort-method" value="health"/>
                Health </label>
                <label>
                <input type="radio" name="sort-method" value="damage" />
                Damage</label>
                <label>
                <input type="radio" name="sort-method" value="armor"/>
                Armor</label>
                <h2> </h2>
            </div>
        </div>
    )
}

export default SortBar