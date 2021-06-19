import React from 'react';
import styles from './AddProductComponent.module.scss';
import {ENGINE_MANAGER_ENDPOINT} from "../../environment";
import {formatNumber} from "../../helpers/utils";

export default class AddProductComponent extends React.Component {

    constructor() {
        super();
        this.state = {name: "", price: "", category: "", description: "", message: {"msg": "", "color": ""}};
        this.setName = this.setName.bind(this);
        this.setPrice = this.setPrice.bind(this);
        this.setCategory = this.setCategory.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    componentDidMount() {

    }

    setName(input_text) {
        this.setState({name: input_text});
    }

    setPrice(input_text) {
        this.setState({price: input_text});
    }

    setCategory(input_text) {
        this.setState({category: input_text});
    }

    setDescription(input_text) {
        this.setState({description: input_text});
    }

    addProduct() {
        if (this.state.name && this.state.price && this.state.category && this.state.description) {
            if (!isNaN(this.state.price)) {

                const payload = {
                    managerid: 1,
                    appid: 1,
                    name: this.state.name,
                    price: parseFloat(this.state.price),
                    category: this.state.category,
                    description: this.state.description,
                    image: "image"
                };

                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    body: JSON.stringify(payload)
                };

                console.log("FIELDS VALID");
                console.log(payload);

                const url_post_add_product = ENGINE_MANAGER_ENDPOINT + payload.managerid + '/products?appid=' + payload.appid;

                fetch(url_post_add_product, requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        if (data.code == 201) {

                            this.setState({message: {"msg": "Added product successfully", "color": "text-success"}});
                            this.setState({name: ""});
                            this.setState({price: ""});
                            this.setState({category: ""});
                            this.setState({description: ""});

                            document.getElementById("input-name").value = ""
                            document.getElementById("input-price").value = ""
                            document.getElementById("input-category").value = ""
                            document.getElementById("input-description").value = ""

                        } else {
                            this.setState({message: {"msg": "Error adding product", "color": "text-danger"}});
                        }
                    });


            } else {
                console.log("PRICE NAN");
                this.setState({
                    message: {
                        "msg": "Error adding product. Field \"Price\" is not a number",
                        "color": "text-danger"
                    }
                });

            }
        } else {
            console.log("FIELDS INVALID");
            this.setState({message: {"msg": "Error adding product. You have invalid fields", "color": "text-danger"}});
        }
    }

    render() {
        return (
            <div className={styles.p__container}>

                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <input type="text" name="" onChange={(event) => this.setName(event.target.value)}
                                       placeholder="Name" className="form-control" id="input-name"/>
                            </div>

                        </div>
                        <br/>

                        <div className="row">
                            <div className="col">
                                <input type="text" name="" onChange={(event) => this.setCategory(event.target.value)}
                                       placeholder="Category" className="form-control" id="input-category"/>
                            </div>

                        </div>

                        <br/>
                        <div className="row">
                            <div className="col">
                                <input type="text" name="" onChange={(event) => this.setPrice(event.target.value)}
                                       placeholder="Price" className="form-control" id="input-price"/>
                            </div>
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col">
                                <input type="text" name="" onChange={(event) => this.setDescription(event.target.value)}
                                       placeholder="Description" className="form-control" id="input-description"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 p-3">
                        <div className="card card-body">
                            <p className="mb-1">Name</p>
                            <h5 className="mb-3 txt-right">{this.state.name}</h5>

                            <p className="mb-1">Category</p>
                            <h6 className="mb-3 txt-right">{this.state.category}</h6>

                            <p className="mb-1">Price</p>
                            <h5 className="mb-3 txt-right">{formatNumber(this.state.price)}</h5>

                            <p className="mb-1">Description</p>
                            <h6 className="mb-3 txt-right">{this.state.description}</h6>

                            <p className={"mb-1 " + this.state.message.color}>{this.state.message.msg}</p>

                            <div className="text-center">
                                <button type="button" className="btn btn-primary mb-2" onClick={this.addProduct}>ADD
                                    PRODUCT
                                </button>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        );
    }
}