import React, { Component } from 'react';
import Product from './product';

class Products extends Component{
    state = {
        products:[
            {id:1, count:2, productName: 'laptop'},
            {id:2, count:4, productName: 'phone'},
            {id:3, count:6, productName: 'pc'},
        ]
    }
    render() {
        return(
            <>
            {this.state.products.map((p,index) => (
                <Product key={index} productName={p.productName} count={p.count} />
            )
            )}
            </>
        )
    }
};

export default Products;