import { LinkActionTypes } from "./actions";
import { combineReducers } from 'redux'

export interface LinkState {
    linkObject: {
        hashid: string, 
        url: string,
        created_at: string
    }
};

export interface State {
    linkReducer: LinkState
}

const initialLinkState: LinkState = {
    linkObject: {
        hashid: "",
        url: "",
        created_at: ""
    }
};


function linkReducer(state: LinkState = initialLinkState, action: LinkActionTypes): LinkState {
    switch(action.type) {
        case "POST_URL":
            return {
                ...state,
              linkObject: {
                  hashid: action.payload.hashid,
                  url: action.payload.url,
                  created_at: action.payload.created_at
              }
            }
            default:
                return state;
    }
};

export default combineReducers<State>({
    linkReducer
  })