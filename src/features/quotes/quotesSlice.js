// Action Creators
// TODO: Create action creators as defined in tests

// Reducer
const initialState = [];

export function addQuote(quote){
  return {
    type: "quotes/add",
    payload: quote
  }
}

export function removeQuote(quoteId){
  return {
    type: "quotes/remove",
    payload: quoteId
  }
}

export function upvoteQuote(quoteId){
  return {
    type: "quotes/upvote",
    payload: quoteId
  }
}

export function downvoteQuote(quoteId){
  return {
    type: "quotes/downvote",
    payload: quoteId
  }
}

export default function quotesReducer(state = initialState, action) {
  switch (true) {
    case (action.type === "quotes/add"):
      return [...state, action.payload]
    case (action.type === "quotes/remove"):
      return state.filter( quote => quote.id !== action.payload)
    case (action.type === "quotes/upvote"):
      return state.map( quote => {
        if (quote.id !== action.payload) return quote
        return {...quote, votes: quote.votes + 1}
      })
    case (action.type === "quotes/downvote"):
      return state.map( quote => {
        if (quote.id !== action.payload) return quote
        if (quote.votes === 0) return quote
        return {...quote, votes: quote.votes - 1}
      })
    default:
      return state;
  }
}
