import React from 'react';
import './css/home.css';
import Navbar from './Navbar';
import axios from 'axios';


class AdminSignIn extends React.Component {
  constructor(){
    super()
    this.state = {
      email : '',
      password : '',
      wrongPassword : false,
      notAdmin : false,
    }

  }

  componentDidMount(){
    
  }

  onChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  signIn = (e) => {
    e.preventDefault()
    const user = {
      email : this.state.email,
      password : this.state.password
    }
    axios.post('https://api.kongkou.id/users/admin',user)
    .then(response => {
        
      if(response.data.token){
        localStorage.setItem("token",response.data.token)
        window.location.href = '/admin/dashboard'
      }
      else if(response.data == 'invalidPass')
      this.setState({
        wrongPassword : true,
        notAdmin : false,

      })
      else if(!response.data){
        this.setState({
          notAdmin : true,
          wrongPassword : false

        })
      }

      

    },
    error=>{
       
    })
  }



  render(){
    return(
      <div className="h">
        
        <Navbar />
        <div style={{paddingTop:"80px"}}>
          <div className="row m-0" style={{paddingLeft:"144px"}}>
              <div className="col-md-4" style={{backgroundColor:"#0C3B2E",padding:"40px",borderRadius:"25px", width:"100%",maxHeight:"500px"}}>
              {this.state.wrongPassword &&
              <div class="alert alert-danger" role="alert">
                Wrong password
              </div>
                }

            {this.state.notAdmin &&
              <div class="alert alert-danger" role="alert">
                Not Admin
              </div>
                }  


              
                <h1 className="f_sb"style={{color:"white"}}>ADMIN SIGN IN</h1>
                <p className="f_sb"style={{color:"white"}}>Welcome Kongkou Staff !</p>
                

                <form onSubmit={this.signIn}>
                  <div className="form-group">
                    <label for="exampleInputEmail1" className="f_r" style={{color:"white"}}>EMAIL</label>
                    <input onChange={this.onChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1"  className="f_r" style={{color:"white"}}>PASSWORD</label>
                    <input type="password" onChange={this.onChange} name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div className="row m-0">
                    <div className="col-md-6 p-0">
         
                    </div>

                    <div className="col-md-6 p-0" style={{textAlign:"right"}}>
                      <div className="form-group">
                        <button type="submit" style={{width:"50%"}} className="btn button-yellow">SIGN IN</button>
                      </div>

                    </div>
                  </div>

                      
                </form>
              </div>

              <div className="col-md-8 p-0" style={{textAlign:"center"}}>
                <img src="/assets/images/asset1.png" className="img-fluid wow fadeInRight" style={{width:"65%"}} />
              </div>


          </div>
        </div>
        
      </div>
      )
  }
}

export default AdminSignIn;
