import React from 'react'
import dom from 'react-dom'
import Page from '../pages/index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  dom.render(<Page />, div)
  dom.unmountComponentAtNode(div)
})
