import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatShow extends Component {
  render() {
    const { cat } = this.props
    return (
      <>
        <div className="index-cards">
          {cat &&

            <Card style={{ width: '18rem', backgroundColor: "#d3d3d3" }}>
              <CardImg variant="top" src={cat.image} />
              <CardBody>

                <CardTitle>{cat.name}</CardTitle>
                <CardSubtitle>{cat.age}</CardSubtitle>
                <CardText>{cat.enjoys}</CardText>
                <NavLink to={'/catindex'}>
                  <Button style={{ backgroundColor: "black", color: "white" }} variant="primary" >Back to All Pets</Button>
                </NavLink>
                <br />
                <br />
                <NavLink to={`/catedit/${this.props.cat.id}`}>
                  <Button
                    style={{ backgroundColor: "black", color: "white" }}
                    name="submit"
                    onClick={this.handleSubmit}
                  >
                    Update this Profile
                  </Button>
                </NavLink>
                <br />
                <br />
                <NavLink to="/catindex">
                  <Button style={{ backgroundColor: "#ff4f4b", color: "black" }} onClick={() => this.props.deletePet(cat.id)}>
                    Delete Cat Profile
                  </Button>
                </NavLink>
              </CardBody>
            </Card>

          }
        </div>
      </>
    )
  }
}
export default CatShow