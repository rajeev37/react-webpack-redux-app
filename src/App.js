import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/organisms/Header";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ProductsPage from "./components/pages/ProductsPage";
import ProductDetailsPage from "./components/pages/ProductDetailsPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




export function App () {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <Router>
            <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}>
                </Route>
                <Route path="/about" component={AboutPage}>
                </Route>
                <Route path="/products" component={ProductsPage}>
                </Route>
                <Route path="/product/:productId" component={ProductDetailsPage}>
                </Route>
                <Route>404 Page Note found</Route>
            </Switch> 
            </div>         
        </Router>
        
    )
}