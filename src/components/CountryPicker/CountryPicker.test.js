import React from 'react'
import ReactDOM from 'react-dom'

import CountryPicker from './CountryPicker'

it('renders CountryPicker correctly', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CountryPicker />, div)
})