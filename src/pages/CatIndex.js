import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
  render() {
    const { cats } = this.props
    return (
      <>
        <h3>Meet the Pets!</h3>
        <div className="index-cards">
          {cats && cats.map((value, index) => {
            return (
              <Card key={index} style={{ width: '18rem', backgroundColor: "#d3d3d3" }}>
                <CardImg variant="top" src={value.image} />
                <CardBody>

                  <CardTitle>{value.name}</CardTitle>
                  <CardSubtitle>{value.age}</CardSubtitle>
                  <NavLink to={`/catshow/${value.id}`}>
                    <Button style={{ backgroundColor: "black", color: "white" }} variant="primary" >Check Me Out</Button>
                  </NavLink>

                </CardBody>
              </Card>
            )
          })}
        </div>

      </>
    )
  }
}
export default CatIndex