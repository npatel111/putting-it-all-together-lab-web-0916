import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store'
import blackjackReducer from './reducers/blackjack_reducer'
import { fetchDeck, setAICards } from './actions/blackjack_actions'
import App from './components/app'


export const store = createStore(blackjackReducer)


function render() {
  ReactDOM.render(<App store={store}/>, document.getElementById('container'))
}

store.subscribe(render)
store.dispatch({})
// store.dispatch(setAICards(store.getState()))
// store.dispatch(setUserCards(store.getState()))

// require('../test/index-test.js')  // Leave this in!
