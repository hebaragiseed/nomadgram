import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './styles.scss';
import Footer from 'components/Footer';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Switch>
          <Route exact path='/' render={() => 'hello!'} />
          <Route path='/login' render={() => 'login!'} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

