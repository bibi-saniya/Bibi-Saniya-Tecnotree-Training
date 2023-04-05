import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import HomePage from './HomePage';
import GettingStartedPage from './GettingStartedPage';
import APIReferencePage from './APIReferencePage';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/getting-started" component={GettingStartedPage} />
                <Route path="/api-reference" component={APIReferencePage} />
              </Switch>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
