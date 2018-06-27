import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import todos from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter'
import DetailsReducer from './reducers/detailsReducer'
<<<<<<< HEAD
import register from './reducers/registerReducer'

=======
import matcher from './reducers/matcher'
>>>>>>> 81088e7563c756cfa9fc35d5f15ae5280b5a642f
export function configureStore(history, initialState) {

    const reducer = combineReducers({
        todos,
        visibilityFilter,
        DetailsReducer,
<<<<<<< HEAD
        register,
=======
        matcher,
>>>>>>> 81088e7563c756cfa9fc35d5f15ae5280b5a642f
        routing: routerReducer
    })

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    
    const store = createStore(
        reducer,
        initialState,
        composeEnhancers(
            applyMiddleware(
                thunkMiddleware,
                routerMiddleware(history)
            )
        )
    )

    return store
}
