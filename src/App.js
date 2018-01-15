import React, { Component } from 'react';
import SkiDayList from './component/SkiDayList'; 


class App extends Component {
  render() {
    return (
      <SkiDayList 
        days={
          [
            {
              resort: "Jakarta",
              date: new Date("1/1/2018"),
              powder: true,
              backcountry: false 
            },
            {
              resort: "Bandung",
              date: new Date("2/2/2018"),
              powder: false,
              backcountry: true 
            },
            {
              resort: "Bali",
              date: new Date("3/3/2018"),
              powder: true,
              backcountry: false 
            }
          ]
        }
      />
    );
  }
}

export default App;
