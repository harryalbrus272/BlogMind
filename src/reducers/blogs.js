import {
  BLOG_LOAD_FAILED,
  BLOG_LOAD_START,
  BLOG_LOAD_SUCCESS,
  CLEAR_ERROR_STATE,
  CLEAR_POST_SAVE,
  CREATE_POST_FAILED,
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  INCREASE_POST_PROGRESS,
  LIST_LOAD_FAILED,
  LIST_LOAD_START,
  LIST_LOAD_SUCCESS,
} from "../actions/actionTypes";

const initialBlogState = {
  list: [],
  currentBlog: {},
  inProgress: false,
  error: null,
  postSave: {
    started: false,
    finished: false,
    progress: 0,
  },
};
const blogs = (state = initialBlogState, action) => {
  switch (action.type) {
    case LIST_LOAD_START:
      return {
        ...state,
        inProgress: true,
        error: null,
      };
    case LIST_LOAD_SUCCESS:
      return {
        ...state,
        inProgress: false,
        list: action.blogs,
      };
    case LIST_LOAD_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    case BLOG_LOAD_START:
      return {
        ...state,
        currentBlog: {},
        inProgress: true,
        error: null,
      };
    case BLOG_LOAD_SUCCESS:
      return {
        ...state,
        inProgress: false,
        currentBlog: action.blog,
      };
    case BLOG_LOAD_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    case CREATE_POST_START:
      return {
        ...state,
        inProgress: true,
        error: null,
        postSave: { started: true, finished: false },
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        list: [action.blog, ...state.list],
        inProgress: false,
        postSave: { started: true, finished: true },
      };
    case CREATE_POST_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error,
        postSave: { started: true, finished: true },
      };
    case CLEAR_ERROR_STATE:
      return {
        ...state,
        error: null,
      };
    case CLEAR_POST_SAVE:
      return {
        ...state,
        error: null,
        postSave: { started: false, finished: false },
      };
    default:
      return state;
  }
};
export default blogs;
