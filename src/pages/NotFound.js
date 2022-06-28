import React, { Component } from 'react'
// import LostPup from './public/not-found-lost-pup.png'

class NotFound extends Component {
  render() {
    return (
      <div>
        <h3> Sorry,page not found</h3>
        <img src = {process.env.PUBLIC_URL+"/images/not-found-lostpup.jpeg"}/>
      </div>

    )
  }
}
export default NotFound