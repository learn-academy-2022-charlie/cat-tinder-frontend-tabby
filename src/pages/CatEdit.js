import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  NavLink
} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newCat: {
        name: this.props.cat ? this.props.cat.name : "",
        age: this.props.cat ? this.props.cat.age : "",
        enjoys: this.props.cat ? this.props.cat.enjoys : "",
        image: this.props.cat ? this.props.cat.image : ""
      },
      submitted: false
    }
  }
  handleChange = (e) => {

    let { newCat } = this.state
    newCat[e.target.name] = e.target.value

    this.setState({ newCat: newCat })
  }
  handleSubmit = () => {
    this.props.updatePet(this.state.newCat, this.props.cat.id)
    this.setState({ submitted: true })
  }

  render() {
    return (
      <>
        <h3>Create a New Pet Profile</h3>
        <Form className='form'>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.newCat.name}

            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="text"
              name="age"
              onChange={this.handleChange}
              value={this.state.newCat.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={this.handleChange}
              value={this.state.newCat.enjoys}
            />
          </FormGroup>

          <FormGroup>
            <Label for="image">Image</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={this.state.newCat.image}
            />
          </FormGroup>

          <Button
            style={{ backgroundColor: "black", color: "white" }}
            name="submit"
            onClick={this.handleSubmit}
          >
            Update this Profile
          </Button>

          {this.state.submitted && <Redirect to="/catindex" />}
        </Form>
      </>
    )
  }
}
export default CatEdit