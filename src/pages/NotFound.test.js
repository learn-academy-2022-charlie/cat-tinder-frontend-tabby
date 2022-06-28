import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import NotFound from './NotFound'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe('When Not Found is rendered', () => {
    let renderedNotFound
  beforeEach(() => {
    renderedNotFound = shallow(<NotFound/>)
  })
    it('displays an h3 title and an image', () => {
        const notFound = shallow(<NotFound />)
        const notFoundTitleRender = notFound.find('h3')
        expect(notFoundTitleRender.length).toEqual(1)
        const notFoundImgRender = notFound.find('img')
        expect(notFoundImgRender.length).toEqual(1)
    })
})