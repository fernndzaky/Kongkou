import React from 'react';
import axios from 'axios';
import './css/home.css';



class Trivia extends React.Component {
  constructor(){
    super()
    this.state = {
      loggedIn : false,
      trivia :  [],
      cat1 : '',
      cat2 : '',
      cat3 : '',
      cat4 : '',
    }
  }




  componentDidMount(){
    if(localStorage.getItem("token"))
    {
      this.setState({
        loggedIn: true
      })
      this.getUserDetail()

    }
      this.getTrivia()
  
       

  }

  getUserDetail = (e) => {
    const user = {
      token : localStorage.getItem("token"),
    }
    axios.post('https://api.kongkou.id/users/token',user)
    .then(response => {
        
      this.setState({
        cat1 : response.data.cat1,
        cat2 : response.data.cat2,
        cat3 : response.data.cat3,
        cat4 : response.data.cat4,
      })
       
    },
    error=>{
       
    })
  }

  getTrivia = () => {
   
    axios.get('https://api.kongkou.id/trivias')
    .then(response => {
        
      this.setState({
        trivia : response.data
      })

    },
    error=>{
       
    })
  }


  render(){
    if(this.state.trivia.length != 0)
    return(
      <div className="h wow fadeInLeft">
        <div className="padd" style={{paddingTop:"80px"}}>
          <div className="row m-0 trivia">
            <div className="col-md-3 p-0 wow fadeInLeft">
              <img src="assets/images/coffee.png" className="img-fluid" />

            </div>
            <div className="col-md-9 trivword wow fadeInRight" style={{padding:"70px"}}>
              <h2 className="f_sb" style={{color:"#0c3b2e"}}>DO YOU KNOW ?</h2>
            {
              !this.state.loggedIn ?
                <React.Fragment>
                  <h5 className="f_r" style={{color:"#0c3b2e"}}>{this.state.trivia[0].question}</h5>
                  <p className="f_sb" style={{color:"#808080", fontSize:"15px"}}>{this.state.trivia[0].answer}</p>
                </React.Fragment>

            :
              
            <div data-interval="10" id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
              {this.state.trivia.map( (e , index) => {
                switch(index){
                  case 0:
                    
                    return(
                    <div class="carousel-item active">
                      <h5 className="f_r" style={{color:"#0c3b2e"}}>{e.question}</h5>
                      <p className="f_sb" style={{color:"#808080", fontSize:"15px"}}>{e.answer}</p>
                    </div>
                    
                    )
                    
                  
                  case 1:
                    if(this.state.cat1)
                    return(
                    <div class="carousel-item">
                      <h5 className="f_r" style={{color:"#0c3b2e"}}>{e.question}</h5>
                      <p className="f_sb" style={{color:"#808080", fontSize:"15px"}}>{e.answer}</p>
                    </div>
                    )
                    break
                  

                  case 2:
                    if(this.state.cat2)
                    return(
                    <div class="carousel-item">
                      <h5 className="f_r" style={{color:"#0c3b2e"}}>{e.question}</h5>
                      <p className="f_sb" style={{color:"#808080", fontSize:"15px"}}>{e.answer}</p>
                    </div>
                    )
                    break

                    case 3:
                    if(this.state.cat3)
                    return(
                    <div class="carousel-item">
                      <h5 className="f_r" style={{color:"#0c3b2e"}}>{e.question}</h5>
                      <p className="f_sb" style={{color:"#808080", fontSize:"15px"}}>{e.answer}</p>
                    </div>
                    )
                    break

                    case 4:
                    if(this.state.cat4)
                    return(
                    <div class="carousel-item">
                      <h5 className="f_r" style={{color:"#0c3b2e"}}>{e.question}</h5>
                      <p className="f_sb" style={{color:"#808080", fontSize:"15px"}}>{e.answer}</p>
                    </div>
                    )
                    break
                  }  
                })
              }
              </div>
                </div>
                
              } 
              </div>
           

                 
          </div>        

        </div>
       
        
      </div>
      )
      else
      return null
  }
}

export default Trivia;
