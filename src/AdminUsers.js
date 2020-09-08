import React from 'react';
import './css/admin.css';

import AdminNavbar from './AdminNavbar';
import axios from 'axios';


class AdminUsers extends React.Component {
  constructor(){
    super()
    this.state = {
      users :  [],
      searchEmail : ''
    }

  }




  componentDidMount(){
    this.getUser()
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
      [e.target.name] : e.target.value
    })
  }
  getUser = () => {
   
    axios.get('https://api.kongkou.id/users')
    .then(response => {
        
      this.setState({
        users : response.data
      })

    },
    error=>{
       
    })
  }

  deleteUser = (e) => {
    const data = {
      id : e,

    }
    axios.delete('https://api.kongkou.id/users', {
      headers: data
     })
     
     window. location. reload(true) 
  }

  searchUser = (e) => {
      this.setState({
        searchEmail : e.target.value
      })
       
  }

  


  render(){
    return(
      <div className="a">
        <AdminNavbar />
        <div className="row m-0 padd" style={{paddingTop:"50px"}}>
            <div className="col-md-6">
              <h2 className="f_sb" style={{color:"#0c3b2e"}}>YOUR <span className="f_r"> USERS</span> </h2>
            </div>
            <div className="col-md-6" style={{textAlign:"right !important"}}>
              <form class="form-inline my-2 my-lg-0">
                <input onChange={this.searchUser} name="searchEmail" class="form-control mr-sm-2" type="search" placeholder="Search by email or name" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>            
            </div>
            <div className="col-md-12 mt-3">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Domicile</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Cat 1</th>
                    <th scope="col">Cat 2</th>
                    <th scope="col">Cat 3</th>
                    <th scope="col">Cat 4</th>

                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                   this.state.users.map( (e , index) => {
                     return(
                          <React.Fragment>
                            {
                              (e.email.includes(this.state.searchEmail) || e.name.includes(this.state.searchEmail) )&&
                              <tr>
                                <th scope="row">{index+1}</th>
                                <td>{e.email}</td>
                                <td>{e.name}</td>
                                <td>{e.dob}</td>
                                <td>{e.address}</td>
                                <td>{e.phone}</td>
                                <td>{e.cat1 ? 'true' : 'false'}</td>
                                <td>{e.cat2 ? 'true' : 'false'}</td>
                                <td>{e.cat3 ? 'true' : 'false'}</td>
                                <td>{e.cat4 ? 'true' : 'false'}</td>
                                <td>
                                  <button onClick={() => this.deleteUser(e._id)} className="btn btn-danger f_r">DELETE</button>
                                </td>
                              </tr>
                              
                            }

                          </React.Fragment>

                     )
                   })              
                  } 
                 
                </tbody>
              </table>
            </div>

        </div>

      </div>

        
      )
  }
}

export default AdminUsers;
