import React, { Component } from 'react'


 class Product extends Component{
    state = {
        count: this.props.count,
    }
    render() {
        const list = [
        <li>item 1</li>,
        <li>item 2</li>,
        <li>item 3</li>,
    ]
        return <>
        <span className='m-2 text-info'>Product Name</span>
        <span className='m-2 badge bg-primary'>{this.state.count}</span>
        <button className='m-2 btn btn-sm btn-success'>+</button>
        <button className='m-2 btn btn-sm btn-warning'>-</button>
        <button className='m-2 btn btn-sm btn-danger'>delete</button>
        {list}
        </>;
        
    }
}

export default Product;