import React from 'react';
import axios from 'axios';
import './css/home.css';



class FeaturedArticle extends React.Component {
  constructor(){
    super()
    this.state = {
      featuredArticle :  [],
    }
  }




  componentDidMount(){
    this.getFeaturedArticle()
  }

  getFeaturedArticle = () => {
   
    axios.get('https://api.kongkou.id/articles')
    .then(response => {
        
      this.setState({
        featuredArticle : response.data
      })
    },
    error=>{
       
    })
  }



  render(){
    return(
      <div className="f coffeeArticles" id="coffeeArticles">
        <div className="padd caDesktop" style={{paddingTop:"35px"}}>
          <div className="row m-0 featuredArticle">
            <div className="col-md-12 ">
              <h2 className="f_sb" style={{color:"#0c3b2e"}}>FEATURED <span className="f_r"> ARTICLE</span> </h2>
            </div>
{/* 
            <div className="col-md-4" style={{marginTop:"30px"}}>
              <div className="card" style={{height:"520px"}} >
                <img className="card-img-top" src="/assets/images/article1.png" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title f_sb" style={{color:"#0c3b2e"}}>COFFEE BEANS</h5>
                  <p className="card-text f_r" style={{color:"#808080",fontSize:"15px"}}>There are so many varieties in coffee beans, each contain different characteristics. Ever tried your beans knowledge? give it a try! </p>
                  <a className="nav-link p-0" href="/article/1">
                    <button className="button-green f_r">READ MORE</button>
                  </a>
                </div>
              </div>
            </div>
*/}
            {/*START OF API FEATURED ARTICLE */}
            {

                   this.state.featuredArticle.reverse().map( (e , index) => {
                     if(index < 3)
                     
                     return(
                          <React.Fragment>
                            <div className="col-md-4" style={{marginTop:"30px"}}>
                              <div className="card" style={{height:"400px"}}  >
                                <img className="card-img-top" src={"https://api.kongkou.id/images/"+e.imageName} alt="Card image cap" />
                                <div className="card-body">
                                  <h5 className="card-title f_sb" style={{color:"#0c3b2e"}}>{e.title}</h5>
                                    <p className="card-text f_r line-clamp" style={{color:"#808080",fontSize:"15px"}}>{e.body}</p>
                                  <a className="nav-link p-0" href={"/article/" + e._id}>
                                    <button className="button-green f_r">READ MORE</button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </React.Fragment>

                     )
                   })              
                  } 

            {/*END OF API FEATURED ARTICLE */}



{/* 
            <div className="col-md-4" style={{marginTop:"30px"}}>
              <div className="card" style={{height:"520px"}}  >
                <img className="card-img-top" src="assets/images/article2.png" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title f_sb" style={{color:"#0c3b2e"}}>ICED COFFEE</h5>
                  <p className="card-text f_r" style={{color:"#808080",fontSize:"15px"}}>There are so many varieties in coffee beans, each contain different characteristics. Ever tried your beans knowledge? give it a try! </p>
                  <a className="nav-link p-0" href="/article/1">
                    <button className="button-green f_r">READ MORE</button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4" style={{marginTop:"30px"}}>
              <div className="card" style={{height:"520px"}} >
                <img className="card-img-top" src="assets/images/article3.png" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title f_sb" style={{color:"#0c3b2e"}}>MOCHA JAVA WAS THE FIRST COFFEE BLEND</h5>
                  <p className="card-text f_r" style={{color:"#808080",fontSize:"15px"}}>There are so many varieties in coffee beans, each contain different characteristics. Ever tried your beans knowledge? give it a try! </p>
                  <a className="nav-link p-0" href="/article/1">
                    <button className="button-green f_r">READ MORE</button>
                  </a>
                </div>
              </div>
            </div>
*/}
          
          </div>        

        </div>


        <div className="padd caMobile" style={{paddingTop:"35px"}}>
          <div className="row m-0 featuredArticle">
            <div className="col-md-12 ">
              <h2 className="f_sb" style={{color:"#0c3b2e"}}>FEATURED <span className="f_r"> ARTICLE</span> </h2>
            </div>

            <div className="col-md-12">
            <div id="carouselExampleControlsMobileArticle" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">


                 {/*START OF API FEATURED ARTICLE */}
                {

                this.state.featuredArticle.reverse().map( (e , index) => {
                  
                  return(
                      <React.Fragment>
                        <div class={ index == 0 ?   "carousel-item active" : "carousel-item"}>
              
                          <div class="row" style={{padding:"30px 20px"}}>
                            <div class="col-md-12 p-0">
                                <a href="" style={{textDecoration:"none"}}>
                                  <div className="card" style={{height:"350px"}} >
                                    <img className="card-img-top" src={"https://api.kongkou.id/images/"+e.imageName} alt="Card image cap" />
                                    <div className="card-body">
                                      <h5 className="card-title f_sb" style={{color:"#0c3b2e"}}>{e.title}</h5>
                                      <p className="card-text f_r line-clamp" style={{color:"#808080",fontSize:"15px"}}>{e.body}</p>
                                      <a className="nav-link p-0" href={"/article/" + e._id}>
                                        <button className="button-green f_r">READ MORE</button>
                                      </a>
                                    </div>
                                  </div>
                                </a>
                              </div>

                          </div>
                      </div>
                      </React.Fragment>

                  )
                })              
                } 

                {/*END OF API FEATURED ARTICLE */}




              </div>
              <a class="carousel-control-prev" href="#carouselExampleControlsMobileArticle"  role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only" >Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControlsMobileArticle" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            </div>

           
        
          
          </div>        

        </div>
       
        
      </div>
      )
  }
}

export default FeaturedArticle;
