import React from 'react';
import axios from 'axios';
import './css/admin.css';

import AdminNavbar from './AdminNavbar';


class AdminHome extends React.Component {
  constructor(){
    super()
    this.state = {
      totalUsers :  '',
      totalArticles : '',
      totalTrivias : '',
    }

  }




  componentDidMount(){
   
    this.getTotalUser()
    this.getTotalArticle()
    this.getTotalTrivia()
    this.checkAdmin()
    
  }

  checkAdmin = () => {
    const user = {
      token : localStorage.getItem("token"),
    }
    axios.post('https://api.kongkou.id/users/token',user)
    .then(response => {
        
      if(!response.data.admin){
        window.location.href = '/'
      }
      

    },
    error=>{
       
    })
  }

  getTotalUser = () => {
   
    axios.get('https://api.kongkou.id/users')
    .then(response => {
        
      this.setState({
        totalUsers : response.data
      })

    },
    error=>{
       
    })
  }

  getTotalArticle = () => {
   
    axios.get('https://api.kongkou.id/articles')
    .then(response => {
        
      this.setState({
        totalArticles : response.data
      })

    },
    error=>{
       
    })
  }

  getTotalTrivia = () => {
    axios.get('https://api.kongkou.id/trivias')
    .then(response => {
        
      this.setState({
        totalTrivias : response.data
      })

    },
    error=>{
       
    })
  }



  render(){
    return(
      <div className="a">
        <AdminNavbar />
        <div className="row m-0 padd" style={{paddingTop:"50px",textAlign:"center"}}>
            <div className="col-md-4 mt-2 wow fadeInRight" >
              <a href="users" style={{color:"black",textDecoration:"none"}}>
                <div style={{backgroundColor:"#F1F1F1",textAlign:"center",borderRadius:"20px",padding:"10px"}}>
                  <h1 className="f_sb">{this.state.totalUsers.length}</h1>
                  <p className="f_r">Total Users</p>
                  
                </div>

              </a>
            </div>

            <div className="col-md-4 mt-2 wow fadeInRight">
              <a href="articles" style={{color:"black",textDecoration:"none"}}>
                <div style={{backgroundColor:"#F1F1F1",textAlign:"center",borderRadius:"20px",padding:"10px"}}>
                  <h1 className="f_sb">{this.state.totalArticles.length}</h1>
                  <p className="f_r">Total Articles</p>
                  
                </div>

              </a>
            </div>

            <div className="col-md-4 mt-2 wow fadeInRight" >
              <a href="trivias" style={{color:"black",textDecoration:"none"}}>
                <div style={{backgroundColor:"#F1F1F1",textAlign:"center",borderRadius:"20px",padding:"10px"}}>
                  <h1 className="f_sb">{this.state.totalTrivias.length}</h1>
                  <p className="f_r">Total Trivia</p>
                  
                </div>

              </a>
            </div>

        </div>

      </div>

        
      )
  }
}

export default AdminHome;
