import React, { Component } from 'react'
import {
  Card, 
  CardImg, 
  CardBody, 
  CardTitle, 
  CardSubtitle,
  Button } from 'reactstrap'
  import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
  render() {
    const { cats } = this.props
    return (
      <>
        <h3>Meet the Pets!</h3>
        {cats && cats.map((value, index) => {
          return <Card style={{ width: '18rem' }}>
            <CardImg variant="top" src={value.image} />
            <CardBody key={index}>

              <CardTitle>{value.name}</CardTitle>
              <CardSubtitle>{value.age}</CardSubtitle>
              <NavLink to={`/catshow/${value.id}`}> 
                <Button variant="primary" >Check Me Out</Button>
              </NavLink>
              
            </CardBody>
          </Card>
        
        })}
      
      </>
    )
  }
}
export default CatIndex