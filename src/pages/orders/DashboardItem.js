import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { formatNumber } from "../../helpers/utils";

export default class DashboardItem extends React.Component {

    constructor(props) {
        super(props);
    }
 render() {
    console.log(this.props.statistic.value);
    return (
        <div className="card card-body">
        <h4>{this.props.statistic.name}</h4>
        <p>{this.props.statistic.description}</p>

        {this.props.statistic.type == "topSold" &&
            this.props.statistic.value.map( topSoldProduct => (
                <div className="row">
                    <div className="col">
                        <p>{topSoldProduct.product.name}</p>
                    </div>
                    <div className="col">
                        <p>{topSoldProduct.salesQuantity}</p>
                    </div>
                </div>
            ))   
        }
        

        {this.props.statistic.type == "currency" && 
            <h3 className="text-center text-warning">
            {formatNumber(this.props.statistic.value)}
            </h3>
        }

        {this.props.statistic.type == "count" && 
            <h3 className="text-center text-secondary">{this.props.statistic.value}</h3>
        }

        <div className="text-right"></div>
        </div>
    );
    }
};
