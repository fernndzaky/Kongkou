import React from 'react';
import './css/signinup.css';
import Navbar from './Navbar';
import TopHome from './TopHome';
import Trivia from './Trivia';
import FeaturedArticle from './FeaturedArticle';
import FeaturedCoffeeShop from './FeaturedCoffeeShop';
import Footer from './Footer';


class ArticleCard extends React.Component {
  constructor(){
    super()

  }




  componentDidMount(){
  }



  render(){
    return(

        
           
            <div className="col-md-4" style={{marginTop:"30px"}}>
              <div className="card" style={{maxHeight:"650px"}} >
                <img className="card-img-top" src={"https://api.kongkou.id/images/"+this.props.article.imageName} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title f_sb" style={{color:"#0c3b2e"}}>{this.props.article.title}</h5>
                  <p className="card-text f_r" style={{color:"#808080",fontSize:"12px"}}>Created At : {new Date(this.props.article.createdAt).getDate()}-{new Date(this.props.article.createdAt).getMonth()}-{new Date(this.props.article.createdAt).getFullYear()}</p>

                  <p className="card-text f_r line-clamp" style={{color:"#808080",fontSize:"15px"}}>{this.props.article.body}</p>
                  <a className="nav-link p-0" href={"/article/" + this.props.article._id} target="_blank" >
                    <button className="button-green f_r">READ MORE</button>
                  </a>
                </div>
              </div>
            </div>


        

      )
  }
}

export default ArticleCard;
