import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div className="body">
        <h1> Welcome to Pet Tinder</h1>
        <img src = {process.env.PUBLIC_URL+"/images/pets-in-love.jpeg"}/>
        <p>Welcome to Pet Tinder where pets of all shapes and sizes have the chance to find their for life pet partner!!</p>
      </div>
    
    )
  }
}
export default Home