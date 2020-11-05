import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';
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

export const postUrl = (originalUrl: string) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            const post = await axios.post(`/api/url/shorten`, { originalUrl });
            dispatch(postedUrl(post.data));
        } catch(err) {
            console.error(err);
        }
    }
};