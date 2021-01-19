// React
import React from 'react';

const Filter = (props) => {
    // JSX
    return (
        <div className='filter'>
            <div className="filter-result"><h3><i class="fas fa-list-ol" /> <span className='pink'>{props.count}</span> Products</h3></div>
            <div className="filter-sort">
                <h3><i class="fas fa-dollar-sign" /> Order</h3>
                <select value={props.sort} onChange={props.handleSort}>
                        <option value="Latest">Latest</option>
                        <option value="Oldest">Oldest</option>
                        <option value="Lowest">Lowest</option>
                        <option value="Highest">Highest</option>
                </select>
            </div>
            <div className="filter-size">
                <h3><i class="fas fa-tshirt" /> Sizes</h3> 
                <select value={props.size} onChange={props.handleSize}>
                    <option value="All">All</option>
                    <option value="XS">XS</option> 
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div> 
    );
}

export default Filter;