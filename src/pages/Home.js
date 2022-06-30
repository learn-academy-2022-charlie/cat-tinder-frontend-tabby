import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <>
      
      <h1 className='home-header'>Welcome to Pet Tinder</h1>
      
      <div>
        <img id="right" src = {process.env.PUBLIC_URL+"/images/pets-in-love.jpeg"}/>
        <img id= "left" src = {process.env.PUBLIC_URL+"/images/pets-in-love.jpeg"}/>
      </div>
      <p>Welcome to Pet Tinder where pets of all shapes and sizes have the chance to find their for life pet partner!!</p>
      </>
  )
  }
}
export default Home