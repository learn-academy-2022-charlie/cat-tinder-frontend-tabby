import React, { Component } from 'react'


class NotFound extends Component {
  render() {
    return (
      // <div id='not-found'>
      <div>
        <h3> Sorry,page not found</h3>
        <img className='lost-pup' src = {process.env.PUBLIC_URL+"/images/not-found-lostpup.jpeg"}/>
        
      </div>

    )
  }
}
export default NotFound