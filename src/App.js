import React from 'react'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

// import coronaImage from ',/img/'

class App extends React.Component{
    state = {
        data: {},
        country: ''
    }

    async componentDidMount(){
        const fetchedData = await fetchData()
        this.setState({ data: fetchedData})
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({ data: fetchedData, country: country })
    }

    
    render(){
        const { data, country } = this.state
        const coronaImageUrl = 'https://raw.githubusercontent.com/adrianhajdin/project_corona_tracker/master/src/images/image.png'

        return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaImageUrl} alt='COVID-19'/>
                <Cards data={ data }/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={ data } country={country} />
            </div>
        )
    }
}

export default App