﻿import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import * as Counter from './Counter';
import * as WeatherForecasts from './WeatherForecasts';
import contact from './Contact';

export default function configureStore(history, initialState) {
    const reducers = {
        counter: Counter.reducer,
        weatherForecasts: WeatherForecasts.reducer,
        form: formReducer,
        contact: contact
    };

  const middleware = [
    thunk,
    routerMiddleware(history)
  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

    const createRootReducer = (history) => combineReducers({
        ...reducers,
        router: connectRouter(history)
    });

  return createStore(
      createRootReducer(history),
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );
}
