import React from 'react';
import './css/searchedCoffee.css';
import Navbar from './Navbar';
import TopHome from './TopHome';
import Trivia from './Trivia';
import FeaturedArticle from './FeaturedArticle';
import FeaturedCoffeeShop from './FeaturedCoffeeShop';
import Footer from './Footer';
import NavbarSearch from './NavbarSearch';
import Advertisement from './Advertisement';
import CoffeeCard from './CoffeeCard';


class Filter extends React.Component {
  constructor(){
    super()
    this.state = {
      filterPrice : ''
    }

  }




  componentDidMount(){
 
  }
  filterPrice = (e) => {
    this.setState({
      searchPrice : e.target.value
    })
     
}




  render(){
    return(
      <div className="row m-0 padd2">
          <div className="col-md-12 p-0 mt-5">
            <h5 className="f_sb">Filters</h5>
            <form action="">
            <div className="row m-0">
                

                <div className="col-md-2 p-0 mt-2">
                    <select onChange={this.filterPrice} name="searchPrice" style={{fontSize:"14px"}} className="form-control" id="domicile">
                      <option value="" selected disabled hidden>Price</option>

                      <option  style={{fontSize:"14px"}} value="$">$</option>
                      <option  style={{fontSize:"14px"}} value="$$">$$</option>
                      <option  style={{fontSize:"14px"}} value="$$$">$$$</option>
  
                    </select>
                </div>

                <div className="col-md-2 p-0 mt-2">
                <select onChange={this.filterCoffee} name="others" style={{fontSize:"14px"}} className="form-control" id="domicile">
                    <option value="" selected disabled hidden>Others</option>

                    <option  style={{fontSize:"14px"}} value="Takeaway">Takeaway</option>
                    <option  style={{fontSize:"14px"}} value="Smoking Area">Smoking Area</option>
                    <option  style={{fontSize:"14px"}} value="Wifi">Wifi</option>
  
                    </select>
                </div>

            </div>
            </form>
            
          </div>
        </div>
      )
  }
}

export default Filter;
