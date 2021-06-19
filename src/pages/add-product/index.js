import React from 'react';
import Layout from '../../components/Layout';
import AddProductComponent from "./AddProductComponent";
import ProductsGrid from './ProductsGrid';

export default class AddProduct extends React.Component {
    
    // componentDidMount() {
    //     fetch("http://127.0.0.1:8080/clientApi/info?appid=1")
    //         .then((response) => response.json())
    //         .then((json) => {
    //             this.setState({ products: json });
    //             console.log(json);
    //         });
    // }

    render() {
        return ( 
            <Layout title="Add Product" description="You can add new products here" >
                <div >
                    <div className="text-center mt-5">
                        <h1>Farmácia Armando</h1>
                        <p>Rua do Cabeço | 8-19h</p>
                    </div>
                    <AddProductComponent/>
                </div>
            </Layout>
        );
    }
}
 
