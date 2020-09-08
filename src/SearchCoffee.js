import React from 'react';
import './css/searchedCoffee.css';
import Navbar from './Navbar';
import TopHome from './TopHome';
import Trivia from './Trivia';
import FeaturedArticle from './FeaturedArticle';
import LoginNavbar from './LoginNavbar';
import Footer from './Footer';
import NavbarSearch from './NavbarSearch';
import Advertisement from './Advertisement';
import axios from 'axios';
import CoffeeCard from './CoffeeCard';
import Filter from './Filter';


class SearchCoffee extends React.Component {
  constructor(){
    super()
    this.state = {
      loggedIn: false,
      location :[],
      searched :[],
      search : ' ',
      filterPrice : '', 
      filterOthers : '', 
      email : '', 
      password : '', 
    }
  }

  




  componentDidMount(){
    if(localStorage.getItem("token"))
      this.setState({
        loggedIn: true
      })
      this.searchCoffee()
      
      this.setState({
        search : localStorage.getItem("search") ?  localStorage.getItem("search") : ''
      })
    
      
       
  }
  searchCoffee = async () => {
    const a = localStorage.getItem("location").split(", ")
    let location1 = a[0].replaceAll(" ", "%20").replaceAll( ",", "%2C").replaceAll("/", "%2F")
    let location2 = a[1].replaceAll(" ", "%20").replaceAll( ",", "%2C").replaceAll("/", "%2F")
    await axios.get('https://developers.zomato.com/api/v2.1/locations?query='+location1+'%2C%20'+location2,{
      headers:{
        'user-key':'8ed4718ee5f92858781fd08ae0fa7aa5'
      }
    })
    .then(async (response) => {
        
      this.setState({
        location : response.data
      })
      await axios.get('https://developers.zomato.com/api/v2.1/search?entity_id='+this.state.location.location_suggestions[0].entity_id+'&entity_type='+this.state.location.location_suggestions[0].entity_type+'&q='+this.state.search+'&radius=3000&category=6',{
        headers:{
          'user-key':'8ed4718ee5f92858781fd08ae0fa7aa5'
        }
      })
      .then(response => {
          
        this.setState({
          searched : response.data.restaurants
        })
      },
      error=>{
         
      })
    },
    error=>{
       
    })



  }

  onChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  sendVerification =  () => {
    const user = {
      email : this.state.email,
    }
    axios.post('https://api.kongkou.id/users/email',user)
    .then(response => {
        
      window.location.href = '/signin'

    },
    error=>{
       
    })
  }
  signUp = async (e) => {
    e.preventDefault()
    const user = {
      email : this.state.email,
      password : this.state.password 
    }
    await axios.post('https://api.kongkou.id/users/register',user)
    .then(response => {
        
      
    },
    error=>{
       
    })
    this.sendVerification()
    
  }
  filterPrice = (e) => {
    this.setState({
      filterPrice : e.target.value
    })
}

filterOthers = (e) => {
  this.setState({
    filterOthers : e.target.value
  })
}


