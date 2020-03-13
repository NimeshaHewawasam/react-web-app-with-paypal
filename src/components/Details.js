import React, { Component } from 'react';
import {ProductConsumer} from '../context';
//we have 2 btns so need link option
import {Lint, Link} from 'react-router-dom';
//already we have button contiainer. so use it
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const{id, company, img, info, price, title, inCart} = value.detailProduct;
                    return(
                        <div className = "container py-5">
                            {/*Title*/}
                            <div className="row">
                                <div className = "col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                                </div>
                            </div>
                            {/*end Title*/}
                            {/*Product info*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                {/*product test*/}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h2>Model:{title}</h2>
                                    <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Made by: <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h5>
                                    <h5 className="text-blue">
                                        <strong>
                                        Price: 
                                        {price}
                                        <span>Rs</span>
                                        </strong>
                                    </h5>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Some information about produce:
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/*Button*/}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>Back to Product</ButtonContainer>
                                        </Link>
                                        {/*rend wheter the item is in the crt or nt*/}
                                        <ButtonContainer
                                            cart 
                                            desabled={inCart?true:false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModel(id);
                                            }}
                                        >
                                            {inCart?"inCart" : "add to cart"}

                                        </ButtonContainer>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}
