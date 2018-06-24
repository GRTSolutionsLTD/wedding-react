import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Register from './pages/Register'
import Todo from './pages/Todo'
import Details from './pages/Details'
import Matcher from './pages/Matcher'


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Register} />
    <Route path="register" component={Register} />
    <Route path="todo" component={Todo} />
    <Route path="details" component={Details} />
    <Route path="matcher" component={Matcher}/>
  </Route>
)

export default routes
