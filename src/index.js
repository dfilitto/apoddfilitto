import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//paginas do site
import Apod from './pages/Apod';
import Desenvolvedores from './pages/Desenvolvedores';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Apod} />
        <Route path="/desenvolvedores" exact={true} component={Desenvolvedores} />
        <Route path="*" component={Apod} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

