import React from 'react';
import {CLIENT_ENDPOINT, ENGINE_MANAGER_ENDPOINT} from "../../environment";
import {formatNumber} from "../../helpers/utils";

export default class ProductItem extends React.Component {

    constructor(props) {
        super(props);
        //this.state = {products: []};
        //this.setQuery = this.setQuery.bind(this);
    }

    componentDidMount() {

    }

    deleteProduct(product_id) {
        console.log("oioioi")
        const managerid = 1;
        const appid = 1;
        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        };

        const url_delete_product = ENGINE_MANAGER_ENDPOINT + managerid + '/products/' + product_id + '?appid=' + appid;

        fetch(url_delete_product, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.code == 200) {
                    window.location.reload();
                } else {
                    alert("Could not delete product");
                }
            });
    }

    render() {
        return (
            <div className="card card-body">
                <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid"
                     src={this.props.product.photo + '?v=' + this.props.product.id} alt=""/>
                <h4>{this.props.product.name}</h4>
                <p>{this.props.product.description}</p>
                <h3 className="text-left">{formatNumber(this.props.product.price)}</h3>
                <div className="text-right">
                    <button
                        onClick={() => this.deleteProduct(this.props.product.id)}
                        className="btn btn-outline-primary btn-sm text-danger">DELETE
                    </button>

                </div>
            </div>
        );
    }
}