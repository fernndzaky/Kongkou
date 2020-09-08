import React from 'react';
import axios from 'axios';
import './css/admin.css';

import AdminNavbar from './AdminNavbar';
import LoginNavbarSearch from './LoginNavbarSearch';


class AdminArticleCreate extends React.Component {
  constructor(){
    super()
    this.state = {
      title :  '',
      imageName :  '',
      body :  '',
      body2 :  '',
      body3 :  '',
      selectedFile : null,

    }

  }




  componentDidMount(){
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

  onChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value,
    
    })
  }

  onChangeHandler = (e) =>{
    
    this.setState({
      selectedFile: e.target.files[0],
      imageName : e.target.files[0].name,
      loaded: 0,
    })
  }

  onClickHandler = () => {
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
    axios.post("https://api.kongkou.id/articles/upload", data, {
      
    })
  }

  createArticle = async (e) => {
    e.preventDefault()
    await this.onClickHandler()
    const article = {
      title : this.state.title,
      imageName : this.state.imageName,
      body : this.state.body,
      body2 : this.state.body2,
      body3 : this.state.body3,
    }
    axios.post('https://api.kongkou.id/articles/create',article)
    .then(response => {
        
      window.location.href = '/admin/articles'
      
    },
    error=>{
       
    })
  }



  render(){
    return(
      <div className="a">
        <AdminNavbar />
          <form onSubmit={this.createArticle}>
        <div className="row m-0 padd" style={{paddingTop:"50px"}}>
            <div className="col-md-12" >
                <button  type="submit" className="btn button-green f_r p-3">POST ARTICLE</button>
            </div>

            <div className="col-md-6 mt-2">
              <div class="form-group">
                <label for="exampleFormControlInput1">TITLE OF THE ARTICLE </label>
                <input onChange={this.onChange} name="title" style={{width:"100%"}} type="text" class="form-control" id="title" placeholder="Type something here.." />
              </div>            
            </div>
            <div className="col-md-6 mt-2">
              <div class="form-group">
                <label for="exampleFormControlFile1">IMAGE OF THE ARTICLE</label>
                <input type="file" name="file" onChange={this.onChangeHandler} class="form-control-file" id="file"/>
              </div>           
            </div>

            <div className="col-md-12 mt-2" >
              <div class="form-group">
                <label for="exampleFormControlTextarea1">CONTENT OF THE ARTICLE (Par.1)</label>
                <textarea onChange={this.onChange} name="body" class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
              </div>
            </div>

            <div className="col-md-12 mt-2" >
              <div class="form-group">
                <label for="exampleFormControlTextarea1">CONTENT OF THE ARTICLE (Par.2)</label>
                <textarea onChange={this.onChange} name="body2" class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
              </div>
            </div>

            <div className="col-md-12 mt-2" >
              <div class="form-group">
                <label for="exampleFormControlTextarea1">CONTENT OF THE ARTICLE (Par.3)</label>
                <textarea onChange={this.onChange} name="body3" class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
              </div>
            </div>


        </div>
          </form>

      </div>

        
      )
  }
}

export default AdminArticleCreate;
