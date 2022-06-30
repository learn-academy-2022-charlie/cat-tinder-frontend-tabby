import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import CatNew from './CatNew'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe('When CatNew is rendered', () => {
//   const props = {
//     cat: [
//       {
//         id: 1,
//         name: "Mittens",
//         age: 5,
//         enjoys: "sunshine and warm spots",
//         image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
//       }
//     ]
//   }
    let catNewRender
    beforeEach(() => {
      catNewRender = shallow(<CatNew/>)
    })
    it('A form to create a new pet profile', ()=> {
      const formRender = catNewRender.find('Form')
      expect(formRender.length).toEqual(1)

    })
    it('display an h3', ()=> {
        const headerRender = catNewRender.find('h3')
        expect(headerRender.length).toEqual(1)
})


  it('displays an input for pet name', ()=> {
    const catNewNameInput = catNewRender.find('[name="name"]')
    expect(catNewNameInput.length).toEqual(1)
})

it('displays an input for pet age', ()=> {
  const catNewAgeInput = catNewRender.find('[name="age"]')
  expect(catNewAgeInput.length).toEqual(1)
})
it('displays an input for pet enjoys', ()=> {
  const catNewEnjoysInput = catNewRender.find('[name="enjoys"]')
  expect(catNewEnjoysInput.length).toEqual(1)
})

it('displays an input for pet image', ()=> {
  const catNewImageInput = catNewRender.find('[name="image"]')
  expect(catNewImageInput.length).toEqual(1)
})

})
