import React from 'react';
import './css/navbar.css';



class NavbarSearch extends React.Component {

  componentDidMount(){
 
  }

  render(){
    return(
      <div className="n">
        

        <nav className="navbar-dark navbar navbar-expand-lg">
          <div className="container">

            <img  onClick={ e => window.location.href="/"} id="logo" src="/assets/images/logo negative.png"  style={{width: "10%"}} />

            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <ul className="navbar-nav mr-auto">
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
                    <a   className="dropdown-item" href="/help">Feedback</a>
                  </div>
                </li>
                
                <li className="nav-item active" style={{marginRight:"50px"}}>
                  <a className="nav-link" href="/about">ABOUT US</a>
                </li>
                <li className="nav-item active signInBtn" style={{marginRight:"50px"}}>
                  <a className="nav-link button-yellow" href="/signin" style={{marginTop:"4px",textAlign:"center"}}>
                    SIGN IN
                  </a>
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

export default NavbarSearch;
