// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk'; // You may need to install this middleware

// import newsReducer from './path-to-news-reducer'; // Replace with the actual path

// const rootReducer = combineReducers({
//     news: newsReducer,
//     // Add other reducers here if you have more
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;


import { createStore, applyMiddleware, combineReducers } from "redux"
import { thunk } from "redux-thunk"
import { newsReducer } from "./Reducer"


const rootReducer = combineReducers({
    news: newsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))



