import React from 'react';
import styles from './App.module.css';
import {
    Cards,
    Chart,
    CountryPicker
} from './components';

import { fetchData } from './api';
import coronaImage from './images/image.png';

class App extends React.Component {
    
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }

    handleCountryChange = async(country) => {
        //fetch data
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
        //set the data
    }
    render() {
        // const { data } = this.state;
        const { data, country} = this.state;
        return ( 
            <div className={styles.container}>
                <img src={coronaImage} alt="COVID-19" className={styles.image} />
                <Cards data = {data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        );
    }
}

export default App;