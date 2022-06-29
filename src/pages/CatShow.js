import React, { Component } from 'react'
import {
  Card, 
  CardImg, 
  CardBody, 
  CardTitle, 
  CardSubtitle,
  Button,
  CardText } from 'reactstrap'
  import { NavLink } from 'react-router-dom'

class CatShow extends Component {
  render() {
     const { cat } = this.props
    return (
      <>
      {cat && 

         <Card style={{ width: '18rem' }}>
          <CardImg variant="top" src={cat.image} />
          <CardBody>

            <CardTitle>{cat.name}</CardTitle>
            <CardSubtitle>{cat.age}</CardSubtitle>
            <CardText>{cat.enjoys}</CardText>
            <NavLink to={'/catindex'}> 
              <Button variant="primary" >Back to All Pets</Button>
            </NavLink>
            
          </CardBody>
        </Card>
      
      }
      </>
    )
  }
}
export default CatShow