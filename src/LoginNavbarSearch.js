import React from 'react';
import './css/navbar.css';



class LoginNavbarSearch extends React.Component {

  componentDidMount(){
 
  }

  render(){
    return(
      <div className="n">
        {/* POP UP*/}
        <div id="popup1" className="overlay">
              <div className="popup">
                <h1 className="f_sb"style={{color:"white"}}>SIGN UP</h1>

                <a class="close" href="#">&times;</a>
                <div className="content">
                <p className="f_sb"style={{color:"white"}}>Find yourself a great discovery of coffee ahead!</p>
                  <div className="form-group f_r" style={{color:"white"}} >
                    <p style={{color:"white"}}>Already have an account? <span><a href="/signin" style={{color:"white"}}>Sign me in!</a> </span></p>
                  </div>

                  <form>
                    <div className="row m-0">
                      <div className="col-md-12 p-0">
                        <div className="form-group">
                          <label for="exampleInputEmail1" className="f_r" style={{color:"white"}}>EMAIL</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        
                      </div>

                      <div className="col-md-12 p-0">
                        <div className="form-group">
                          <label for="exampleInputPassword1"  className="f_r" style={{color:"white"}}>PASSWORD</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
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
          {/* END OF POP UP*/}

        <nav className="navbar-dark navbar navbar-expand-lg">
          <div className="container">

            <img  onClick={ e => window.location.href="/"} id="logo" src="/assets/images/logo negative.png" style={{width: "10%"}} />

            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                
              </ul>
              <form className="form-inline my-2 my-lg-0" >
                <ul className="navbar-nav mr-auto" >
                <li className="nav-item active" >
                  {/* SEARCH BAR*/}
                  {/* 
                  <form className="example f_r" action="/search" style={{width:"90%"}} >
                  
                  <input type="text" id="" style={{width:"40%",backgroundColor:"white",borderRight:"1px solid grey"}} placeholder="Tebet, Jakarta Indonesia" name="search"/>

                  
                  
                    <input type="text" style={{backgroundColor:"white"}} placeholder="Find a coffee shop" name="search"/>
                    <button type="submit" style={{maxHeight:"42px"}}><i className="fa fa-search"></i></button>
                  </form>
                  */}
                  {/* END OF SEARCH BAR*/}
                </li>
                <li className="nav-item active" style={{marginRight:"50px"}}>
                  <a  className="nav-link" href="/">HOME</a>
                </li>
  

                <li className="nav-item dropdown active f_r"   style={{marginRight:"50px"}}>
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  EXPLORE
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown"  style={{fontSize:"16px",backgroundColor:"#0C3B2E"}}>
                    <a   className="dropdown-item" href="/about">Explore About Us</a>
                    <a   className="dropdown-item" href="/articles">Epxlore Coffee Articles</a>
                  </div>
                </li>

                <li className="nav-item active" style={{marginRight:"50px"}}>
                  <a  className="nav-link" href="/about">ABOUT US</a>
                </li>
              
                <li className="nav-item dropdown active f_r"   style={{marginRight:"50px"}}>
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-user" aria-hidden="true"></i>

                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown"  style={{fontSize:"16px",backgroundColor:"#0C3B2E"}}>
                    <a   className="dropdown-item" href="#">Profile</a>
                    <a   className="dropdown-item" href="/">Sign Out</a>
                  </div>
                </li>

              </ul>
              </form>
            </div>
          </div>
        </nav>



        
      </div>
      )
  }
}

export default LoginNavbarSearch;
