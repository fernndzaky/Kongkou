import React from 'react';
import axios from 'axios';
import './css/home.css';



class FeaturedCoffeeShop extends React.Component {
  constructor(){
    super()
    this.state = {
      searched : []
    }

  }




  componentDidMount(){
    this.searchCoffee()
 
  }

  searchCoffee = async () => {
    
      await axios.get('https://developers.zomato.com/api/v2.1/search?lat='+localStorage.getItem('latitude')+'&lon='+localStorage.getItem('longitude')+'&radius=3000&category=6',{
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
   
 


  }



  render(){
    return(
      <div className="f" style={{paddingBottom:"50px"}}>


          
              <div className="row m-0 featuredArticle faDesktop padd">
              {/*START OF FEATUED  LIST */}
              {
          
              this.state.searched.map( (e , index) => {
                if(index <4)
                return(
                  <div class="col-md-3">
                        <a href={"/coffee/" + e.restaurant.id} style={{textDecoration:"none"}}>
                          <div className="card">
                            <img className="card-img-top" style={{height:"200px"}} onError={(e)=>{e.target.onError = null; e.target.src="/assets/images/asset1.png"}} src={e.restaurant.featured_image} alt="Card image cap" />
                            <div className="card-body" >
                                <h5 className="card-title f_sb" style={{color:"#0c3b2e"}}>{e.restaurant.name}</h5>
                                <p className="f_r"  style={{fontSize:"10px",color:"#999999"}}><span className="rating"><i className="fa fa-star"></i>{e.restaurant.user_rating.aggregate_rating}</span> <span style={{marginLeft:"4px"}}>{e.restaurant.all_reviews_count} Rating</span> | {'$'.repeat(e.restaurant.price_range)} | {e.restaurant.cuisines}</p>
                                <hr/>
                                <table className="centerTable" className="f_r">
                                  <tr>
                                    <td style={{width:"49%",textAlign:"center"}}>
                                      <p className="line-clamp" style={{marginBottom:"0px",fontSize:"12px",color:"black"}}>{e.restaurant.location.address}</p>
                                    </td>

                                    <td style={{width:"1%",textAlign:"center"}}>
                                    <p style={{marginBottom:"0px",color:"black"}}>|</p>
                                    </td>

                                    <td style={{width:"49%",textAlign:"center"}}>
                                    <p className="line-clamp" style={{marginBottom:"0px",fontSize:"12px",color:"#6D9773"}}>{e.restaurant.timings}</p>
                                    </td>
                                  </tr>
                                </table>
                            </div>
                          </div>

                        </a>
                      </div>
                  )
                })              
              } 

              {/*END OF FEATURED  LIST*/}
              </div>



         


















{/*
          <div className="row m-0 featuredArticle faDesktop">
          

            <div className="col-md-12">
            <div id="carouselExampleControls2" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div>
                <div class="carousel-item active">

                </div>
              
                  <div class="row" style={{padding:"30px 120px"}}>
                    <div class="col-md-3">
                        <a href="/coffee/1  " style={{textDecoration:"none"}}>
                          <div className="card">
                            <img className="card-img-top" src="/assets/images/carr_img.png" alt="Card image cap" />
                            <div className="card-body" >
                                <h5 className="card-title f_sb" style={{color:"#0c3b2e"}}>Starbuckss Benhil</h5>
                                <p className="f_r"  style={{fontSize:"10px",color:"#999999"}}><span className="rating"><i className="fa fa-star"></i>5.0 </span> <span style={{marginLeft:"4px"}}>4 Rating</span> | $$$ | Best For Hanging Out</p>
                                <hr/>
                                <table className="centerTable" className="f_r">
                                  <tr>
                                    <td style={{width:"49%",textAlign:"center"}}>
                                      <p style={{marginBottom:"0px",fontSize:"12px",color:"black"}}>Tebet, Jakarta</p>
                                    </td>

                                    <td style={{width:"1%",textAlign:"center"}}>
                                    <p style={{marginBottom:"0px",color:"black"}}>|</p>
                                    </td>

                                    <td style={{width:"49%",textAlign:"center"}}>
                                    <p style={{marginBottom:"0px",fontSize:"12px",color:"#6D9773"}}>Open Now</p>
                                    </td>
                                  </tr>
                                </table>
                            </div>
                          </div>

                        </a>
                      </div>

                    <div class="col-md-3">
                      <a href="/coffee/1  " style={{textDecoration:"none"}}>
                        <div className="card">
                          <img className="card-img-top" src="/assets/images/carr_img.png" alt="Card image cap" />
                          <div className="card-body" >
                              <h5 className="card-title f_sb" style={{color:"#0c3b2e"}}>Starbuckss Benhil</h5>
                              <p className="f_r"  style={{fontSize:"10px",color:"#999999"}}><span className="rating"><i className="fa fa-star"></i>5.0 </span> <span style={{marginLeft:"4px"}}>4 Rating</span> | $$$ | Best For Hanging Out</p>
                              <hr/>
                              <table className="centerTable" className="f_r">
                                <tr>
                                  <td style={{width:"49%",textAlign:"center"}}>
                                    <p style={{marginBottom:"0px",fontSize:"12px",color:"black"}}>Tebet, Jakarta</p>
                                  </td>

                                  <td style={{width:"1%",textAlign:"center"}}>
                                  <p style={{marginBottom:"0px",color:"black"}}>|</p>
                                  </td>

                                  <td style={{width:"49%",textAlign:"center"}}>
                                  <p style={{marginBottom:"0px",fontSize:"12px",color:"#6D9773"}}>Open Now</p>
                                  </td>
                                </tr>
                              </table>
                          </div>
                        </div>

                      </a>
                    </div>

                    <div class="col-md-3">
                      <a href="/coffee/1  " style={{textDecoration:"none"}}>
                        <div className="card">
                          <img className="card-img-top" src="/assets/images/carr_img.png" alt="Card image cap" />
                          <div className="card-body" >
                              <h5 className="card-title f_sb" style={{color:"#0c3b2e"}}>Starbuckss Benhil</h5>
                              <p className="f_r"  style={{fontSize:"10px",color:"#999999"}}><span className="rating"><i className="fa fa-star"></i>5.0 </span> <span style={{marginLeft:"4px"}}>4 Rating</span> | $$$ | Best For Hanging Out</p>
                              <hr/>
                              <table className="centerTable" className="f_r">
                                <tr>
                                  <td style={{width:"49%",textAlign:"center"}}>
                                    <p style={{marginBottom:"0px",fontSize:"12px",color:"black"}}>Tebet, Jakarta</p>
                                  </td>

                                  <td style={{width:"1%",textAlign:"center"}}>
                                  <p style={{marginBottom:"0px",color:"black"}}>|</p>
                                  </td>

                                  <td style={{width:"49%",textAlign:"center"}}>
                                  <p style={{marginBottom:"0px",fontSize:"12px",color:"#6D9773"}}>Open Now</p>
                                  </td>
                                </tr>
                              </table>
                          </div>
                        </div>

                      </a>
                    </div>

                    <div class="col-md-3">
                      <a href="/coffee/1  " style={{textDecoration:"none"}}>
                        <div className="card">
                          <img className="card-img-top" src="/assets/images/carr_img.png" alt="Card image cap" />
                          <div className="card-body" >
                              <h5 className="card-title f_sb" style={{color:"#0c3b2e"}}>Starbuckss Benhil</h5>
                              <p className="f_r"  style={{fontSize:"10px",color:"#999999"}}><span className="rating"><i className="fa fa-star"></i>5.0 </span> <span style={{marginLeft:"4px"}}>4 Rating</span> | $$$ | Best For Hanging Out</p>
                              <hr/>
                              <table className="centerTable" className="f_r">
                                <tr>
                                  <td style={{width:"49%",textAlign:"center"}}>
                                    <p style={{marginBottom:"0px",fontSize:"12px",color:"black"}}>Tebet, Jakarta</p>
                                  </td>

                                  <td style={{width:"1%",textAlign:"center"}}>
                                  <p style={{marginBottom:"0px",color:"black"}}>|</p>
                                  </td>

                                  <td style={{width:"49%",textAlign:"center"}}>
                                  <p style={{marginBottom:"0px",fontSize:"12px",color:"#6D9773"}}>Open Now</p>
                                  </td>
                                </tr>
                              </table>
                          </div>
                        </div>

                      </a>
                    </div>



                  </div>
              </div>


              

                <div class="carousel-item">
              
              
         
              
                  <div class="row" style={{padding:"30px 120px"}}>
                    <div class="col-md-3">
                      <a href="/coffee/1  " style={{textDecoration:"none"}}>
                        <div className="card">
                          <img className="card-img-top" src="/assets/images/carr_img.png" alt="Card image cap" />
                          <div className="card-body" >
                              <h5 className="card-title f_sb" style={{color:"#0c3b2e"}}>Starbucks Benhil</h5>
                              <p className="f_r"  style={{fontSize:"10px",color:"#999999"}}><span className="rating"><i className="fa fa-star"></i>5.0 </span> <span style={{marginLeft:"4px"}}>4 Rating</span> | $$$ | Best For Hanging Out</p>
                              <hr/>
                              <table className="centerTable" className="f_r">
                                <tr>
                                  <td style={{width:"49%",textAlign:"center"}}>
                                    <p style={{marginBottom:"0px",fontSize:"12px",color:"black"}}>Tebet, Jakarta</p>
                                  </td>

                                  <td style={{width:"1%",textAlign:"center"}}>
                                  <p style={{marginBottom:"0px",color:"black"}}>|</p>
                                  </td>

                                  <td style={{width:"49%",textAlign:"center"}}>
                                  <p style={{marginBottom:"0px",fontSize:"12px",color:"#6D9773"}}>Open Now</p>
                                  </td>
                                </tr>
                              </table>
                          </div>
                        </div>

                      </a>
                    </div>

                    <div class="col-md-3">
                      <a href="/coffee/1  " style={{textDecoration:"none"}}>
                        <div className="card">
                          <img className="card-img-top" src="/assets/images/carr_img.png" alt="Card image cap" />
                          <div className="card-body" >
                              <h5 className="card-title f_sb" style={{color:"#0c3b2e"}}>Starbuckss Benhil</h5>
                              <p className="f_r"  style={{fontSize:"10px",color:"#999999"}}><span className="rating"><i className="fa fa-star"></i>5.0 </span> <span style={{marginLeft:"4px"}}>4 Rating</span> | $$$ | Best For Hanging Out</p>
                              <hr/>
                              <table className="centerTable" className="f_r">
                                <tr>
                                  <td style={{width:"49%",textAlign:"center"}}>
                                    <p style={{marginBottom:"0px",fontSize:"12px",color:"black"}}>Tebet, Jakarta</p>
                                  </td>

                                  <td style={{width:"1%",textAlign:"center"}}>
                                  <p style={{marginBottom:"0px",color:"black"}}>|</p>
                                  </td>

                                  <td style={{width:"49%",textAlign:"center"}}>
                                  <p style={{marginBottom:"0px",fontSize:"12px",color:"#6D9773"}}>Open Now</p>
                                  </td>
                                </tr>
                              </table>
                          </div>
                        </div>

                      </a>
                    </div>

                    <div class="col-md-3">
                      <a href="/coffee/1  " style={{textDecoration:"none"}}>
                        <div className="card">
                          <img className="card-img-top" src="/assets/images/carr_img.png" alt="Card image cap" />
                          <div className="card-body" >
                              <h5 className="card-title f_sb" style={{color:"#0c3b2e"}}>Starbuckss Benhil</h5>
                              <p className="f_r"  style={{fontSize:"10px",color:"#999999"}}><span className="rating"><i className="fa fa-star"></i>5.0 </span> <span style={{marginLeft:"4px"}}>4 Rating</span> | $$$ | Best For Hanging Out</p>
                              <hr/>
                              <table className="centerTable" className="f_r">
                                <tr>
                                  <td style={{width:"49%",textAlign:"center"}}>
                                    <p style={{marginBottom:"0px",fontSize:"12px",color:"black"}}>Tebet, Jakarta</p>
                                  </td>

                                  <td style={{width:"1%",textAlign:"center"}}>
                                  <p style={{marginBottom:"0px",color:"black"}}>|</p>
                                  </td>

                                  <td style={{width:"49%",textAlign:"center"}}>
                                  <p style={{marginBottom:"0px",fontSize:"12px",color:"#6D9773"}}>Open Now</p>
                                  </td>
                                </tr>
                              </table>
                          </div>
                        </div>

                      </a>
                    </div>

                    <div class="col-md-3">
                      <a href="/coffee/1  " style={{textDecoration:"none"}}>
                        <div className="card">
                          <img className="card-img-top" src="/assets/images/carr_img.png" alt="Card image cap" />
                          <div className="card-body" >
                              <h5 className="card-title f_sb" style={{color:"#0c3b2e"}}>Starbuckss Benhil</h5>
                              <p className="f_r"  style={{fontSize:"10px",color:"#999999"}}><span className="rating"><i className="fa fa-star"></i>5.0 </span> <span style={{marginLeft:"4px"}}>4 Rating</span> | $$$ | Best For Hanging Out</p>
                              <hr/>
                              <table className="centerTable" className="f_r">
                                <tr>
                                  <td style={{width:"49%",textAlign:"center"}}>
                                    <p style={{marginBottom:"0px",fontSize:"12px",color:"black"}}>Tebet, Jakarta</p>
                                  </td>

                                  <td style={{width:"1%",textAlign:"center"}}>
                                  <p style={{marginBottom:"0px",color:"black"}}>|</p>
                                  </td>

                                  <td style={{width:"49%",textAlign:"center"}}>
                                  <p style={{marginBottom:"0px",fontSize:"12px",color:"#6D9773"}}>Open Now</p>
                                  </td>
                                </tr>
                              </table>
                          </div>
                        </div>

                      </a>
                    </div>



                  </div>
              </div>



              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls2"  role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only" >Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            </div>


          
          </div>       

           */}





          <div className="row m-0 featuredArticle faMobile">
        

            <div className="col-md-12">
            <div id="carouselExampleControlsMobile" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">

                {/*START OF FEATUED  LIST */}
              {
          
          this.state.searched.map( (e , index) => {
            return(
              <div class={ index == 0 ?   "carousel-item active" : "carousel-item"}>
              
              <div class="row" style={{padding:"30px 20px"}}>
                <div class="col-md-12">
                <a href={"/coffee/" + e.restaurant.id} style={{textDecoration:"none"}}>
                          <div className="card">
                            <img className="card-img-top" style={{height:"200px"}} onError={(e)=>{e.target.onError = null; e.target.src="/assets/images/asset1.png"}} src={e.restaurant.featured_image} alt="Card image cap" />
                            <div className="card-body" >
                                <h5 className="card-title f_sb" style={{color:"#0c3b2e"}}>{e.restaurant.name}</h5>
                                <p className="f_r"  style={{fontSize:"10px",color:"#999999"}}><span className="rating"><i className="fa fa-star"></i>{e.restaurant.user_rating.aggregate_rating}</span> <span style={{marginLeft:"4px"}}>{e.restaurant.all_reviews_count} Rating</span> | {'$'.repeat(e.restaurant.price_range)} | {e.restaurant.cuisines}</p>
                                <hr/>
                                <table className="centerTable" className="f_r">
                                  <tr>
                                    <td style={{width:"49%",textAlign:"center"}}>
                                      <p className="line-clamp" style={{marginBottom:"0px",fontSize:"12px",color:"black"}}>{e.restaurant.location.address}</p>
                                    </td>

                                    <td style={{width:"1%",textAlign:"center"}}>
                                    <p style={{marginBottom:"0px",color:"black"}}>|</p>
                                    </td>

                                    <td style={{width:"49%",textAlign:"center"}}>
                                    <p className="line-clamp" style={{marginBottom:"0px",fontSize:"12px",color:"#6D9773"}}>{e.restaurant.timings}</p>
                                    </td>
                                  </tr>
                                </table>
                            </div>
                          </div>

                        </a>
                  </div>

              </div>
          </div>
              )
            })              
          } 

          {/*END OF FEATURED  LIST*/}



              </div>
              <a class="carousel-control-prev" href="#carouselExampleControlsMobile"  role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only" >Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControlsMobile" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            </div>


          
          </div>        
 

   
       
        
      </div>
      )
  }
}

export default FeaturedCoffeeShop;
