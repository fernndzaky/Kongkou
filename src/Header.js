import React from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';



class Header extends React.Component {
  constructor(){
    super()
    this.state = {
      email : "",
      password : "",
      char : "",
      name : 'Dzaky',
      ages : 20,
      data : [
        {
          id : 1,
          name : "kopi a",
          rating : 4
        },
        {
          id : 2,
          name : "kopi b",
          rating : 5
        },

      ]
    }
    this.click = this.click.bind(this) //biar functionnya gak usah pake ES6
  }

  submitForm = (event) =>{

    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onSubmit = (e) =>{
    e.preventDefault()
    sessionStorage.setItem("email", this.state.email)

    window.location.href='/dashboard'
    //store ke database
  }

  componentDidMount(){
    fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then(x => {
      this.setState({
        char : x
      })
    })
  }

  click(){
    this.setState( prevState=>({

        ages: prevState.ages + 1

    }))
  }

  click2  = () => {
    this.setState( {

        ages: 20

    })
  }

  printKopi ()  {

    let newData = this.state.data.map( x => {
      return(
        <div>
          <h1>Coffee Name : {x.name}</h1>
          <p>Coffee Rating : {x.rating}</p>

        </div>
        )
    })
    return (
      newData
    )
  }

  render(){
    return(
      <div className="test">
        {this.printKopi()}
        <h1>my name is {this.state.name}</h1>
        <button onClick={this.click}>naikkan umur saya</button>
        <button onClick={this.click2}>jadikan saya 20 tahun</button>
        <h1>The character name is {this.state.char.height}</h1>
        <form onSubmit={this.onSubmit}>
          <input type="email" name="email"  onChange={this.submitForm}/>
          <input type="password" name="password" onChange={this.submitForm} />
          <button type="submit">Sign Up</button>
        </form>
        <App 
          name = {this.state.name}
          ages = {this.state.ages}
          />
      </div>
      )
  }
}

export default Header;
