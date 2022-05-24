import { compose, applyMiddleware } from 'redux';
import { rootReducer } from '../combine-reducers';
import { logger } from 'redux-logger';
import { legacy_createStore as createStore } from 'redux'


/* const composeEnhancers =
   typeof window === 'object' &&
   (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
   (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
}) : compose;

const middleware = [logger]
const Store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middleware)
));
 */

const composeEnhancers = typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [logger]
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middleware)
));


export default store