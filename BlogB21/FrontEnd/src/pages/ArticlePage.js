import React, { Component } from "react";
import articles from "../articles";
import NotFoundPage from "./NotfoundPage";
import ArticlesListComp from "../components/ArticlesListComp";
class ArticlePage extends Component {

    constructor(props) {
        super(props);
        this.state={
                name: "",
                votes: 0
        };
      }

    componentDidMount(){
   //componentDidUpdate(){
        const name=this.props.match.params.name;
        console.log("update");
      //  if(this.state.name!==name){
        fetch(`http://localhost:8000/api/articles/${name}/up`)
        .then(response => response.json())
        .then(resp=>{
            this.setState({votes: resp.votes})
            console.log(resp.votes)
        });
    }
        //Post request
        // fetch("http://localhost:8000/api/articles/",{
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     method: "POST",
        //     body: JSON.stringify({a: 1, b: 2})
        // }


    // static getDerivedStateFromProps(props, state) {
    //     const name=props.match.params.name;
    //     this.state.name=name;
    //    // return null;
    // }





    addVotes=(name)=>{
        //console.log(name);
        this.setState({votes: this.state.votes+1});
        fetch(`http://localhost:8000/api/articles/${name}/up`)

    }
    render() {
        const name=this.props.match.params.name;
        const relatedArticles=articles.filter((art)=>art.name!==name);
        const article=articles.find((art)=>art.name===name);
        if(article)
            return (
                <div className="row">
                    <div className="col-sm-9">
                        <h3> {article.titre} <span className="badge badge-pill badge-secondary">{this.state.votes}</span></h3>
                        <button onClick={()=> this.addVotes(name)} type="button" className="btn btn-outline-primary">vote</button>
                        <div>
                            {article.paragraphes.map((p)=><p>{p}</p>)}
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <p>Related Articles :</p>
                        <ArticlesListComp articles={relatedArticles}/>
                    </div>
                </div>
            );
        else return <NotFoundPage/>
    }
}

export default ArticlePage;
