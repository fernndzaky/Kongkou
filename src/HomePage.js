import React from 'react';
import './css/home.css';
import Navbar from './Navbar';
import LoginNavbar from './LoginNavbar';
import TopHome from './TopHome';
import Trivia from './Trivia';
import FeaturedArticle from './FeaturedArticle';
import FeaturedCoffeeShop from './FeaturedCoffeeShop';
import Footer from './Footer';
import MobileHome from './MobileHome';
import axios from 'axios';
import { geolocated } from "react-geolocated";



class HomePage extends React.Component {
  constructor(){
    super()
    this.state = {
      loggedIn :  false,
      longitude : '',
      latitude : '',
      isReloaded : false,
    }

  }






  componentDidMount(){






    console.log(this.state.isReloaded)
    this.setState({
      isReloaded:false
    })
    localStorage.removeItem('search')
    localStorage.removeItem('location')
    if(localStorage.getItem("token"))
      this.setState({
        loggedIn: true,
      })
    navigator.geolocation.getCurrentPosition(
    function(position) {
       ;
      localStorage.setItem("latitude", position.coords.latitude)
      localStorage.setItem("longitude", position.coords.longitude)
      if(localStorage.getItem("location") == "Jakarta")
        window.location.reload()


    },
    function(error) {
      console.error("Error Code = " + error.code + " - " + error.message);
    }
  );
  if(localStorage.getItem("latitude")){
    this.searchByCurrentLocation()

    
  }

  else{

    localStorage.setItem('location', 'Jakarta')
  }


   
  
}

searchByCurrentLocation = async () => {
  await axios.get('https://developers.zomato.com/api/v2.1/geocode?lat='+localStorage.getItem('latitude')+'&lon='+localStorage.getItem('longitude'),{
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
    this.setState({
      isReloaded : true
    })
  },
  error=>{
     
  })

  
}



  render(){
    return(
      <div className="h">
        {!this.state.loggedIn ?<Navbar />
        :
        <LoginNavbar />
        }
        <TopHome />
        <MobileHome />
        <Trivia />
        <FeaturedArticle 
          loggedIn  = {this.state.loggedIn}
        />
        <div className="row m-0 ">
            <div className="padd" style={{paddingTop:"35px"}}>
              <div className="col-md-12 ">
                <h2 className="f_sb" style={{color:"#0c3b2e"}}>OUR <span className="f_r"> DIRECTORY</span> </h2>
              </div>
            </div>
          
        </div>
        <FeaturedCoffeeShop />
        <Footer />
      </div>
      )
  }
}

export default HomePage;
