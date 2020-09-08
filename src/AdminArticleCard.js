import React from 'react';
import './css/signinup.css';
import axios from 'axios';


class AdminArticleCard extends React.Component {
  constructor(){
    super()

  }




  componentDidMount(){
  }
  

  delete = (e) => {
    const data = {
      id : this.props.article._id
    }
    axios.delete('https://api.kongkou.id/articles/', {
      headers: data
     })

     window. location. reload(true)

}
    


  render(){
    return(

        
           
            <div className="col-md-4" style={{marginTop:"30px"}}>
                <div className="card" style={{maxHeight:"580px"}} >
                  <a href={"/article/" + this.props.article._id} target="_blank" style={{textDecoration:"none"}}>
                    <img className="card-img-top" src={"https://api.kongkou.id/images/"+this.props.article.imageName} alt="Card image cap" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title f_sb" style={{color:"#0c3b2e"}}>{this.props.article.title}</h5>
                    
                    <p className="card-text f_r" style={{color:"#808080",fontSize:"12px"}}>Created At : {new Date(this.props.article.createdAt).getDate()}-{new Date(this.props.article.createdAt).getMonth()}-{new Date(this.props.article.createdAt).getFullYear()}</p>
                    <p className="card-text f_r line-clamp" style={{color:"#808080",fontSize:"15px"}}>{this.props.article.body}</p>
                    <div className="row m-0">
                      <div className="col-md-6" style={{textAlign:"center"}}>
                        <a className="nav-link p-0" href={"/admin/articles/edit/" + this.props.article._id} >
                          <button className="btn btn-success f_r" style={{width:"100%"}}>EDIT</button>
                        </a>
                      </div>
                      <div className="col-md-6" style={{textAlign:"center"}}>
                          <button onClick={this.delete} className="btn btn-danger f_r" style={{width:"100%",zIndex:"99"}}>DELETE</button>
                      </div>
                    </div>
                    
                  </div>
                </div>
            </div>


        

      )
  }
}

export default AdminArticleCard;
