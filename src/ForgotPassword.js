import React from 'react';
import './css/signinup.css';
import Navbar from './Navbar';
import axios from 'axios';


class ForgotPassword extends React.Component {
  constructor(){
    super()
    this.state = {
      password1 : '',
      password2 : '',
      notMatched : false
    }

  }




  componentDidMount(){
 
  }
  onChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  updatePassword = (e) => {
    e.preventDefault()
    if(this.state.password1 != this.state.password2){
      this.setState({
        notMatched : true
      })
    }
    else{

      e.preventDefault()
      const user = {
        id :this.props.match.params.id,
        password : this.state.password1,
      }
      axios.post('https://api.kongkou.id/users/password',user)
      .then(response => {
          
        if(response.data){
          window.location.href = '/signin'
        }
  
      },
      error=>{
         
      })
     
    }
  }


  

  render(){
    return(
      <div className="h">
        
        <Navbar />
        <div style={{paddingTop:"80px"}} id="jarakAtas">
          <div className="row m-0 greenBox" style={{paddingLeft:"144px"}}>
             
              <div className="col-md-4 greenInsideBox" style={{backgroundColor:"#0C3B2E",padding:"40px",borderRadius:"25px", width:"100%",maxHeight:"500px"}}>
              {this.state.notMatched &&
                <div className="col-md-12">
                    <div class="alert alert-danger" role="alert">
                      Password is not matched
                    </div>
              </div>
                }
                <h1 className="f_sb"style={{color:"white"}}>FORGET PASSWORD</h1>
                <div className="form-group f_r" style={{color:"white"}} >
                  <p style={{color:"grey"}}>Dont have an account? <span><a href="/signup" style={{color:"white"}}>Create one!</a> </span></p>
                </div>

                <form onSubmit={this.updatePassword}>
                  <div className="form-group">
                    <label for="exampleInputEmail1" className="f_r" style={{color:"white"}}>INSERT PASSWORD</label>
                    <input onChange={this.onChange} name="password1" type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="insert new password..."/>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1"  className="f_r" style={{color:"white"}}>CONFIRM PASSWORD</label>
                    <input onChange={this.onChange} name="password2" type="password" className="form-control" id="exampleInputPassword1" placeholder="insert new password..." />


                  </div>
                  <div className="row m-0">
                    <div className="col-md-8 p-0">
                    

                    </div>

                    <div className="col-md-4 p-0" style={{textAlign:"center"}}>
                      <div className="form-group" style={{textAlign:"center"}}>
                        <button type="submit" style={{width:"100%",textAlign:"center"}} className="btn button-yellow">UPDATE PASSWORD</button>
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

export default ForgotPassword;
