import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Pagination from './Pagination';
import ListItems from './ListItems';
import DonationDetail from './DonationDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Router>
            <Switch>
              <Route path="/Items/:id" component={DonationDetail}/>
              <Route path="/" component={ListItems}/>
            </Switch>
          </Router>
          <Pagination total={21} />
        </div>
      </div>
    );
  }
}

export default App;
