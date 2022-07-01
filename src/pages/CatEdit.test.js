import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import CatEdit from './CatEdit'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe('When CatEdit is rendered', () => {
    let catEditRender
    beforeEach(() => {
        catEditRender = shallow(<CatEdit />)
    })
    it('A form to create a new pet profile', () => {
        const formRender = catEditRender.find('Form')
        expect(formRender.length).toEqual(1)

    })
    it('display an h3', () => {
        const headerRender = catEditRender.find('h3')
        expect(headerRender.length).toEqual(1)
    })


    it('displays an input for pet name', () => {
        const catEditNameInput = catEditRender.find('[name="name"]')
        expect(catEditNameInput.length).toEqual(1)
    })

    it('displays an input for pet age', () => {
        const catEditAgeInput = catEditRender.find('[name="age"]')
        expect(catEditAgeInput.length).toEqual(1)
    })
    it('displays an input for pet enjoys', () => {
        const catEditEnjoysInput = catEditRender.find('[name="enjoys"]')
        expect(catEditEnjoysInput.length).toEqual(1)
    })

    it('displays an input for pet image', () => {
        const catEditImageInput = catEditRender.find('[name="image"]')
        expect(catEditImageInput.length).toEqual(1)
    })

})
