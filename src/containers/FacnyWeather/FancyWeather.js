import React, { Component } from 'react';
import axios from 'axios';

import Today from '../../components/Today/Today';
import Day from '../../components/Day/Day';

import styles from './FancyWeather.module.css';
import Header from '../Header/Header';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class FancyWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: null,
      days: [],
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }


  componentDidMount() {
    this.fetchForecast('Minsk');
  }


  onSubmitHandler(value) {
    console.log('submited: ', value);
    console.log('this', this);
    this.fetchForecast(value);
  }

  getForecastIcon = (iconCode) => `http://openweathermap.org/img/wn/${iconCode}@2x.png`

  async fetchForecast(city) {
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(URL);
    console.log({ response });

    this.setState({
      forecast: response.data,
      days: response.data.list.filter((item) => item.dt_txt.includes('15:00:00')),
    });
  }

  render() {
    const { forecast, days } = this.state;
    const [today, tomorrow, afterTomorrow, afterAfterTomorrow] = days;

    return (
      <>
        <div className={styles.FancyWeather}>
          <Header search={this.onSubmitHandler} />
          <h1>Today</h1>

          {
        !forecast
          ? <p>Loading</p>
          : (
            <>
              <Today message="props from parent component" forecast={forecast} />
              <div className={styles.nextDays}>
                <Day getIconUrl={this.getForecastIcon} data={tomorrow} />
                <Day getIconUrl={this.getForecastIcon} data={afterTomorrow} />
                <Day getIconUrl={this.getForecastIcon} data={afterAfterTomorrow} />
              </div>
            </>
          )
          }
        </div>

      </>
    );
  }
}

export default FancyWeather;
