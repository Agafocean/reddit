import { ActionCreator, Reducer } from "redux";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, SAVE_TOKEN, SaveTokenAction } from "./me/actions";
import { MeState, meReducer } from "./me/reducer";

//  ================================================================================

export type RootState = {
  commentText: string;
  token: string;
  me: MeState;
  posts: Array<any>;
  commentId: number;
};
const initialState = {
  commentText: 'Hello Skillbox!',
  token: '',
  me: { loading: false, error: '', data: {} },
  posts: [],
  commentId: -1
};

const SET_COMMENT_ID = 'SET_COMMENT_ID';
type SetCommentIdAction = {
  type: typeof SET_COMMENT_ID;
  commentId: number
}
export const setCommentId: ActionCreator<SetCommentIdAction> = (commentId) => ({
  type: SET_COMMENT_ID,
  commentId: commentId
})

const SET_POSTS = 'SET_POSTS';
type SetPostsAction = {
  type: typeof SET_POSTS;
  posts: Array<any>
}
export const setPostsRedux: ActionCreator<SetPostsAction> = (posts) => ({
  type: SET_POSTS,
  posts: posts
})

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string
}
export const updateComment: ActionCreator<UpdateCommentAction> = (text) => ({
  type: UPDATE_COMMENT,
  text
})

type Action =
  SetCommentIdAction |
  SetPostsAction |
  UpdateCommentAction |
  SaveTokenAction |
  MeRequestAction |
  MeRequestSuccessAction |
  MeRequestErrorAction;

export const rootReducer: Reducer<RootState, Action> = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENT_ID:
      return {
        ...state,
        commentId: action.commentId
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text
      };
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action)
      }
    default:
      return state;
  }
}
