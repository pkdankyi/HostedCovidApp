import React from 'react'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'

import Cards from './Cards'

afterEach(cleanup)

it('renders', () => {
    const { asFragment } = render(<Cards data={{confirmed: '/[0-9]/', recovered: '/[0-9]/', deaths: '/[0-9]/', lastUpdate:'/[0-9]/'}}/>)
    expect(asFragment()).toMatchSnapshot()
}) 

it('inserts text in ', () => {
    const { getByTestId, getByText } = render(<Cards data={{confirmed: '/[0-9]/', recovered: '/[0-9]/', deaths: '/[0-9]/', lastUpdate:'/[0-9]/'}} />)
    expect(getByTestId('typo_infected')).toHaveTextContent('Infected')
})

it('inserts text in ', () => {
    const { getByTestId, getByText } = render(<Cards data={{confirmed: '/[0-9]/', recovered: '/[0-9]/', deaths: '/[0-9]/', lastUpdate:'/[0-9]/'}} />)
    expect(getByTestId('typo_recovered')).toHaveTextContent('Recovered')
})

it('inserts text in ', () => {
    const { getByTestId, getByText } = render(<Cards data={{confirmed: '/[0-9]/', recovered: '/[0-9]/', deaths: '/[0-9]/', lastUpdate:'/[0-9]/'}} />)
    expect(getByTestId('typo_deaths')).toHaveTextContent('Deaths')
})

it('inserts text in ', () => {
    const { getByTestId, getByText } = render(<Cards data={{confirmed: '/[0-9]/', recovered: '/[0-9]/', deaths: '/[0-9]/', lastUpdate:'/[0-9]/'}} />)
    expect(getByTestId('typo_active')).toHaveTextContent('Active')
})



















// import React from 'react'
// import ReactDOM from 'react-dom'
// import { render, cleanup } from '@testing-library/react'
// // import "jest-dom/extend-expect"

// import Cards from './Cards'
// // import { createRenderer } from 'react-dom/test-utils'
// // import renderer from 'react-test-renderer'

// import { shallow } from '@testing-library/jest-dom'

// // afterEach(cleanup);
// describe('Cards', () => {
//     it('renders confirmed with text', () => {
//         const data = [{ text: 'foo'}]
//         const { getByText } = render(<Cards data={data} />)

//         getByText(data[0].text)
//     })
// })
// // it("renders without crashing", () => {
// //     const div = document.createElement('div');
// //     ReactDOM.render(<Cards />, div);
// // })
