import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';
import axios from 'axios';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/index";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  
  render() {
    // axios.get("http://localhost:3333/smurfs").then( res => console.log(`ab: App.js: App: render: axios.then: res:`,res));
    return (
      <Provider store={store}>
        <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand">Smurf Village Database</a>
        </nav>
        <main>
          <AddForm/>
          <SmurfDisplay/>
        </main>
      </div>
      </Provider>
    );
  }
}

export default App;

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.