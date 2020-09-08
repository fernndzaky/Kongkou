import React from 'react';
import './css/home.css';



class Footer extends React.Component {
  constructor(){
    super()

  }




  componentDidMount(){
 
  }



  render(){
    return(
      <div className="f f_r" style={{color:"white"}}>
          

        <footer class="page-footer font-small blue pt-4" style={{backgroundColor:"#0C3B2E"}}>

          <div class="container-fluid text-center text-md-left">

            <div class="row footerPadding" style={{padding:"70px 80px",textAlign:"left"}}>

              <div class="col-md-3 mt-md-0 mt-3">


                <div class="row">
                <div class="col-md-6">
                  <img class="img-fluid" src="/assets/images/logo negative.png" alt="Logo"/>
                </div>
              </div>
            <p style={{textAlign:"left", marginTop:"20px"}}>© Copyright 2020 Kongkou.</p>
            <p style={{textAlign:"left"}}>All Rights Reserved</p>

              </div>

              <hr class="clearfix w-100 d-md-none pb-3"/>

              <div class="col-md-3 mb-md-0 mb-3">

                <h5 class="text-uppercase">Navigation</h5>
                
                <ul class="list-unstyled">
                  <li style={{textDecoration:"none !important"}}>
                    <a style={{color:"white"}} target="_blank" href="/about">About Us</a>
                  </li>
                  <li>
                    <a style={{color:"white"}} target="_blank" href="/articles">News</a>
                  </li>
                  <li>
                    <a style={{color:"white"}} target="_blank" href="/help">Support</a>
                  </li>
                
                </ul>
          

              </div>

              <div class="col-md-3 mb-md-0 mb-3">

                <h5 class="text-uppercase">About Us</h5>

                <ul class="list-unstyled">
                  <li>
                    <a style={{color:"white"}} target="_blank" href="/about">Who Are We</a>
                  </li>
                </ul>

              </div>

              <div class="col-md-3 mb-md-0 mb-3">

                <h5 class="text-uppercase">Social Media</h5>

                <ul class="list-unstyled" >
                  <li>
                    <a style={{color:"white"}} target="_blank" href="https://www.instagram.com/kongkou.id/"><i className="fa fa-instagram"></i><span style={{marginLeft:"5px"}}>Instagram</span></a>
                  </li>
                  <li>
                  <a style={{color:"white"}}  href="#!"><i className="fa fa-twitter"></i><span style={{marginLeft:"5px"}}>Twitter</span></a>
                  </li>
                  <li>
                  <a style={{color:"white"}}  href="#!"><i className="fa fa-facebook"></i><span style={{marginLeft:"5px"}}>Facebook</span></a>
                  </li>
                </ul>

              </div>

            </div>

          </div>


        </footer> 

   
       
        
      </div>
      )
  }
}

export default Footer;
