import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Reference from "./components/pages/Reference";
import Youtube from "./components/pages/Youtube";
import Script from "./components/pages/Script";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";


function App(){
    return(
        <Router>
            <Route path="/" component={Main}/>
            <Route path="/about" component={About}/>
            <Route path="/Reference" component={Reference}/>
            <Route path="/Youtube" component={Youtube}/>
            <Route path="/Script" component={Script}/>
            <Route path="/Portfolio" component={Portfolio}/>
            <Route path="/Contact" component={Contact}/>
        </Router>
    )
}
export default App;