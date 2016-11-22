import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from '../store'
import blackjackReducer from '../reducers/blackjack_reducer'

const store = createStore(blackjackReducer)
export default class App extends React.Component {
  constructor(props) {
    super(props)
    fetchDeck()
    debugger
    setAICards(store.deck)
    setUserCards(store.deck)
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}
