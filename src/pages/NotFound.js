import React, { Component } from 'react'


class NotFound extends Component {
  render() {
    return (
      <div id='not-found'>
        <h3> Sorry,page not found</h3>
        <img src = {process.env.PUBLIC_URL+"/images/not-found-lostpup.jpeg"}/>
        
      </div>

    )
  }
}
export default NotFound