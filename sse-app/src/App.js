import React, { Component } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { getInitialFlightData } from './dataProvider'
import './App.css';

class App extends Component {
  constructor(pops) {
    super(props)
    this.state = {
      data: getInitialFlightData()
    }

    this.columns = [
      {
        Header: 'Origins',
        accessor: 'origin'
      },
      {
        Header: 'Flight',
        accessor: 'flight'
      },
      {
        Header: 'Arrival',
        accessor: 'arrival'
      },
      {
        Header: 'State',
        accessor: 'state'
      }
    ]
  }

  render() {
    return (
    <div className="App">
      <ReactTable data={this.state.data} columns={this.columns} />
    </div>
    )
  }
}

export default App;
