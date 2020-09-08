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


class CoffeeCard extends React.Component {
  constructor(){
    super()

  }




  componentDidMount(){
  }

  copyToClipBoard = (url) =>{
    const el = document.createElement('textarea');
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Copied to clipboard')
  }



  render(){
    return(
      <div className="h">

        <div style={{marginTop:"20px"}} className="padd2 cardC">
          <a href={"/coffee/" + this.props.id}style={{textDecoration:"none"}}>
             
            <div className="row m-0 coffeeCard">
                  <div className="col-md-4 coffeeImg" style={{textAlign:"left"}}>
                    <img alt="No Image Found" onError={(e)=>{e.target.onError = null; e.target.src="/assets/images/asset1.png"}}  src={this.props.image}  style={{borderRadius:"5%",width:"100%",padding:"40px 20px",maxHeight:"400px"}} />
                  </div>
                  <div className="col-md-8" style={{padding:"40px 30px 40px 30px"}}>
                    <h3 className="f_sb" style={{color:"black"}}>{this.props.name}</h3>
                    <div className="row p-0 m-0">
                      <div className="col-md-7 p-0">
                        
                          <p className="f_r"  style={{fontSize:"14px",color:"#999999"}}><span className="rating"><i className="fa fa-star"></i>{this.props.rating}</span> <span style={{marginLeft:"4px"}}>{this.props.nRating} Rating | {'$'.repeat(this.props.price)} | {this.props.category}</span></p>

                      </div>
                      <div className="col-md-5" id="address" style={{textAlign:"right"}}>
                          <p className="f_r"  style={{fontSize:"14px",color:"#999999"}}>{this.props.address}<br /> {this.props.phone}</p>

                      </div>
                    </div>
                    <p className="f_r"  style={{fontSize:"14px",color:"#999999"}}>Average Cost For Two Rp.{this.props.avgCost} </p>
                    <p className="f_r"  style={{fontSize:"14px",color:"#999999"}}>Open Hours {this.props.openHours}</p>
                    <p className="f_sb"  style={{fontSize:"14px",color:"#999999"}}>More Info :</p>
                    
                    {this.props.info.includes("Wifi") &&
                    <p className="f_r"  style={{fontSize:"14px",color:"#999999",marginTop:"-10px"}}><i className="fa fa-check-square-o"></i>Wifi</p>
                    
        
                    }

                    {this.props.info.includes("Takeaway Available") &&
                    <p className="f_r"  style={{fontSize:"14px",color:"#999999",marginTop:"-10px"}}><i className="fa fa-check-square-o"></i>Takeaway</p>
                    
        
                    }
                    {this.props.info.includes("Smoking Area") &&
                    <p className="f_r"  style={{fontSize:"14px",color:"#999999",marginTop:"-10px"}}><i className="fa fa-check-square-o"></i>Smoking Area</p>
                    
        
                    }

                    {this.props.info.includes("Indoor Seating") &&
                    <p className="f_r"  style={{fontSize:"14px",color:"#999999",marginTop:"-10px"}}><i className="fa fa-check-square-o"></i>Indoor</p>
                    
        
                    }
          
                    
                    {/*

                    
                    <p className="f_r"  style={{fontSize:"14px",color:"#999999",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}>“10.25 noon. We were  ging out and saw this peopleless store. Need an APP, add a card and add information. 
                    I managed to enter with the QR code. There were not many kinds of drinks”
                    <span> <br /> <a href="/coffee/1">more</a> </span></p>
                    */}
     

                    <a className="btn button-green" onClick={() => this.copyToClipBoard("http://kongkou.id/coffee/" + this.props.id)}href="#!" >SHARE</a>

                    <a className="btn button-green ml-3" style={{display:"inline-block"}} href={this.props.menu} target="_blank">OUR MENU</a>

                  </div>
              </div>

              




              
          </a>

        </div>
        
        
      </div>
      )
  }
}

export default CoffeeCard;
