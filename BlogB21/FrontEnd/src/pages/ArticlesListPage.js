import React, { Component } from "react";
import ArticlesListComp from "../components/ArticlesListComp";
import articles from "../articles";
class ArticlesListPage extends Component {
    render() {
        return ( 
            <div >
            <h1> Articles List: </h1>
            <ArticlesListComp articles={articles}/>
             
            </div>
        );    }
}

export default ArticlesListPage;