  render(){    
    return(
      <div className="h">
        
        
        {!this.state.loggedIn ?<Navbar />
        :
        <LoginNavbar />
        }

        {!this.state.loggedIn &&

         
          <div id="popupSignUp" className="overlay">
                <div className="popup">
                  <h1 className="f_sb"style={{color:"white"}}>SIGN UP</h1>

                  <a class="close" href="#">&times;</a>
                  <div className="content">
                  <p className="f_sb"style={{color:"white"}}>Find yourself a great discovery of coffee ahead!</p>
                    <div className="form-group f_r" style={{color:"white"}} >
                      <p style={{color:"white"}}>Already have an account? <span><a href="/signin" style={{color:"white"}}>Sign me in!</a> </span></p>
                    </div>

                    <form onSubmit={this.signUp}>
                      <div className="row m-0">
                        <div className="col-md-12 p-0">
                          <div className="form-group">
                            <label for="exampleInputEmail1" className="f_r" style={{color:"white"}}>EMAIL</label>
                            <input name="email" type="email"  required onChange={this.onChange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                          </div>
                          
                        </div>

                        <div className="col-md-12 p-0">
                          <div className="form-group">
                            <label for="exampleInputPassword1"  className="f_r" style={{color:"white"}}>PASSWORD</label>
                            <input name="password" type="password" required onChange={this.onChange}  className="form-control" id="exampleInputPassword1" placeholder="Password" />
                          </div>
                            
                        </div>
                      
                        
                      </div>

                      <div className="row m-0">
                
                        <div className="col-md-6 p-0">
                          <div class="form-group">
                            <button type="submit" style={{width:"50%"}} class="btn button-yellow">SIGN UP</button>
                          </div>

                        </div>
                      </div>

                          
                    </form>
                  </div>
                </div>
              </div>
           
        }
        <Advertisement />
        <div className="row m-0 padd2">
          <div className="col-md-12 p-0 mt-5">
            <h5 className="f_sb">Filters</h5>
            <form action="">
            <div className="row m-0">
                

                <div className="col-md-2 p-0 mt-2">
                    <select onChange={this.filterPrice} name="filterPrice" style={{fontSize:"14px"}} className="form-control" id="domicile">
                      <option value="" selected disabled hidden>Price</option>

                      <option  style={{fontSize:"14px"}}  value="1">$</option>
                      <option  style={{fontSize:"14px"}} value="2">$$</option>
                      <option  style={{fontSize:"14px"}} value="3">$$$</option>
                      <option  style={{fontSize:"14px"}}  value="4">$$$$</option>
                      <option  style={{fontSize:"14px"}} value="5">$$$$$</option>
  
                    </select>
                </div>

                <div className="col-md-2 p-0 mt-2">
                <select onChange={this.filterOthers} name="filterOthers" style={{fontSize:"14px"}} className="form-control" id="domicile">
                    <option value="" selected disabled hidden>Features</option>

                    <option  style={{fontSize:"14px"}} value="Takeaway">Takeaway</option>
                    <option  style={{fontSize:"14px"}} value="Smoking Area">Smoking Area</option>
                    <option  style={{fontSize:"14px"}} value="Wifi">Wifi</option>
                    <option  style={{fontSize:"14px"}} value="Indoor Seating">Indoor</option>
  
                    </select>
                </div>

            </div>
            </form>
            
          </div>
        </div>
        <div className="row m-0 padd2">
          <div className="col-md-12 p-0" style={{marginTop:"30px"}}>
            <h6 className="f_r p-1">Showing Results ({this.state.searched.length} places)</h6>
          </div>
        </div>

        

        {/*START OF API ARTICLE LIST */}
        {
            (this.state.filterPrice == "" && this.state.filterOthers == "") ?
            this.state.searched.map( (e , index) => {
               
              return(
                <React.Fragment>
                     <CoffeeCard 

                      name = {e.restaurant.name}
                      rating = {e.restaurant.user_rating.aggregate_rating}
                      nRating = {e.restaurant.all_reviews_count}
                      address = {e.restaurant.location.address}
                      phone = {e.restaurant.phone_numbers}
                      category = {e.restaurant.cuisines}
                      openHours = {e.restaurant.timings}
                      avgCost = {e.restaurant.average_cost_for_two}


                      info = {e.restaurant.highlights}
                      id = {e.restaurant.id}
                      menu = {e.restaurant.menu_url}
                      price = {e.restaurant.price_range}
                      image = {e.restaurant.featured_image}
                     
                     />
                    }
                  </React.Fragment>

              )
            })              
            : (this.state.filterPrice != "" ) ?

              this.state.searched.map( (e , index) => {
                if(e.restaurant.price_range == this.state.filterPrice)
                return(
                  <React.Fragment>
                       <CoffeeCard 

                        name = {e.restaurant.name}
                        rating = {e.restaurant.user_rating.aggregate_rating}
                        nRating = {e.restaurant.all_reviews_count}
                        address = {e.restaurant.location.address}
                        phone = {e.restaurant.phone_numbers}
                        category = {e.restaurant.cuisines}
                        openHours = {e.restaurant.timings}
                        avgCost = {e.restaurant.average_cost_for_two}


                        info = {e.restaurant.highlights}
                        id = {e.restaurant.id}
                        menu = {e.restaurant.menu_url}
                        price = {e.restaurant.price_range}
                        image = {e.restaurant.featured_image}
                       
                       />
                      }
                    </React.Fragment>

                )
              })              
              : (this.state.filterOthers != "" ) &&

              this.state.searched.map( (e , index) => {
                if(e.restaurant.highlights.includes(this.state.filterOthers))
                return(
                  <React.Fragment>
                       <CoffeeCard 

                        name = {e.restaurant.name}
                        rating = {e.restaurant.user_rating.aggregate_rating}
                        nRating = {e.restaurant.all_reviews_count}
                        address = {e.restaurant.location.address}
                        phone = {e.restaurant.phone_numbers}
                        category = {e.restaurant.cuisines}
                        openHours = {e.restaurant.timings}
                        avgCost = {e.restaurant.average_cost_for_two}


                        info = {e.restaurant.highlights}
                        id = {e.restaurant.id}
                        menu = {e.restaurant.menu_url}
                        price = {e.restaurant.price_range}
                        image = {e.restaurant.featured_image}
                       
                       />
                      }
                    </React.Fragment>

                )
              })              
              } 

              {/*END OF API ARTICLE LIST*/}
  
        <div style={{padding:"50px"}}>

        </div>
        <Footer />
        
        
      </div>
      )
  }
}

export default SearchCoffee;
