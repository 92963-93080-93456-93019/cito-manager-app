import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Store from '../pages/store';
import NotFound from '../pages/NotFound';
import Cart from "../pages/cart";
import Dashboard from "../pages/dashboard";
import AddProduct from "../pages/add-product";

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/products" component={Store}/>
          <Route path="/add-product" component={AddProduct} />
          <Route path="*" component={NotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;