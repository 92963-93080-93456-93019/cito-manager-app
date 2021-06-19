import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Store from '../pages/store';
import NotFound from '../pages/NotFound';
import Cart from "../pages/cart";
import Orders from "../pages/orders";
import AddProduct from "../pages/add-product";

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route path="/myorders" component={Orders} />
          <Route exact path="/" component={Store}/>
          <Route path="/cart" component={Cart} />
          <Route path="/add-product" component={AddProduct} />
          <Route path="*" component={NotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;