import React from 'react';
import Layout from '../../components/Layout';
import CartItem from "../cart/CartItem";
import {ENGINE_CLIENT_ENDPOINT} from "../../environment";

const Orders = () => {

    var obj;
    var orderItems;

    fetch(ENGINE_CLIENT_ENDPOINT + "1/orders?appid=1")
        .then(res => res.json())
        .then(data => obj = data)
        .then(() => console.log(obj))

    return (
        <Layout title="About" description="This is the Orders page">
            <div className="text-center mt-5">
                <h1>Orders</h1>
                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            orderItems.map(product => <CartItem key={product.id} product={product}/>)
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Orders;