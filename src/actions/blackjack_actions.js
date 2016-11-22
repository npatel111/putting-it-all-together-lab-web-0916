import { store } from '../index.js'

export function fetchDeck() {
  debugger
  return {
    type: 'FETCH_DECK'
  }
}

export function setAICards(store) {
  debugger
  var item1 = store.deck[Math.floor(Math.random()*store.deck.length)];
  var item2 = store.deck[Math.floor(Math.random()*store.deck.length)];
  return {
    type: 'SET_AI_CARDS',
    payload: {deck: store.deck, aiCards: [item1, item2]}
  }
}

// export function setUserCards(store.deck) {
//   var item1 = store.deck[Math.floor(Math.random()*store.deck.length)].pop();
//   var item2 = store.deck[Math.floor(Math.random()*store.deck.length)].pop();
//   return {
//     type: 'FETCH_DECK',
//     payload: {deck: store.deck, userCards: [item1, item2]}
//   }
// }
