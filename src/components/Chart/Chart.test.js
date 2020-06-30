import React from 'react'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'

import Chart from './Chart'

afterEach(cleanup)

it('renders', () => {
    const { asFragment } = render(<Chart data={{confirmed: '/[0-9]/', recovered: '/[0-9]/', deaths: '/[0-9]/', lastUpdate:'/[0-9]/'}}/>)
    expect(asFragment()).toMatchSnapshot()
})
