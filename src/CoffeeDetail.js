import React from 'react';
import './css/home.css';
import Footer from './Footer';
import NavbarSearch from './NavbarSearch';
import ModalImage from "react-modal-image";
import FeaturedCoffeeShop from './FeaturedCoffeeShop';
import LoginNavbarSearch from './LoginNavbarSearch';
import axios from 'axios';
import LoginNavbar from './LoginNavbar';
import Navbar from './Navbar';


class CoffeeDetail extends React.Component {
  constructor(){
    super()
    this.state = {
      loggedIn : false,
      coffee : [],
      name :'',
      rating :'',
      nRating :'',
      address :'',
      phone :'',
      category :'',
      openHours :'',
      avgCost :'',


      info :'',
      id :'',
      menu :'',
      price :'',
      image :'',
    }

  }

  componentDidMount(){
    if(localStorage.getItem("token"))
         this.setState({
           loggedIn: true
         })

  this.coffeeDetail()
     }


  coffeeDetail = async () => {
      await axios.get('https://developers.zomato.com/api/v2.1/restaurant?res_id='+this.props.match.params.id,{
        headers:{
          'user-key':'8ed4718ee5f92858781fd08ae0fa7aa5'
        }
      })
      .then(async (response) => {
        this.setState({
          coffee: response.data,
          name : response.data.name,
          rating : response.data.user_rating.aggregate_rating,
          nRating :response.data.all_reviews_count,
          address : response.data.location.address,
          phone : response.data.phone_numbers,
          category : response.data.cuisines,
          
          openHours :response.data.timings,
          avgCost : response.data.average_cost_for_two,
          info : response.data.highlights,
          id : response.data.id,
          menu : response.data.menu_url,
          price : response.data.price_range,

          image : response.data.featured_image,
          url : response.data.url,

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
        <div className="row m-0 padd mobileDetail">
          <div className="col-md-12 p-0">
            <h3 className="f_sb" style={{color:"black",marginTop:"30px"}}>{this.state.name}</h3>
            <p className="f_r"  style={{fontSize:"16px",color:"#999999"}}><span className="rating"><i className="fa fa-star"></i>{this.state.rating} </span> <span style={{marginLeft:"4px"}}>{this.state.nRating} Rating</span></p>  
          </div>
          <div className="col-md-12 p-0">
            <div id="carouselExampleControlsCoffee" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
 
                          
                          <ModalImage
                            small={this.state.image}
                            large={this.state.image}
                            className={"img-fluid"}
                          />         
                      
                </div>
                <div class="carousel-item ">
 
                          
                          <ModalImage
                            small={this.state.image}
                            large={this.state.image}
                            className={"img-fluid"}

                          />         
                      
                </div>

                <div class="carousel-item ">
 
                          
                          <ModalImage
                            small={this.state.image}
                            large={this.state.image}
                            className={"img-fluid"}
                          />         
                      
                </div>




              </div>
              <a class="carousel-control-prev" href="#carouselExampleControlsCoffee"  role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only" >Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControlsCoffee" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            </div>
            <div className="row m-0" style={{width:"100%",paddingTop:"20px"}}>
              <div className="col-md-12 p-3" style={{backgroundColor:"#F1F1F1",borderRadius:"10px"}}>
                <h5 className="f_sb" style={{color:"#4F4F4F"}}>INFORMATION</h5>
   
                <hr />
                <p className="f_r" style={{color:"#4F4F4F"}} ><i className="fa fa-map-marker"></i><span style={{marginLeft:"10px "}}>{this.state.address}</span></p>
                <p className="f_r" style={{color:"#4F4F4F"}} ><i className="fa fa-phone"></i><span style={{marginLeft:"10px "}}>{this.state.phone}</span></p>
                <a href={this.state.url} className="f_r" style={{color:"#4F4F4F"}} ><i className="fa fa-globe"></i><span style={{marginLeft:"10px "}}>{this.state.name}</span></a>
              </div>
            </div>

            <div className="row m-0" style={{width:"100%",paddingTop:"20px"}}>
              <div className="col-md-12 p-3" style={{backgroundColor:"#F1F1F1",borderRadius:"10px"}}>
                <h5 className="f_sb" style={{color:"#4F4F4F"}}>OPENING HOURS</h5>
                <hr />
                <table>
                  <tr>
                    <td style={{width:"100%"}}>
                      <p className="f_r mb-0" style={{color:"#232326",fontSize:"14px"}} >{this.state.openHours}</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            
            <div className="row m-0" style={{width:"100%",paddingTop:"20px"}}>
              <div className="col-md-12 p-3" style={{backgroundColor:"#F1F1F1",borderRadius:"10px"}}>
                <h5 className="f_sb" style={{color:"#4F4F4F"}}>PRICE STATUS</h5>
                <hr />
                <table>
                  <tr>
                    <td style={{width:"50%"}}>
                      <p className="f_r mb-0" style={{color:"#232326",fontSize:"14px"}} >Average Cost For Two</p>
                    </td>
                    <td style={{width:"50%"}}>
                      <p className="f_r mb-0" style={{color:"#6D9773",fontSize:"14px"}} > Rp.{this.state.avgCost}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style={{width:"50%"}}>
                      <p className="f_r mb-0" style={{color:"#232326",fontSize:"14px"}} >Price Status</p>
                    </td>
                    <td style={{width:"50%"}}>
                      <p className="f_r mb-0" style={{color:"#6D9773",fontSize:"14px"}} > {'$'.repeat(this.state.price)}</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            
              <hr />
            <div className="row m-0" style={{width:"100%",paddingTop:"20px"}}>

              <div className="col-md-12 p-0">
                <h3 className="f_sb" style={{color:"black"}}>MENU</h3>
              </div>
              <div className="col-md-12 p-0 mt-3">
                <a href={this.state.menu} target="_blank" className="btn button-yellow">CLICK TO SEE MENU</a>
              </div>
              
            </div>

        </div>



        <div className="row m-0 padd desktopDetail" style={{paddingTop:"50px"}}>
          <div className="col-md-12 p-0">
            <h3 className="f_sb" style={{color:"black",paddingTop:"50px"}}>{this.state.name}</h3>
            <p className="f_r"  style={{fontSize:"16px",color:"#999999"}}><span className="rating"><i className="fa fa-star"></i>{this.state.rating}</span> <span style={{marginLeft:"4px"}}>{this.state.nRating} Rating</span></p>  
          </div>
        </div>
        <div className="row m-0 padd desktopDetail">
          <div className="col-md-8 pl-0 pr-4">
            <img alt="No Image Found" src={this.state.image}   onError={(e)=>{e.target.onError = null; e.target.src="/assets/images/asset1.png"}} className="img-fluid" style={{width:"100%",maxHeight:"600px"}} />
            <div className="row m-0 pt-5">
              <div className="col-md-12 pl-0">
                <h3 className="f_sb" style={{color:"black"}}>MENU</h3>
                <a href={this.state.menu} target="_blank" className="btn button-yellow">CLICK TO SEE MENU</a>
                <br />
                <br />
                <h3 className="f_sb" style={{color:"black"}}>MORE INFO</h3>
                <p className="f_r"  style={{fontSize:"14px"}}><i className="fa fa-check-square-o"></i>{this.state.info} </p>


              </div>
            
            </div>
            {/* 
            <div className="row m-0 pt-5">
              <div className="col-md-3 pl-0">
                <ModalImage
                  small={"/assets/images/article1.png"}
                  large={"/assets/images/article1.png"}
                  className={"img-fluid"}
                />
              </div>
              <div className="col-md-3">
                <ModalImage
                  small={"/assets/images/article2.png"}
                  large={"/assets/images/article2.png"}
                  className={"img-fluid"}
                />
              </div>
              <div className="col-md-3">
                <ModalImage
                  small={"/assets/images/article1.png"}
                  large={"/assets/images/article1.png"}
                  className={"img-fluid"}
                />
              </div>
              <div className="col-md-3 pr-0">
                <ModalImage
                  small={"/assets/images/article2.png"}
                  large={"/assets/images/article2.png"}
                  className={"img-fluid"}
                />              
                </div>
            </div>
          */}
          </div>
          <div className="col-md-4 p-0">
            <div className="row m-0">
              <div className="col-md-12 p-3" style={{backgroundColor:"#F1F1F1",borderRadius:"10px"}}>
                <h5 className="f_sb" style={{color:"#4F4F4F"}}>INFORMATION</h5>
                <hr />
                <p className="f_r" style={{color:"#4F4F4F"}} ><i className="fa fa-map-marker"></i><span style={{marginLeft:"10px "}}>{this.state.address}</span></p>
                <p className="f_r" style={{color:"#4F4F4F"}} ><i className="fa fa-phone"></i><span style={{marginLeft:"10px "}}>{this.state.phone}</span></p>
                <a href={this.state.url} className="f_r" style={{color:"#4F4F4F"}} ><i className="fa fa-globe"></i><span style={{marginLeft:"10px "}}>{this.state.name}</span></a>
              </div>
            </div>

            <div className="row m-0" style={{paddingTop:"30px"}}>
              <div className="col-md-12 p-3" style={{backgroundColor:"#F1F1F1",borderRadius:"10px"}}>
                <h5 className="f_sb" style={{color:"#4F4F4F"}}>OPENING HOURS</h5>
                <hr />
                <table>
                  <tr>
                    <td style={{width:"100%"}}>
                      <p className="f_r mb-0" style={{color:"#232326",fontSize:"14px"}} >{this.state.openHours}</p>
                    </td>
                  </tr>



                </table>
              </div>
            </div>

            <div className="row m-0" style={{paddingTop:"20px"}}>
              <div className="col-md-12 p-3" style={{backgroundColor:"#F1F1F1",borderRadius:"10px"}}>
                <h5 className="f_sb" style={{color:"#4F4F4F"}}>PRICE STATUS</h5>
                <hr />
                <table>
                  <tr>
                    <td style={{width:"50%"}}>
                      <p className="f_r mb-0" style={{color:"#232326",fontSize:"14px"}} >Average Cost For Two</p>
                    </td>
                    <td style={{width:"50%"}}>
                      <p className="f_r mb-0" style={{color:"#6D9773",fontSize:"14px"}} >Rp. {this.state.avgCost}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style={{width:"50%"}}>
                      <p className="f_r mb-0" style={{color:"#232326",fontSize:"14px"}} >Price Status</p>
                    </td>
                    <td style={{width:"50%"}}>
                      <p className="f_r mb-0" style={{color:"#6D9773",fontSize:"14px"}} >{'$'.repeat(this.state.price)}</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>



          </div>
        </div>
        <div className="padd">
          <hr />
        </div>
        {/*
        <div className="row m-0 padd desktopDetail">
          <div className="col-md-12 p-0">
              <h3 className="f_sb" style={{color:"black"}}>MENU</h3>
          </div>
          <div className="row m-0">
            <div className="col-md-2 pl-0">
              <ModalImage
              small={"/assets/images/menu1.png"}
              large={"/assets/images/menu1.png"}
              className={"img-fluid"}
              />
            </div>

            <div className="col-md-2 pl-0">
              <ModalImage
              small={"/assets/images/menu2.png"}
              large={"/assets/images/menu2.png"}
              className={"img-fluid"}

              />
            </div>


          </div>
        </div>
 */}
        <div className="row m-0 padd" style={{paddingTop:"35px !important"}}>
          <div className="col-md-12 p-0">
              <h3 className="f_sb relatedListing" style={{color:"#0C3B2E"}}>RELATED LISTING</h3>
          </div>
        </div>
        <FeaturedCoffeeShop  />

      
        <Footer />
        
        
      </div>
      )
  }
}

export default CoffeeDetail;
