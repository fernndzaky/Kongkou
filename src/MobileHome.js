import React from 'react';
import Autocomplete from './Autocomplete';

import axios from 'axios';
import './css/home.css';



class MobileHome extends React.Component {
  constructor(){
    super()
    this.state ={
      location :[],
      search : '',
      title : '',
      cityName : '',
      country : '',

    }
  }




  componentDidMount(){
 
  }
  searchByCurrentLocation = () => {
    axios.get('https://developers.zomato.com/api/v2.1/geocode?lat='+localStorage.getItem('latitude')+'&lon='+localStorage.getItem('longitude'),{
      headers:{
        'user-key':'8ed4718ee5f92858781fd08ae0fa7aa5'
      }
    })
    .then(response => {
        
      this.setState({
        title : response.data.location.title,
        cityName : response.data.location.city_name,
        country : response.data.location.country_name
      })
      localStorage.setItem('location', this.state.title+', '+this.state.cityName+', '+this.state.country)
    },
    error=>{
       
    })

    
  }
  setLocalStorage = () => {
    if(this.state.search != undefined)
    localStorage.setItem('search',this.state.search) 
    
    window.location.href="/search"
  }


  searchCoffee = () => {
    axios.get('https://developers.zomato.com/api/v2.1/locations?query='+localStorage.getItem("location"))
    .then(response => {
        
      this.setState({
        location : response.data
      })
    },
    error=>{
       
    })
    
    axios.get('https://developers.zomato.com/api/v2.1/search?entity_id='+this.state.location.location_suggestions[0].entity_id+'&entity_type='+this.state.location.location_suggestions[0].entity_type+'&q='+this.state.search+'&&category=6')
    .then(response => {
        
      this.setState({
        location : response.data
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


  render(){
    return(
      <div className="mobileTop">
        
        <div class="cont wow fadeInRight">
            <img src="/assets/images/mobile_nav.png" className="img-fluid" />
            <div class="centeredMobile">
              <h1 style={{color:"#0c3b2e"}}>
                <span className="f_sb" >DISCOVER</span>
              </h1>
              <br />
              <h1  style={{marginTop:"-35px", color:"#0c3b2e"}}>
                <span className="f_r" >YOUR COFFEE PERSONALITY</span>
              </h1>
              <br />
              <p style={{marginTop:"-20px", color:"#808080"}} className="f_sb">Find popular coffee shops, hangout, or visit the local experts</p>
              <br />

              {/* SEARCH BAR*/}
              <form className="f_r" onSubmit={this.setLocalStorage} action="/search#popupSignUp">
              
              
                <div className="form-group example ">
                  {/*
                  
                  <input style={{width:"90%"}} type="text" placeholder="Search a location" name="search"/>
                  <i className="fa fa-angle-down"></i>                
                  */}
                  <Autocomplete  

                    onChange = {this.onChange}    
                    />    
                </div>
                <div className="form-group example">
                  {/*
                  <input  style={{width:"90%"}} type="text" placeholder="Find a coffee shop" name="search"/>
                  <i className="fa fa-angle-down"></i>
                   */}
                  <input  onChange={this.onChange} style={{width:"90%"}} type="text" placeholder="Find a coffee shop" name="search"/>
                  <i className="fa fa-angle-down"></i>  
                </div>
                <button style={{width:"100%",padding:"10px 40px"}} type="submit" className="btn button-yellow"><i className="fa fa-search"></i>Search</button>
              </form>
              {/* END OF SEARCH BAR*/}
              
            </div>  
            
                     
          </div>
        <div style={{padding:"30px"}}>
          <img src="/assets/images/fitTrulyMobile.png" className="img-fluid wow fadeInRight" />

        </div>
        
      </div>
      )
  }
}

export default MobileHome;
