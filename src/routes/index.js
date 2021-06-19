import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Products from '../pages/products';
import NotFound from '../pages/NotFound';
import Dashboard from "../pages/dashboard";
import AddProduct from "../pages/add-product";

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/products" component={Products}/>
          <Route path="/add-product" component={AddProduct} />
          <Route path="*" component={NotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;