import React from 'react'
import {render} from '@testing-library/react'

import App from '../components/App'

test('renders app component', () => {
  const utils = render(<App />)
  const screen = utils

  // eslint-disable-next-line testing-library/no-node-access
  const appElement = screen.container.querySelector('.App')
  expect(appElement).toBeInTheDocument()
})
