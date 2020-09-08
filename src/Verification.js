import React from 'react';
import axios from 'axios';
import './css/navbar.css';



class Verificaiton extends React.Component {

  componentDidMount(){
    this.verify()
  }

  verify = () => {

    axios.post('https://api.kongkou.id/users/email/'+this.props.match.params.id)
    .then(response => {
        
      if(response){
        window.location.href = '/user'
      }
    },
    error=>{
       
    })
  }

  render(){
    return(
      <div className="n">
        
      </div>
      )
  }
}

export default Verificaiton;
