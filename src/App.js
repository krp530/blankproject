import { Route, Link } from 'react-router-dom'
import About from './containers/About'
import Counter from './containers/Counter'
import Todo from './containers/Todo'
import Home from './containers/Home'
import React, { Component } from 'react';
import Reference from './modules/reference/Reference'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Links">
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/todo">Todo</Link>
        </div>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/todo" component={Todo} />
        </main>
        <Reference />
      </div>
    );
  }
}

export default App;
