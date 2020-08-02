import axios from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';

// Action Definition
interface PostUrlAction {
    type: "POST_URL";
    payload: any;
};

interface GetShortUrl {
    type: "GET_SHORT_URL";
    payload: any;
}

export type LinkActionTypes = PostUrlAction | GetShortUrl;

// Action Creator

const postedUrl = (data: {}): PostUrlAction => {
    return {
      type: "POST_URL",
      payload: data
    }
  }

export const postUrl = (url: string) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            console.log("in action");
            console.log(url);
            const post = await axios.post(`https://rel.ink/api/links/`,{ 
                url
            });
            const short = await axios.get(`https://rel.ink/api/links/${post.data.hashid}`);
            dispatch(postedUrl(post.data));
        } catch(err) {
            console.error(err);
        }
    }
}