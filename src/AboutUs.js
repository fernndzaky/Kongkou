import React from 'react';
import './css/home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginNavbar from './LoginNavbar';


class AboutUs extends React.Component {
  constructor(){
    super()
    this.state = {
      loggedIn :  false,
    }
  }




  componentDidMount(){
    if(localStorage.getItem("token"))
    this.setState({
      loggedIn: true
    })
  }



  render(){
    return(
      <div className="h">
        
        {!this.state.loggedIn ?<Navbar />
        :
        <LoginNavbar />
        }
        <div className="padd" >
          <div className="row m-0" style={{paddingTop:"70px"}}>
        
            <div className="col-md-6">
              <h1 className="f_sb" style={{color:"#0c3b2e"}}>About <span className="f_r"> Us</span> </h1>
              <h5 className="f_r" style={{color:"#808080"}}>From refreshing iced latte to the sweet tasty brown sugar milk coffee, learn why iced coffee become a popculture nationwide, let us know your taste so we can give you the best of iced coffee!</h5>
              <h6 className="f_r mt-5" style={{color:"#808080"}}><i class="fa fa-envelope-o" aria-hidden="true"></i> kongkou@kongkou.com</h6>
              <h6 className="f_r" style={{color:"#808080"}}><i class="fa fa-phone" aria-hidden="true"></i> +628111377893</h6>
              
            </div>
            <div className="col-md-6">
              <img src="/assets/images/kongkou_banner.png" className="img-fluid" />
            </div>
          

          </div>

        </div>
        <div style={{padding:"50px"}}>

        </div>
        <Footer />
        
        
      </div>
      )
  }
}

export default AboutUs;
