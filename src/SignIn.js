import React from 'react';
import './css/signinup.css';
import Navbar from './Navbar';
import axios from 'axios';


class SignIn extends React.Component {
  constructor(){
    super()
    this.state = {
      email : '',
      emailForget : '',
      password : '',
      wrongEmail : false,
      wrongPassword : false,
      forgetSent : false,
    }

  }




  componentDidMount(){
 
  }
  onChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  forgetPassword =  (e) => {
    e.preventDefault()
    const user = {
      email : this.state.emailForget,
    }
    axios.post('https://api.kongkou.id/users/forget',user)
    .then(response => {
        
      if(response.data == 'invalidEmail')
      {
        this.setState({
          wrongEmailForget : true,
        })

      }
      else if(response.data){
        this.setState({
          forgetSent : true
        })
      }

    },
    error=>{
       
    })
   
    
  }
  signIn = (e) => {
    e.preventDefault()
    const user = {
      email : this.state.email,
      password : this.state.password
    }
    axios.post('https://api.kongkou.id/users/login',user)
    .then(response => {
      if(response.data == 'invalidEmail')
      {
        this.setState({
          wrongEmail : true,
          wrongPassword : false,
        })

      }

      else if(response.data == 'invalidPass')
      {
        this.setState({
          wrongPassword : true,
          wrongEmail : false
        })
      }
      else{
        localStorage.setItem("token",response.data.token)
        window.location.href = '/'
      }

    },
    error=>{
       
    })
  }

  

  render(){
    return(
      <div className="h">
        
        <Navbar />

          {/* POP UP FORGOT PW*/}
          <div id="forget" className="overlay">
              <div className="popup">
                <h1 className="f_sb"style={{color:"white"}}>FORGET YOUR PASSWORD?</h1>

                <a class="close" href="#">&times;</a>
                <div className="content">
                <p className="f_sb"style={{color:"white"}}>Please insert your email down below</p>
                {this.state.forgetSent &&
                  <div class="alert alert-info" role="alert">
                Link for password change has been sent !
              </div>
                }

              {this.state.wrongEmailForget &&
                  <div class="alert alert-danger" role="alert">
                Email is not registered !
              </div>
                }

              {!this.state.forgetSent &&
                   <form  onSubmit={this.forgetPassword}>
                   <div className="row m-0">
                     <div className="col-md-12 p-0">
                       <div className="form-group">
                         <input onChange={this.onChange} name="emailForget" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                       </div>
                       
                     </div>
                   
                     
                   </div>

                   <div className="row m-0">
             
                     <div className="col-md-6 p-0">
                       <div class="form-group">
                         <button type="submit" style={{width:"70%",textAlign:"center"}} class="btn button-yellow">FORGET PASSWORD </button>
                       </div>

                     </div>
                   </div>

                       
                 </form>
                }

                 
                </div>
              </div>
            </div>
         {/* END OF POP UP FORGOT PW*/}
        <div style={{paddingTop:"80px"}} id="jarakAtas">
          <div className="row m-0 greenBox" style={{paddingLeft:"144px"}}>
              <div className="col-md-4 greenInsideBox" style={{backgroundColor:"#0C3B2E",padding:"40px",borderRadius:"25px", width:"100%",maxHeight:"500px"}}>
              {this.state.wrongPassword &&
              <div class="alert alert-danger" role="alert">
                Wrong password
              </div>
                }

            {this.state.wrongEmail &&
              <div class="alert alert-danger" role="alert">
                Wrong Email
              </div>
                }  

            {this.state.forgetSent &&
              <div class="alert alert-info" role="alert">
                Link for password change has been sent !
              </div>
                }  
                <h1 className="f_sb"style={{color:"white"}}>SIGN IN</h1>
                <p className="f_sb"style={{color:"white"}}>Find yourself a great discovery of coffee ahead!</p>
                <div className="form-group f_r" style={{color:"white"}} >
                  <p style={{color:"grey"}}>Dont have an account? <span><a href="/signup" style={{color:"white"}}>Create one!</a> </span></p>
                </div>

                <form onSubmit={this.signIn}>
                  <div className="form-group">
                    <label for="exampleInputEmail1" className="f_r" style={{color:"white"}}>EMAIL</label>
                    <input onChange={this.onChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1"  className="f_r" style={{color:"white"}}>PASSWORD</label>
                    <input onChange={this.onChange} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    <a href="#forget" className="f_r" style={{color:"grey"}}>Forgot your password?</a>


                  </div>
                  <div className="row m-0">
                    <div className="col-md-6 p-0">
                      
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1" style={{color:"white"}}>Remember me</label>
                      </div>

                    </div>

                    <div className="col-md-6 p-0" style={{textAlign:"right"}}>
                      <div className="form-group">
                        <button type="submit" style={{width:"50%"}} className="btn button-yellow">SIGN IN</button>
                      </div>

                    </div>
                  </div>

                      
                </form>
              </div>

              <div className="col-md-8 p-0 imgRight" style={{textAlign:"center"}}>
                <img src="/assets/images/asset1.png" className="img-fluid wow fadeInRight" style={{width:"65%"}} />
              </div>


          </div>
        </div>
        
      </div>
      
      )
  }
}

export default SignIn;
