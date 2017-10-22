import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Start from './views/Start';
import CreateForm from './views/CreateForm';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <Route exact={true} path="/" component={Start} />
            <Route exact={true} path="/form" component={CreateForm} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
