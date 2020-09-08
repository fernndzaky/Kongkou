import React from 'react';
import './css/signinup.css';
import Navbar from './Navbar';
import axios from 'axios';
import Footer from './Footer';
import ArticleCard from './ArticleCard';
import Advertisement from './Advertisement';
import LoginNavbar from './LoginNavbar';


class ArticleList extends React.Component {
  constructor(){
    super()
    this.state = {
      article :  [],
      loggedIn : false
    }
  }

  componentDidMount(){
    this.getArticleList()
    if(localStorage.getItem("token"))
    this.setState({
      loggedIn: true
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
      <div className="h">
        
        {!this.state.loggedIn ?<Navbar />
        :
        <LoginNavbar />
        }
                <Advertisement />

        <div className="padd" >
          <div className="row m-0 featuredArticle">
            <div className="col-md-12 mt-5">
              <h2 className="f_sb" style={{color:"#0c3b2e"}}>OUR <span className="f_r"> ARTICLES</span> </h2>
            </div>
            {/*START OF API ARTICLE LIST */}
            {
              this.state.article.map( (e , index) => {
                return(
                    <React.Fragment>
                      <ArticleCard 
                        article = {e}                      
                      />
                    </React.Fragment>

                )
              })              
              } 

              {/*END OF API ARTICLE LIST*/}
            

          </div>

        </div>
        <div style={{padding:"50px"}}>

</div>
        <Footer />
        
        
      </div>
      )
  }
}

export default ArticleList;
