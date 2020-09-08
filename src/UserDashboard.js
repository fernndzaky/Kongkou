import React from 'react';
import './css/home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginNavbar from './LoginNavbar';
import axios from 'axios';
const domicile = 'Jakarta|Aceh|Bali|Banten|Bengkulu|Gorontalo|Jakarta Raya|Jambi|Jawa Barat|Jawa Tengah|Jawa Timur|Kalimantan Barat|Kalimantan Selatan|Kalimantan Tengah|Kalimantan Timur|Kepulauan Bangka Belitung|Lampung|Maluku|Maluku Utara|Nusa Tenggara Barat|Nusa Tenggara Timur|Papua|Riau|Sulawesi Selatan|Sulawesi Tengah|Sulawesi Tenggara|Sulawesi Utara|Sumatera Barat|Sumatera Selatan|Sumatera Utara|Yogyakarta';


class UserDashboard extends React.Component {
  constructor(){
    super()
    this.state = {
      id : '',
      name : '',
      email : '',
      password : '',
      address : '',
      dob : '',
      phone : '',
      loggedIn: false,
      confirmed : '',
      password1 : '',
      password2 : '',
      notMatched : false,
      firstCat : false,
      secondCat : false,
      thirdCat : false,
      fourthCat : false,
      newUser : ''
    }
  }




  componentDidMount = async () =>{
    await this.getUserDetail()

    if(localStorage.getItem("token")){
      this.setState({
        loggedIn: true
      })
      if(this.state.newUser)
      window.location.href = '#popupUser'
      
      
    }
    else
      window.location.href = '/signin'
    }
  onChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onChangePersonalized = (e) =>{
    
    this.setState({
      [e.target.name] : e.target.checked
    })
  }

  getUserDetail = (e) => {
    const user = {
      token : localStorage.getItem("token"),
    }
    axios.post('https://api.kongkou.id/users/token',user)
    .then(response => {
        
      this.setState({
        id : response.data._id,
        email : response.data.email,
        name : response.data.name,
        password : response.data.password,
        address : response.data.address,
        dob : response.data.dob,
        phone : response.data.phone,
        confirmed : response.data.confirmed,
        newUser : response.data.newUser
      })
    },
    error=>{
       
    })
  }

  updateUser = (e) => {
    e.preventDefault()
    const user = {
      token : localStorage.getItem("token"),
      name : this.state.name,
      password : this.state.password,
      address : this.state.address,
      dob : this.state.dob,
      phone : this.state.phone,
    }
  
    axios.post('https://api.kongkou.id/users/update',user)
    .then(response => {
        
      window.location.href = '/user'

    },
    error=>{
        
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
        id :this.state.id,
        password : this.state.password1,
      }
      axios.post('https://api.kongkou.id/users/password',user)
      .then(response => {
          
        if(response.data){
          localStorage.clear()
          window.location.href = '/signin'
        }
  
      },
      error=>{
         
      })
     
    }
  }

  updatePersonalized = async (e) => {
    e.preventDefault()
    const user = {
      token : localStorage.getItem("token"),
      cat1 : this.state.firstCat,
      cat2 : this.state.secondCat,
      cat3 : this.state.thirdCat,
      cat4 : this.state.fourthCat
    }
    await axios.post('https://api.kongkou.id/users/about',user)
    .then(response => {
        
 
      window.location.href='#'
      
    },
    error=>{
       
    })
    
  }


