import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CatEdit from './pages/CatEdit'
import CatIndex from './pages/CatIndex'
import CatNew from './pages/CatNew'
import CatShow from './pages/CatShow'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: []
    }
  }
  componentDidMount() {
    this.readPet()

  }
  createPet = (newPet) => {
    fetch("http://localhost:3000/pets", {
      body: JSON.stringify(newPet),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(payload => this.readPet())
      .catch(errors => console.log("Pet create errors:", errors))

  }

  readPet = () => {
    fetch("http://localhost:3000/pets")
      .then(response => response.json())
      .then(payload => this.setState({ cats: payload }))
      .catch(errors => console.log("Pet read errors:", errors))
  }
  updatePet = (pet, id) => {
    fetch(`http://localhost:3000/pets/${id}`, {
      body: JSON.stringify(pet),
      headers: {
        "Content-Type": "application/json"
      },

      method: "PATCH"
    })
      .then(response => response.json())
      .then(payload => this.readPet())
      .catch(errors => console.log("Pet update errors:", errors))
  }

  deletePet = (id) => {
    fetch(`http://localhost:3000/pets/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then(response => response.json())
      .then(payload => this.readPet())
      .catch(errors => console.log("Pet delete errors:", errors))
  }


  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/catindex" render={(props) => <CatIndex cats={this.state.cats} />} />
            <Route path="/catshow/:id" render={(props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find(cat => cat.id === +id)
              return <CatShow cat={cat} deletePet={this.deletePet} />
            }} />

            <Route
              path="/catnew"
              render={(props) => <CatNew createPet={this.createPet} />}
            />
            <Route path="/catedit/:id" render={(props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find(cat => cat.id === +id)
              return <CatEdit updatePet={this.updatePet} cat={cat} />
            }} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>



      </>
    )
  }
}
export default App