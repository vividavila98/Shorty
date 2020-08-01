export interface LinkState {
    url: string;
    hashid: string;
};

export const POST_LINK = "POST_LINK";
export const GET_SHORTER_LINK = "GET_SHORTER_LINK";

const initialState: LinkState = { 
    url: "",
    hashid: ""
};

const postLinkAction = (url: string) => ({
    type: 
});

