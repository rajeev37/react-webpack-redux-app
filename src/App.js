import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import Header from "./components/organisms/Header";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




export function App () {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <Router>
            <div>
            <Header/>
            {/* <div>
                <h1>App Component</h1>
                <p>Counter: {counter}</p>
                <button onClick={() => {dispatch(increment(5))}}>+</button>
                <button onClick={() => {dispatch(decrement())}}>-</button>
            </div> */}
            <Switch>
                <Route exact path="/" component={HomePage}>
                    {/* <HomePage /> */}
                </Route>
                <Route path="/about" component={AboutPage}>
                    {/* <AboutPage/> */}
                </Route>
                <Route path="/test" component={HomePage}>
                    {/* <HomePage/> */}
                </Route>
            </Switch> 
            </div>         
        </Router>
        
    )
}