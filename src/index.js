import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import About from './components/About';
import Home from './components/Home';
import Faq from './components/Faq';
import Random from './components/Random';
import Movies from './components/movies/Movies';
import Convertor from './components/CurrencyConvertor';
import Boxes from './components/boxes/Boxes.js'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="faq" component={Faq} />
      <Route path="boxes" component={Boxes} />
      <Route path="random" component={Random} />
      <Route path="convertor" component={Convertor} />
      <Route path="movies" component={Movies} />
    </Route>
  </Router>,
  document.getElementById('root')
);
