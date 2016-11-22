
export function fetchDeck() {
  debugger
  return {
    type: 'FETCH_DECK'
  }
}

export function setAICards(store.deck) {
  debugger
  var item1 = store.deck[Math.floor(Math.random()*store.deck.length)].pop();
  var item2 = store.deck[Math.floor(Math.random()*store.deck.length)].pop();
  return {
    type: 'FETCH_DECK',
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
