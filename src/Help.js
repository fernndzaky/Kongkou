import React from 'react';
import './css/home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginNavbar from './LoginNavbar';
import axios from 'axios';


class Help extends React.Component {
  constructor(){
    super()
    this.state = {
      
      id : '',
      name : '',
      email : '',
      password : '',
      body : '',
      address : '',
      dob : '',
      phone : '',
      loggedIn: false,
      confirmed : '',
      password1 : '',
      password2 : '',
      helpSent : false,
      notMatched : false
    }
  }




  componentDidMount(){
    this.getUserDetail()
    if(localStorage.getItem("token"))
      this.setState({
        loggedIn: true,
        helpSent:false
      })
  }


  
  onChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  sendFeedback = async (e) => {
    e.preventDefault()
    const help = {
    
      email :  '<p> from : '+ this.state.email +  '</p> <p>content   : ' + this.state.body + '</p>'
    }

    await axios.post('https://api.kongkou.id/users/help',help)
    .then(response => {
        
      this.setState({
        helpSent : true,

      })
      this.refs.body.value = ''

      
    },
    error=>{
       
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
          confirmed : response.data.confirmed
        })
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
        <div className="padd" >
          <div className="row m-0" style={{paddingTop:"70px"}}>
          
          {this.state.loggedIn &&
          
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
          
        }
           <div className={this.state.loggedIn ? "col-md-8" : "col-md-12"}>
               <form onSubmit={this.sendFeedback}>
                 <div className="pl-5 right">
        <h1 className="f_sb" style={{color:"#0c3b2e"}}>{this.state.loggedIn ? "HELP" : "FEEDBACK"} <span className="f_r"></span> </h1>
                  <h6 className="f_r" style={{color:"#808080"}}>Help us more identify the problem, we'll try our Best! </h6>
                    {
                      this.state.helpSent &&
                      <div class="alert alert-primary" role="alert">
                          Your feedback has been sent
                        </div>
                    
                    }
                   <div className="row m-0">
                     <div className="col-md-12 pl-0">
                      <div class="form-group">
                        <textarea ref="body"  onChange={this.onChange} name="body" class="form-control" id="exampleFormControlTextarea1" placeholder="Type something here..." rows="10"></textarea>
                      </div>
                     </div>  

                   </div>


                   <div className="row m-0">
                     <div className="col-md-6 pl-0">
                       
                     </div>  

                     <div className="col-md-6 pt-4 rtab" style={{textAlign:"right"}}>
                       <div class="form-group">
                         <button type="submit" style={{width:"50%"}} class="btn button-yellow updateBtn">SUBMIT</button>
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

export default Help;
