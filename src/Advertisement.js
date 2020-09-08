import React from 'react';
import './css/signinup.css';
import Navbar from './Navbar';
import TopHome from './TopHome';
import Trivia from './Trivia';
import FeaturedArticle from './FeaturedArticle';
import FeaturedCoffeeShop from './FeaturedCoffeeShop';
import Footer from './Footer';
import NavbarSearch from './NavbarSearch';


class Advertisement extends React.Component {
  constructor(){
    super()

  }




  componentDidMount(){
 
  }



  render(){
    return(
     
          <div className="row m-0 padd2" >
            <a href="https://instagram.com/kongkou.id" target="_blank">

              <div className="col-md-12 p-0" style={{marginTop:"30px",textAlign:"center"}}>
                <img src="/assets/images/adv.png" className="img-fluid" style={{maxHeight:"200px",width:"100%"}} />
              </div>
            </a>
          </div>

        
      )
  }
}

export default Advertisement;
