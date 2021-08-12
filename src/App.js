import React from 'react'
import Home from './Screens/Home/Home'
import Video from './Screens/Video/Video.js'
import './App.css'
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
export default function App() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/Video" component={Video} />
        </Router>

    )
}
