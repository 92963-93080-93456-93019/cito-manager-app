import React from 'react';
import ProductItem from './ProductItem';
import styles from './ProductsGrid.module.scss';
import {ENGINE_MANAGER_ENDPOINT} from "../../environment";

export default class ProductsGrid extends React.Component {
    constructor() {
        super();
        this.state = { products: [], filtered_products: [], query: "" };
        this.setQuery = this.setQuery.bind(this);
        this.searchProduct = this.searchProduct.bind(this);
    }

    componentDidMount() {
        const url_get_products = ENGINE_MANAGER_ENDPOINT + '1/products?appid=1';
        fetch(url_get_products)
            .then((response) => response.json())
            .then((json) => {
                this.setState({ products: json, filtered_products : json });
                console.log(json);
            });
    }

    searchProduct() {
        if (this.state.query == "") {
            console.log(this.state.products);
            this.setState({ filtered_products: this.state.products });
            return
        }

        this.setState({
            filtered_products: this.state.products.filter((product) => {
                const prodName = product.name.toLowerCase();
                return prodName.includes(this.state.query);
            }),
        });
    }

    setQuery(query_arg) {
        this.setState({query: query_arg}, () => {this.searchProduct();});
    }

    render() {
        return (
            <div className={styles.p__container}>
                <div className="row">
                    <div className="col-sm-8">
                        <div className="py-3">
                            {this.state.filtered_products.length} Products
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <input type="text" name="" onChange={(event) => this.setQuery(event.target.value)} placeholder="Search product" className="form-control" id="" />
                        </div>
                    </div>
                </div>
                <div className={styles.p__grid}>

                    {
                        this.state.filtered_products.map(product => (
                            <ProductItem product={product} />
                        ))
                    }

                </div>
                <div className={styles.p__footer}>

                </div>
            </div>
        );
    }
}