import React from 'react';
import './css/admin.css';
import axios from 'axios';

import AdminNavbar from './AdminNavbar';
import LoginNavbarSearch from './LoginNavbarSearch';


class AdminTrivia extends React.Component {
  constructor(){
    super()
    this.state = {
      homeTrivia :  [],
      homePageTriviaID : '',
      homePageTriviaTitle : '',
      homePageTriviaDesc : '',
      homePageCategory : '',

      TriviaTitle1 : '',
      TriviaDesc1 : '',
      Category1 : '',

      TriviaTitle2 : '',
      TriviaDesc2 : '',
      Category2 : '',
      
      TriviaTitle3 : '',
      TriviaDesc3 : '',
      Category3 : '',

      TriviaTitle4 : '',
      TriviaDesc4 : '',
      Category4 : '',


    }

  }




  componentDidMount(){
    this.getHomePageTrivia();
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

  getHomePageTrivia = () => {
   
    axios.get('https://api.kongkou.id/trivias')
    .then(response => {
        
      this.setState({
        homeTrivia : response.data,
        homePageTriviaID : response.data[0]._id,
        homePageTriviaTitle : response.data[0].question,
        homePageTriviaDesc : response.data[0].answer,
        homePageCategory : response.data[0].category,

        TriviaTitle1 : response.data[1].question,
        TriviaDesc1 : response.data[1].answer,
        Category1 : response.data[1].category,

        TriviaTitle2 : response.data[2].question,
        TriviaDesc2 : response.data[2].answer,
        Category2 : response.data[2].category,

        TriviaTitle3 : response.data[3].question,
        TriviaDesc3 : response.data[3].answer,
        Category3 : response.data[3].category,

        TriviaTitle4 : response.data[4].question,
        TriviaDesc4 : response.data[4].answer,
        Category4 : response.data[4].category,
        
      })

    },
    error=>{
       
    })
    
  }

  onChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  


  updateHomePageTrivia = (e) => {
    e.preventDefault()
    const homePageTrivia = {
      category : this.state.homePageCategory,
      question: this.state.homePageTriviaTitle,
      answer : this.state.homePageTriviaDesc,
    }
  
     
    axios.post('https://api.kongkou.id/trivias/update',homePageTrivia)
    .then(response => {
        
    },
    error=>{
        
    })
    window. location. reload(true) 

  }

  updateTrivia1 = (e) => {
    e.preventDefault()
    const homePageTrivia = {
      category : this.state.Category1,
      question: this.state.TriviaTitle1,
      answer : this.state.TriviaDesc1,
    }
  
     
    axios.post('https://api.kongkou.id/trivias/update',homePageTrivia)
    .then(response => {
        
    },
    error=>{
        
    })
    window. location. reload(true) 

  }

  updateTrivia2 = (e) => {
    e.preventDefault()
    const homePageTrivia = {
      category : this.state.Category2,
      question: this.state.TriviaTitle2,
      answer : this.state.TriviaDesc2,
    }
  
     
    axios.post('https://api.kongkou.id/trivias/update',homePageTrivia)
    .then(response => {
        
    },
    error=>{
        
    })
    window. location. reload(true) 

  }

  updateTrivia3 = (e) => {
    e.preventDefault()
    const homePageTrivia = {
      category : this.state.Category3,
      question: this.state.TriviaTitle3,
      answer : this.state.TriviaDesc3,
    }
  
     
    axios.post('https://api.kongkou.id/trivias/update',homePageTrivia)
    .then(response => {
        
    },
    error=>{
        
    })
    window. location. reload(true) 

  }

  updateTrivia4 = (e) => {
    e.preventDefault()
    const homePageTrivia = {
      category : this.state.Category4,
      question: this.state.TriviaTitle4,
      answer : this.state.TriviaDesc4,
    }
  
     
    axios.post('https://api.kongkou.id/trivias/update',homePageTrivia)
    .then(response => {
        
    },
    error=>{
        
    })
    window. location. reload(true) 

  }


  render(){
    return(
      <div className="a">
        <AdminNavbar />
        <div className="row m-0 padd" style={{paddingTop:"40px"}}>
          <div className="col-md-12 mt-5">
              <h2 className="f_sb" style={{color:"#0c3b2e"}}>YOUR <span className="f_r">TRIVIAS</span> </h2>
            </div>
        </div>

        {/* 

        {
                   this.state.homeTrivia.map( (e , index) => {
                     return(
                      <React.Fragment>

                        <form onSubmit={this.updateHomePageTrivia}>
                                <div className="row m-0 padd">
                                    <div className="col-md-6 mt-2">
                                      <div class="form-group">
                                        <h4 className="f_sb" style={{color:"#0c3b2e"}}>{e.category} <span className="f_r">CATEGORY</span> </h4>
                                        <label for="exampleFormControlInput1">TITLE OF THE TRIVIA </label>
                                        <input onChange={this.onChange} name="homePageTriviaTitle" style={{width:"100%"}} type="text" class="form-control" value={e.question} id="title" />
                                        <input onChange={this.onChange} name="homePageCategory" style={{width:"100%"}} type="hidden" class="form-control" value={e.category} id="id" />
                                      </div>            
                                    </div>
                                    <div className="col-md-6 mt-2" style={{textAlign:"right"}}>
                                      <div class="form-group">
                                        <button  type="submit" className="btn button-green f_r p-3">UPDATE TRIVIA</button>

                                      </div>           
                                    </div>

                                    <div className="col-md-12 mt-2" >
                                      <div class="form-group">
                                        <label for="exampleFormControlTextarea1">CONTENT OF THE TRIVIA</label>
                                        <textarea onChange={this.onChange} name="homePageTriviaDesc" class="form-control" id="exampleFormControlTextarea1" value={e.answer} rows="5"></textarea>
                                      </div>
                                    </div>


                                </div>

                                
                                  </form>
                        </ React.Fragment>


                     )

                    

                   })
                   
                 } 
                 */}

                  <form onSubmit={this.updateHomePageTrivia}>
                    <div className="row m-0 padd">
                        <div className="col-md-6 mt-2">
                          <div class="form-group">
                            <h4 className="f_sb" style={{color:"#0c3b2e"}}>{this.state.homePageCategory} <span className="f_r">CATEGORY</span> </h4>
                            <label for="exampleFormControlInput1">TITLE OF THE TRIVIA </label>
                            <input onChange={this.onChange} name="homePageTriviaTitle" style={{width:"100%"}} type="text" class="form-control" value={this.state.homePageTriviaTitle} id="title" />
                            <input onChange={this.onChange} name="homePageCategory" style={{width:"100%"}} type="hidden" class="form-control" value={this.state.homePageCategory} id="category" />
                          </div>            
                        </div>
                        <div className="col-md-6 mt-2" style={{textAlign:"right"}}>
                          <div class="form-group">
                            <button  type="submit" className="btn button-green f_r p-3">UPDATE TRIVIA</button>

                          </div>           
                        </div>

                        <div className="col-md-12 mt-2" >
                          <div class="form-group">
                            <label for="exampleFormControlTextarea1">CONTENT OF THE TRIVIA</label>
                            <textarea onChange={this.onChange} name="homePageTriviaDesc" class="form-control" id="exampleFormControlTextarea1" value={this.state.homePageTriviaDesc} rows="5"></textarea>
                          </div>
                        </div>


                    </div>

                    
                      <hr />
                      </form>


                  <form onSubmit={this.updateTrivia1}>
                    <div className="row m-0 padd">
                        <div className="col-md-6 mt-2">
                          <div class="form-group">
                            <h4 className="f_sb" style={{color:"#0c3b2e"}}>{this.state.Category1} <span className="f_r">CATEGORY</span> </h4>
                            <label for="exampleFormControlInput1">TITLE OF THE TRIVIA </label>
                            <input onChange={this.onChange} name="TriviaTitle1" style={{width:"100%"}} type="text" class="form-control" value={this.state.TriviaTitle1} id="title" />
                            <input onChange={this.onChange} name="Category1" style={{width:"100%"}} type="hidden" class="form-control" value={this.state.Category1} id="category" />
                          </div>            
                        </div>
                        <div className="col-md-6 mt-2" style={{textAlign:"right"}}>
                          <div class="form-group">
                            <button  type="submit" className="btn button-green f_r p-3">UPDATE TRIVIA</button>

                          </div>           
                        </div>

                        <div className="col-md-12 mt-2" >
                          <div class="form-group">
                            <label for="exampleFormControlTextarea1">CONTENT OF THE TRIVIA</label>
                            <textarea onChange={this.onChange} name="TriviaDesc1" class="form-control" id="exampleFormControlTextarea1" value={this.state.TriviaDesc1} rows="5"></textarea>
                          </div>
                        </div>


                    </div>

                    <hr />

                      </form>


                      <form onSubmit={this.updateTrivia2}>
                    <div className="row m-0 padd">
                        <div className="col-md-6 mt-2">
                          <div class="form-group">
                            <h4 className="f_sb" style={{color:"#0c3b2e"}}>{this.state.Category2} <span className="f_r">CATEGORY</span> </h4>
                            <label for="exampleFormControlInput1">TITLE OF THE TRIVIA </label>
                            <input onChange={this.onChange} name="TriviaTitle2" style={{width:"100%"}} type="text" class="form-control" value={this.state.TriviaTitle2} id="title" />
                            <input onChange={this.onChange} name="Category2" style={{width:"100%"}} type="hidden" class="form-control" value={this.state.Category2} id="category" />
                          </div>            
                        </div>
                        <div className="col-md-6 mt-2" style={{textAlign:"right"}}>
                          <div class="form-group">
                            <button  type="submit" className="btn button-green f_r p-3">UPDATE TRIVIA</button>

                          </div>           
                        </div>

                        <div className="col-md-12 mt-2" >
                          <div class="form-group">
                            <label for="exampleFormControlTextarea1">CONTENT OF THE TRIVIA</label>
                            <textarea onChange={this.onChange} name="TriviaDesc2" class="form-control" id="exampleFormControlTextarea1" value={this.state.TriviaDesc2} rows="5"></textarea>
                          </div>
                        </div>


                    </div>

                    <hr />

                      </form>




                      <form onSubmit={this.updateTrivia3}>
                    <div className="row m-0 padd">
                        <div className="col-md-6 mt-2">
                          <div class="form-group">
                            <h4 className="f_sb" style={{color:"#0c3b2e"}}>{this.state.Category3} <span className="f_r">CATEGORY</span> </h4>
                            <label for="exampleFormControlInput1">TITLE OF THE TRIVIA </label>
                            <input onChange={this.onChange} name="TriviaTitle3" style={{width:"100%"}} type="text" class="form-control" value={this.state.TriviaTitle3} id="title" />
                            <input onChange={this.onChange} name="Category3" style={{width:"100%"}} type="hidden" class="form-control" value={this.state.Category3} id="category" />
                          </div>            
                        </div>
                        <div className="col-md-6 mt-2" style={{textAlign:"right"}}>
                          <div class="form-group">
                            <button  type="submit" className="btn button-green f_r p-3">UPDATE TRIVIA</button>

                          </div>           
                        </div>

                        <div className="col-md-12 mt-2" >
                          <div class="form-group">
                            <label for="exampleFormControlTextarea1">CONTENT OF THE TRIVIA</label>
                            <textarea onChange={this.onChange} name="TriviaDesc3" class="form-control" id="exampleFormControlTextarea1" value={this.state.TriviaDesc3} rows="5"></textarea>
                          </div>
                        </div>


                    </div>

                    <hr />

                      </form>


                      <form onSubmit={this.updateTrivia4}>
                    <div className="row m-0 padd">
                        <div className="col-md-6 mt-2">
                          <div class="form-group">
                            <h4 className="f_sb" style={{color:"#0c3b2e"}}>{this.state.Category4} <span className="f_r">CATEGORY</span> </h4>
                            <label for="exampleFormControlInput1">TITLE OF THE TRIVIA </label>
                            <input onChange={this.onChange} name="TriviaTitle4" style={{width:"100%"}} type="text" class="form-control" value={this.state.TriviaTitle4} id="title" />
                            <input onChange={this.onChange} name="Category4" style={{width:"100%"}} type="hidden" class="form-control" value={this.state.Category4} id="category" />
                          </div>            
                        </div>
                        <div className="col-md-6 mt-2" style={{textAlign:"right"}}>
                          <div class="form-group">
                            <button  type="submit" className="btn button-green f_r p-3">UPDATE TRIVIA</button>

                          </div>           
                        </div>

                        <div className="col-md-12 mt-2" >
                          <div class="form-group">
                            <label for="exampleFormControlTextarea1">CONTENT OF THE TRIVIA</label>
                            <textarea onChange={this.onChange} name="TriviaDesc4" class="form-control" id="exampleFormControlTextarea1" value={this.state.TriviaDesc4} rows="5"></textarea>
                          </div>
                        </div>


                    </div>

                    <hr />

                      </form>




{/*
        <form>
        <div className="row m-0 padd">
          <div className="col-md-12 mt-5">
              <h2 className="f_sb" style={{color:"#0c3b2e"}}>PERSONALIZED <span className="f_r">TRIVIA</span> </h2>
              <div class="form-group">
                <button  type="submit" className="btn button-green f_r p-3">UPDATE TRIVIA</button>

              </div>  
          </div>
        </div>

        <div className="row m-0 padd">
        

            <div className="col-md-6 mt-2 p-3">
              <div class="form-group">
                <h4 className="f_sb" style={{color:"#0c3b2e"}}>SMOKER <span className="f_r">CATEGORY</span> </h4>

                <label for="exampleFormControlInput1">TITLE OF THE TRIVIA </label>
                <input style={{width:"100%"}} type="text" class="form-control" value="A COFFEE BEAN IS'NT BEAN, IT'S THE PIT OF A FRUIT" id="title" />
                <label for="exampleFormControlTextarea1">CONTENT OF THE TRIVIA</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" value="Coffee beans are actually seeds, which come from the inside of a fruit very similar to a cherry. In fact, they are often called coffee cherries. The plant’s scientific name begins with the genus Coffea," rows="5"></textarea>

              </div>            
            </div>

            <div className="col-md-6 mt-2 p-3">
              <div class="form-group">
                <h4 className="f_sb" style={{color:"#0c3b2e"}}>2nd <span className="f_r">CATEGORY</span> </h4>

                <label for="exampleFormControlInput1">TITLE OF THE TRIVIA </label>
                <input style={{width:"100%"}} type="text" class="form-control" value="A COFFEE BEAN IS'NT BEAN, IT'S THE PIT OF A FRUIT" id="title" />
                <label for="exampleFormControlTextarea1">CONTENT OF THE TRIVIA</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" value="Coffee beans are actually seeds, which come from the inside of a fruit very similar to a cherry. In fact, they are often called coffee cherries. The plant’s scientific name begins with the genus Coffea," rows="5"></textarea>

              </div>            
            </div>
            
            <div className="col-md-6 mt-2 p-3">
              <div class="form-group">
                <h4 className="f_sb" style={{color:"#0c3b2e"}}>3rd <span className="f_r">CATEGORY</span> </h4>

                <label for="exampleFormControlInput1">TITLE OF THE TRIVIA </label>
                <input style={{width:"100%"}} type="text" class="form-control" value="A COFFEE BEAN IS'NT BEAN, IT'S THE PIT OF A FRUIT" id="title" />
                <label for="exampleFormControlTextarea1">CONTENT OF THE TRIVIA</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" value="Coffee beans are actually seeds, which come from the inside of a fruit very similar to a cherry. In fact, they are often called coffee cherries. The plant’s scientific name begins with the genus Coffea," rows="5"></textarea>

              </div>            
            </div>

            <div className="col-md-6 mt-2 p-3">
              <div class="form-group">
                <h4 className="f_sb" style={{color:"#0c3b2e"}}>4th <span className="f_r">CATEGORY</span> </h4>

                <label for="exampleFormControlInput1">TITLE OF THE TRIVIA </label>
                <input style={{width:"100%"}} type="text" class="form-control" value="A COFFEE BEAN IS'NT BEAN, IT'S THE PIT OF A FRUIT" id="title" />
                <label for="exampleFormControlTextarea1">CONTENT OF THE TRIVIA</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" value="Coffee beans are actually seeds, which come from the inside of a fruit very similar to a cherry. In fact, they are often called coffee cherries. The plant’s scientific name begins with the genus Coffea," rows="5"></textarea>

              </div>            
            </div>
           



        </div>
          </form>

 */}
      <div className="p-5">

      </div>

      </div>

        
      )
  }
}

export default AdminTrivia;
