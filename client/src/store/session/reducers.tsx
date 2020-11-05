import { LinkActionTypes } from "./actions";
import { combineReducers } from 'redux'

export interface LinkState {
    linkObject: {
        originalUrl: string, 
        shortUrl: string,
        urlCode: string,
        date: string
    }
};

export interface State {
    linkReducer: LinkState
}

const initialLinkState: LinkState = {
    linkObject: {
        originalUrl: "", 
        shortUrl: "",
        urlCode: "",
        date: ""
    }
};


function linkReducer(state: LinkState = initialLinkState, action: LinkActionTypes): LinkState {
    switch(action.type) {
        case "POST_URL":
            return {
                ...state,
              linkObject: {
                originalUrl: action.payload.originalUrl, 
                shortUrl: action.payload.shortUrl,
                urlCode: action.payload.urlCode,
                date: action.payload.date
              }
            }
            default:
                return state;
    }
};

export default combineReducers<State>({
    linkReducer
  })