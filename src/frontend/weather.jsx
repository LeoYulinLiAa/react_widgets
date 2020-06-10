import React from 'react';

export default class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: ""
    }
  }


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      const latitude = pos.coords.latitude;
      const longtitude = pos.coords.longitude;
      this.makeWeatherRequest(latitude, longtitude);
    })
  }

  render() {
    return <p>{this.state.weather}</p>
  }

  makeWeatherRequest(lat, lon) {
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
        if (xmlhttp.status == 200) {
          this.setState({ weather: xmlhttp.responseText })
        } else if (xmlhttp.status == 400) {
          alert('There was an error 400');
        } else {
          alert('something else other than 200 was returned');
        }
      }
    };

    xmlhttp.open("GET", this.endPoint(lat, lon), true);
    xmlhttp.send();
  }

  endPoint(lat, lon) {
    return `https://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=439d4b804bc8187953eb36d2a8c26a02`;
  }

}

