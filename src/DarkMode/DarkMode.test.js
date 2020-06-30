import React from 'react'
import ReactDOM from 'react-dom'

import DarkMode from './DarkMode'

it('renders DarkMode correctly', () => {
    const div = document.createElement('div')
    ReactDOM.render(<DarkMode />, div)
})