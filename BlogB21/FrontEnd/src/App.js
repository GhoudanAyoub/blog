import React from 'react';
import Home from "./pages/home";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotfoundPage";
import NavBar from "./components/NavBar";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return ( 
        <Router>
            <div className = "container App" >
                <NavBar/>
                <Switch>
                    <Route path="/" component={Home} exact/> 
                    <Route path="/about" component={AboutPage}/> 
                    <Route path="/articles" component={ArticlesListPage}/>
                    <Route path="/article/:name" component={ArticlePage}/>
                    <Route component={NotFoundPage}/>   
                    
                </Switch>
            </div >
        </Router>
    );
}

export default App;