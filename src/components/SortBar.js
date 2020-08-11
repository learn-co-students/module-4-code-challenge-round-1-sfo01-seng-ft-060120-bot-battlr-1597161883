import React from 'react'


const SortBar = props => {

    return (
        <div className="sort-bar">
                <h3>Filter Bots By: </h3>
                <select id="filterBots" name="bots" onChange={(e) => props.handleFilter(e.target.value)}>
                    <option value="health">Health</option>
                    <option value="damage">Damage</option>
                    <option value="armor">Armor</option>
                </select>
        </div>
    );
}

export default SortBar