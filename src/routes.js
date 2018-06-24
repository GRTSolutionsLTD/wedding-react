import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Details from './pages/Details'



const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="todo" component={Todo} />
    <Route path="details" component={Details} />
    <Route path="matcher" component={Matcher}/>
  </Route>
)

export default routes
