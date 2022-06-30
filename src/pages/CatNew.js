import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap'

class CatNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      newCat: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
      },
      submitted: false
    }
  }
  
  handleSubmit = () => {
    this.props.createCat(this.state.newCat)
    this.setState({submitted: true})
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
    // currently making the form function
    />
  </FormGroup>
  <FormGroup>
    <Label for="age">Age</Label>
    <Input
      type="text"
      name="age"
    />
  </FormGroup>
  <FormGroup>
    <Label for="enjoys">Enjoys</Label>
    <Input
      type="text"
      name="enjoys"
    />
  </FormGroup>

  <FormGroup>
    <Label for="image">Image</Label>
    <Input
      type="text"
      name="image"
    />
  </FormGroup>
  <Button
  name="submit"
>
  Create a New Profile
</Button>
</Form>

</>
    )
  }
}
export default CatNew