import React from 'react'
import Search from './Search'
import renderer from 'react-test-renderer'

test('Search should search titles', () => {
  const component = renderer.create(<Search />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})