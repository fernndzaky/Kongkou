import React from 'react';
import axios from 'axios';
import './css/admin.css';

import AdminNavbar from './AdminNavbar';
import AdminArticleCard from './AdminArticleCard';


class AdminHome extends React.Component {
  constructor(){
    super()
    this.state = {
      article :  [],
    }
  }

  componentDidMount(){
    this.getArticleList()
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

  deleteArticle = (e) => {
    e.preventDefault()
    const article = {
      id : ''
    }
  
    axios.post('https://api.kongkou.id/trivias/update',article)
    .then(response => {
        
    },
    error=>{
        
    })
  }
  
  getArticleList = () => {
   
    axios.get('https://api.kongkou.id/articles')
    .then(response => {
        
      this.setState({
        article : response.data
      })
    },
    error=>{
       
    })
  }


  render(){
    return(
      <div className="a">
        <AdminNavbar />
        <div className="row m-0 padd">
            <div className="col-md-12 mt-5">
              <h2 className="f_sb" style={{color:"#0c3b2e"}}>YOUR <span className="f_r"> ARTICLES</span> </h2>
            </div>
            <div className="col-md-12 mt-2">
              <a href="articles/create">
                <button className="btn button-green f_r p-3">CREATE NEW ARTICLE</button>
              </a>
            </div>
            {/*START OF API ARTICLE LIST */}
            {
              this.state.article.map( (e , index) => {
                return(
                    <React.Fragment>
                      <AdminArticleCard 
                        article = {e}                      
                      />
                    </React.Fragment>

                )
              })              
              } 

              {/*END OF API ARTICLE LIST*/}
            

          </div>


      </div>

        
      )
  }
}

export default AdminHome;
