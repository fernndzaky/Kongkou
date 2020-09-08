import React from 'react';
import './css/signinup.css';
import Navbar from './Navbar';
import axios from 'axios';

const domicile = 'Jakarta|Aceh|Bali|Banten|Bengkulu|Gorontalo|Jakarta Raya|Jambi|Jawa Barat|Jawa Tengah|Jawa Timur|Kalimantan Barat|Kalimantan Selatan|Kalimantan Tengah|Kalimantan Timur|Kepulauan Bangka Belitung|Lampung|Maluku|Maluku Utara|Nusa Tenggara Barat|Nusa Tenggara Timur|Papua|Riau|Sulawesi Selatan|Sulawesi Tengah|Sulawesi Tenggara|Sulawesi Utara|Sumatera Barat|Sumatera Selatan|Sumatera Utara|Yogyakarta';

class SignUp extends React.Component {
  constructor(){
    super();

    this.state = {
      email : '',
      password : '',
      name : '',
      domicile : [],
      dob : '',
      address : '',
      phone : '',
      emailSent : false
    }

  }




  componentDidMount(){
  }


  
  onChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  
  sendVerification =  () => {
    const user = {
      email : this.state.email,
    }
    axios.post('https://api.kongkou.id/users/email',user)
    .then(response => {
        
      window.location.href = '/signin'

    },
    error=>{
       
    })
  }

  

  signUp = async (e) => {
    e.preventDefault()
    const user = {
      email : this.state.email,
      password : this.state.password,
      name : this.state.name,
      dob : this.state.dob,
      address : this.state.address,
      phone : this.state.phone,
      emailSend:this.state.email,
    }
    await axios.post('https://api.kongkou.id/users/register',user)
    .then(response => {
        
      
    },
    error=>{
       
    })
    this.sendVerification()
    
  }



  render(){
    return(
      <div className="h">
        
        <Navbar />
        <div style={{paddingTop:"80px"}} id="jarakAtas">
          <div className="row m-0 greenBox" style={{paddingLeft:"144px"}}>
              <div className="col-md-4 greenInsideBox" style={{backgroundColor:"#0C3B2E",padding:"40px",borderRadius:"25px", width:"100%",maxHeight:"550px"}}>
                <h1 className="f_sb"style={{color:"white"}}>SIGN UP</h1>
                <p className="f_sb"style={{color:"white"}}>Find yourself a great discovery of coffee ahead!</p>
                <div className="form-group f_r" style={{color:"white"}} >
                  <p style={{color:"grey"}}>Already have an account? <span><a href="/signin" style={{color:"white"}}>Sign me in!</a> </span></p>
                </div>

                <form onSubmit={this.signUp}>
                  <div className="row m-0">
                    <div className="col-md-6 pt-0 pl-0 p-0">
                      <div className="form-group">
                        <label for="exampleInputEmail1" className="f_r" style={{color:"white"}}>EMAIL</label>
                        <input name="email" onChange={this.onChange} style={{fontSize:"14px"}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                      </div>
                    </div>
                    <div className="col-md-6 pt-0 pr-0 pb-0 rtab">
                      <div className="form-group">
                        <label for="exampleInputPassword1"  className="f_r" style={{color:"white"}}>PASSWORD</label>
                        <input name="password" onChange={this.onChange} style={{fontSize:"14px"}} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                      </div>
                    </div>
                  </div>

                  <div className="row m-0">
                    <div className="col-md-6 pt-0 pl-0 p-0">
                      <div className="form-group">
                        <label for="exampleInputEmail1" className="f_r" style={{color:"white"}}>FULL NAME</label>
                        <input name="name" onChange={this.onChange} style={{fontSize:"14px"}} type="text" className="form-control" id="" aria-describedby="" placeholder="Enter Full Name"/>
                      </div>
                    </div>
                    <div className="col-md-6 pt-0 pr-0 pb-0 rtab">
                      <div className="form-group">
                        <label for="exampleInputEmail1" className="f_r" style={{color:"white"}}>DATE OF BIRTH</label>
                        <input type="date" id="birthday" name="dob" onChange={this.onChange}  style={{fontSize:"14px"}}className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="row m-0">
                    <div className="col-md-6 pt-0 pl-0 p-0">
                      <div className="form-group">
                        <label for="exampleInputEmail1" className="f_r" style={{color:"white"}}>DOMICILE</label>
                        <select onChange={this.onChange} name="address" style={{fontSize:"14px"}} className="form-control" id="domicile">
                          {
                            
                            domicile.split("|").map( (e , index) => {
                              return <option  style={{fontSize:"14px"}} value={e}>{e}</option>
  
                            })
  
                              
                          }
                          </select>
                        </div>
                    </div>
                    <div className="col-md-6 pt-0 pr-0 pb-0 rtab">
                      <div className="form-group">
                        <label for="exampleInputEmail1" className="f_r" style={{color:"white"}}>PHONE NUMBER</label>
                        <input name="phone" onChange={this.onChange} style={{fontSize:"14px"}} type="text" className="form-control" id="" aria-describedby="" placeholder="Enter Phone Number"/>
                      </div>
                    </div>
                  </div>





                  
                  
                  <div className="row m-0">
                    <div className="col-md-6 p-0">
                      
                    

                    </div>

                    <div className="col-md-6 p-0" style={{textAlign:"right"}}>
                      <div class="form-group">
                        <button type="submit" style={{width:"50%"}} class="btn button-yellow">SIGN UP</button>
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

export default SignUp;
