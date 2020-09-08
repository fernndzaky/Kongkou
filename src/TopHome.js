import React from 'react';
import Autocomplete from './Autocomplete';
import axios from 'axios';
import './css/home.css';



class TopHome extends React.Component {
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




  onChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })

     
  }


  render(){
    return(
      <div className="h topHome">
        
         <div className="row m-0">
          <div className="col-md-12 p-0">
          <div class="cont">
            <img className="img-fluid" id="" src="assets/images/top content.png" />
            <div class="centered">
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
              <form onSubmit={this.setLocalStorage} className=" f_r wow fadeInLeft" action="/search#popupSignUp">
                {/* 
                
                <input  name="location" onChange={this.onChange} type="text" id="location" style={{width:"40%"}} placeholder="Tebet, Jakarta Indonesia" name="search"/>
                
              */}
                <table className="example" style={{marginRight:"0px !important"}}>
                  <tr>
                    <td style={{width:"50%",borderRight:"1px solid #d1cfc8"}}>
                      <Autocomplete  

                        onChange = {this.onChange}    
                      />
                    </td>

                    <td style={{}}>
                      <input  onChange={this.onChange} style={{display:"inline-block !important",border:"0px",backgroundColor:"rgba(0,0,0,0)"}} type="text" placeholder="Find a coffee shop" name="search"/>
                    

                    </td>

                    <td>
                    
                      <button style={{width:"100%",padding:"0px !important"}} className="button-green" type="submit"><i className="fa fa-search"></i></button>

                    </td>
                    
                  </tr>
                </table>
              
              </form>
              {/* END OF SEARCH BAR*/}
              
            </div>  

            <div class="center">
                  <img className="img-fluid" style={{width:"200%"}} src="assets/images/fit truly.png" />
            </div>

            
                     
          </div>

          </div>
        </div>        
       
        
      </div>
      )
  }
}

export default TopHome;