  render(){
    return(
      <div className="h">
        
        {!this.state.loggedIn ?<Navbar />
        :
        <LoginNavbar />
        }
        {/* POP UP*/}
        <div id="popupUser" className="overlay">
              <div className="popup">
                <h1 className="f_sb"style={{color:"white"}}>TELL US ABOUT YOURSELF</h1>

                <a class="close" href="#">&times;</a>
                <div className="content">
                <p className="f_sb"style={{color:"white"}}>Find yourself a great discovery of coffee ahead!</p>
                  

                  <form onSubmit={this.updatePersonalized}>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" onChange={this.onChangePersonalized} id="gridCheck" name="firstCat"/>
                      <label class="form-check-label ml-1 f_r" style={{color:"white"}} for="gridCheck">
                        I am first category
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" onChange={this.onChangePersonalized} id="gridCheck" name="secondCat"/>
                      <label class="form-check-label ml-1 f_r" style={{color:"white"}} for="gridCheck">
                        I am second category
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" onChange={this.onChangePersonalized} id="gridCheck" name="thirdCat"/>
                      <label class="form-check-label ml-1 f_r" style={{color:"white"}} for="gridCheck">
                        I am third category
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" onChange={this.onChangePersonalized} id="gridCheck" name="fourthCat"/>
                      <label class="form-check-label ml-1 f_r" style={{color:"white"}} for="gridCheck">
                        I am four category
                      </label>
                    </div>
                    <br />
                    <div class="form-group">
                        <button type="submit" style={{width:"50%"}} class="btn button-yellow">SUBMIT</button>
                    </div>
                        
                  </form>
                </div>
              </div>
            </div>
          {/* END OF POP UP*/}


          {/* POP UP FORGOT PW*/}
          <div id="changePW" className="overlay">
              <div className="popup">
              {this.state.notMatched &&
                <div className="col-md-12">
                    <div class="alert alert-danger" role="alert">
                      Password is not matched
                    </div>
              </div>
                }
                <h1 className="f_sb"style={{color:"white"}}>CHANGE PASSWORD</h1>

                <a class="close" href="#">&times;</a>
                <div className="content">
                <p className="f_sb"style={{color:"white"}}>Please insert your new password</p>
                

              
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
              </div>
            </div>
         {/* END OF POP UP FORGOT PW*/}
        <div className="padd" >
       
          <div className="row m-0" style={{paddingTop:"70px"}}>
 
            <div className="col-md-12">
            {this.state.confirmed &&
              <div class="alert alert-primary" role="alert">
                Email Verified
              </div>
             
                }

            {!this.state.confirmed &&
              <div class="alert alert-danger" role="alert">
                Email Not Verified
              </div>
             
                } 
            </div>
            <div className="col-md-4 p-4 left" style={{backgroundColor:"#0C3B2E",color:"white",borderRadius:"20px"}}>
                <div className="row m-0">
                  <div className="col-md-2">
                    <img src="/assets/images/user.png" className="img-fluid" style={{width:"100%"}} />
                  </div>  
                  <div className="col-md-9">
                    <h6 className="f_r">Hello, <br /> <span className="f_sb">{this.state.name}</span> <br /> <span className="f_sb">{this.state.email}</span> </h6>
                  </div>                
                </div>
                <br/>
                <a id="prof_nav" href="/user" >My Profile</a> <br/><br/>
                <a id="prof_nav" href="/help" >Help</a> <br/><br/>
                <a id="prof_nav" href="javascript:localStorage.clear();window.location.href='/' " >Sign out</a>
            </div>


            <div className="col-md-8">
                <form onSubmit={this.updateUser}>
                  <div className="pl-5 right">
                    <h1 className="f_sb" style={{color:"#0c3b2e"}}>My <span className="f_r"> Profile</span> </h1>
                    <div className="row m-0">
                      <div className="col-md-6 pl-0">
                      <div className="form-group">
                        <label for="" className="f_r" style={{color:"#1F2041"}}>FULL NAME</label>
                        <input onChange={this.onChange} name="name"  style={{fontSize:"14px"}} type="text" className="form-control" id="" aria-describedby="" value={this.state.name}/>
                      </div>
                      </div>  
                  
                      <div className="col-md-6 rtab">
                      <div className="form-group">
                        <label for="" className="f_r" style={{color:"#1F2041"}}>PASSWORD</label>
                        <br />
                        <a href="#changePW" class="button-yellow updateBtn">
                            CHANGE PASSWORD
                        </a>                      
                        </div>
                      
                      </div> 
                      
                    </div>

                    <div className="row m-0">
                      <div className="col-md-6 pl-0">
                        <div className="form-group">
                          <label for="exampleInputEmail1" className="f_r" style={{color:"#1F2041"}}>DOMICILE</label>

                          <select onChange={this.onChange} name="address" style={{fontSize:"14px"}} className="form-control" id="domicile">
                          <option value={this.state.address} selected disabled hidden>{this.state.address}</option>
                          {
                            
                            domicile.split("|").map( (e , index) => {
                              return <option  style={{fontSize:"14px"}} value={e}>{e}</option>
                            })
  
                              
                          }
                          </select>
                        </div>
                      </div>  

                      <div className="col-md-6 rtab">
                        <div className="form-group">
                          <label for="exampleInputEmail1" className="f_r" style={{color:"#1F2041"}}>DATE OF BIRTH</label>
                            <input type="date" id="birthday" name="dob" onChange={this.onChange}  style={{fontSize:"14px"}}className="form-control" value={this.state.dob}/>

                        </div>
                      </div>  
                    </div> 

                    <div className="row m-0">
                      <div className="col-md-6 pl-0">
                        <div className="form-group">
                          <label for="exampleInputEmail1" className="f_r" style={{color:"#1F2041"}}>PHONE NUMBER</label>
                          <input onChange={this.onChange} name="phone"  style={{fontSize:"14px"}} type="number" className="form-control" id="" aria-describedby="" value={this.state.phone}/>
                        </div>
                      </div>  

                      <div className="col-md-6 pt-4 rtab">
                        <div class="form-group">
                          <button type="submit" style={{width:"50%"}} class="btn button-yellow updateBtn">UPDATE PROFILE</button>
                        </div>
                      </div>  
                    </div> 
                  </div>

                </form>
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

export default UserDashboard;
