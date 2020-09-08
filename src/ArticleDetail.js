import React from 'react';
import './css/article.css';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginNavbar from './LoginNavbar';
import axios from 'axios';
import Advertisement from './Advertisement';



class ArticleDetail extends React.Component {
  constructor(){
    super()
    this.state = {
      loggedIn : false,
      comments: [],
      comment: '',
      relatedArticle: [],
      title :  '',
      createdAt :  '',
      imageName :  '',
      body :  '',
      body2 :  '',
      body3 :  '',
      admin : false
    }

  }

  onChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  
  componentDidMount(){
    if(localStorage.getItem("token"))
    this.setState({
      loggedIn: true
    })
    this.getRelatedArticle()
    this.getArticleDetail()
    this.checkAdmin()
  }
  checkAdmin = () => {
    const user = {
      token : localStorage.getItem("token"),
    }
    axios.post('https://api.kongkou.id/users/token',user)
    .then(response => {
        
      if(response.data.admin){
        this.setState({
          admin:true
        })
      }
      

    },
    error=>{
       
    })
  }


  getArticleDetail = () => {
   
    axios.get('https://api.kongkou.id/articles/'+this.props.match.params.id)
    
    .then(response => {
        
      this.setState({
        articleID :  response.data._id,
        title :  response.data.title,
        createdAt :  response.data.createdAt,
        imageName :  response.data.imageName,
        body :  response.data.body,
        body2 :  response.data.body2,
        body3 :  response.data.body3,
        comments : response.data.comments
      })
    },
    error=>{
       
    })
  }

  


  postComment = (e) => {
    e.preventDefault()
    axios.post('https://api.kongkou.id/users/token ',{'token':localStorage.getItem("token")})
    .then(response => {

      const comment = {
        id : this.props.match.params.id,
        user : response.data.name,
        comment : this.state.comment,
      }
      axios.post('https://api.kongkou.id/articles/comments',comment)
      .then(response => {
          
        window. location. reload(true)
  
      },
      error=>{
         
      })
    })
  }

  getRelatedArticle = () => {
   
    axios.get('https://api.kongkou.id/articles')
    .then(response => {
        
      this.setState({
        relatedArticle : response.data,
        
      })
    },
    error=>{
       
    })
  }


  deleteComment = async (index) =>{
     
    const data = {
      id : this.props.match.params.id,
      index : index

    }
    await axios.delete('https://api.kongkou.id/articles/comments', {
      headers: data 
     })
     
     window. location. reload(true) 
  }




  render(){
    return(
      <div className="a">
        {!this.state.loggedIn ?<Navbar />
        :
        <LoginNavbar />
        }
        <Advertisement />
        <div className="padd">
          <div className="row m-0">
            <div className="col-md-12" style={{padding:"50px 0px"}}>
              <h1 className="f_sb" style={{color:"#0C3B2E",textAlign:"center",}}>{this.state.title}</h1>
              <p className="f_r" style={{color:"#808080",textAlign:"center",}}>{new Date(this.state.createdAt).getDate()}-{new Date(this.state.createdAt).getMonth()}-{new Date(this.state.createdAt).getFullYear()} by Kongkou</p>
              <div style={{textAlign:"center"}}>
                <img className="img-fluid articleIMG" src={"https://api.kongkou.id/images/"+this.state.imageName} style={{width:"50%"}} alt="Logo"/>

              </div>
              <br/>
              <br/>
              <br/>
              <div style={{textAlign:"left !important"}}>

                <p className="f_r" style={{color:"#A1A1A1",fontSize:"18px"}}>
                {this.state.body}
              </p>

              <p className="f_r" style={{color:"#A1A1A1",fontSize:"18px"}}>
                {this.state.body2}
              </p>
              <p className="f_r" style={{color:"#A1A1A1",fontSize:"18px"}}>
                {this.state.body3}
              </p>
              </div>

            </div>
          </div>
          
          <div className="row m-0">

        
            <div className="col-md-8 p-0">
              <div className="row m-0">
                <div className="col-md-12 p-0">
      <h5 style={{color:"#1F2041"}}>{this.state.comments.length} Comments For this article</h5>
                  <hr style={{backgroundColor:"#808080"}}/>
                </div>
              </div>


              {this.state.loggedIn &&
              <div className="row m-0">
                <div className="col-md-12 p-0">
                  <form onSubmit={this.postComment}>
                    <textarea onChange={this.onChange} name="comment" placeholder="What are your thoughts on this article" className="form-control f_r" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <div style={{textAlign:"right"}}>
                      <button style={{marginTop:"10px"}} type="submit" className="btn button-yellow">Comment</button>
                    </div>
                  </form>
                  
                </div>
              </div>
              }

            {/*START OF API COMMENT LIST */}
            {
                this.state.comments.map( (e , index) => {
                 
                  return(
                      <React.Fragment>
                        <div className="row m-0">
                          <div className="col-md-12 p-0">
                  <h5 style={{color:"#1F2041",textAlign:"left",marginTop:"15px"}}>
                            {e.user}</h5>
                            
                            <br/>
                            <p className="f_r" style={{color:"#1F2041",marginTop:"-20px"}}>{e.comment}</p>
                            <button onClick={() => this.deleteComment(index)} className="btn btn-danger f_r">DELETE</button>                              <hr style={{backgroundColor:"#808080"}}/>
                          </div>
                        </div>
                      </React.Fragment>
            
                  )
                })    
              } 
              {/*END OF API COMMENT LIST*/}



            </div>

            <div className="col-md-4 pl-5 relatedArticle" >
              <p className="f_sb" style={{color:"#1F2041", fontSize:"20px"}} >Newest Article</p>

              {/*START OF API RELATED ARTICLE */}
              {
                this.state.relatedArticle.map( (e , index) => {
                  if(index < 2)
                  return(
                      <React.Fragment>
                        <div className="card" style={{height:"400px",marginTop:"20px"}} >
                          <img className="card-img-top" src={"https://api.kongkou.id/images/"+e.imageName} alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title f_sb" style={{color:"#0c3b2e"}}>{e.title}</h5>
                            <p className="card-text f_r line-clamp" style={{color:"#808080",fontSize:"15px"}}>{e.body}</p>
                            <a className="nav-link p-0" href={"/article/" + e._id}>
                              <button className="button-green f_r">READ MORE</button>
                            </a>
                          </div>
                        </div>
                      </React.Fragment>

                  )
                })              
                } 
                {/*END OF API RELATED ARTICLE*/}

          
              
            </div>
          </div>

          

    


          
        </div>
        <div style={{paddingTop:"50px"}}>

        </div>
        <Footer />

      </div>
      )
  }
}

export default ArticleDetail;
