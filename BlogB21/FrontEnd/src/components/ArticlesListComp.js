import React, { Component } from "react";
import {Link} from "react-router-dom";
class ArticlesListComp extends Component {
    render() {
        console.log("this.props");
        return ( 
            <div >
                {this.props.articles.map((article)=>{ 
                    return (
                        <Link to={`/article/${article.name}`} >
                            <p>{article.titre}</p>
                        </Link>);
                })}
            </div>
        );
    }
}

export  default ArticlesListComp;