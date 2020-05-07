import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component{

  state = {displayBio : false};
  constructor () {
    super ();
  }

  showBio = () => {
    this.setState ({ displayBio : !this.state.displayBio});
  }

render () {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>Hello, My name is John Travis</p>  
        {
          this.state.displayBio ? (
            <div>
              <p>I live in Seattle</p>
              <p>I'm a Software Engineer</p>
              <p>I love running and watching TV</p>
              <button onClick={this.showBio}>Hide Bio</button>
            </div>
            ) : 
            ( 
              <div>
                <button onClick={this.showBio}>Show Bio</button>
              </div>
            )
        }
        <hr />
    </div>
  )};
}

export default App;
