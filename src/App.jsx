import React from 'react';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      'deadline': 'December 25, 2017',
      'newDeadline': '',
    };
  }

  changeDeadline() {
    this.setState({
      'deadline': this.state.newDeadline,
    })
  }

  render() {
    return (
      <div className="app">
        <h2>Countdown to {this.state.deadline}</h2>
        <Clock
          deadline={this.state.deadline}
        />
        <Form inline>
          <FormControl className="deadlineInput" placeholder="New date" onChange={event => this.setState({'newDeadline': event.target.value})}/>
          <Button onClick={() => this.changeDeadline()}>Change</Button>
        </Form>
      </div>
    )
  }

}

export default App;