// React
import React from 'react';
// React-Redux
import { connect } from 'react-redux';
// Actions*
import { filterProducts, sortProducts } from '../redux/actions/productActions';

const Filter = (props) => {
    // JSX
    return (
        !props.filteredProducts ? 
        <div>Loading...</div>
        :
        <div className='filter'>
            <div className="filter-result"><h3><i class="fas fa-list-ol" /> <span className='pink'>{props.filteredProducts.length}</span> Products</h3></div>
            <div className="filter-sort">
                <h3><i class="fas fa-dollar-sign" /> Order</h3>
                <select value={props.sort} onChange={(e) => props.sortProducts(props.filteredProducts, e.target.value)}>
                        <option value="Latest">Latest</option>
                        <option value="Oldest">Oldest</option>
                        <option value="Lowest">Lowest</option>
                        <option value="Highest">Highest</option>
                </select>
            </div>
            <div className="filter-size">
                <h3><i class="fas fa-tshirt" /> Sizes</h3> 
                <select value={props.size} onChange={(e) => props.filterProducts(props.products, e.target.value)}>
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

export default connect(state => ({
    // MapStateToProps
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
}), {
    // MapDispatchToProps
    filterProducts, 
    sortProducts,
})(Filter)