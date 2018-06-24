import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Register from './pages/Register'
import Todo from './pages/Todo'
import Weather from './pages/Weather'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Register} />
    <Route path="register" component={Register} />
    <Route path="todo" component={Todo} />
    <Route path="weather" component={Weather} />
  </Route>
)

export default routes
