import {
  LIST_LOAD_FAILED,
  LIST_LOAD_START,
  LIST_LOAD_SUCCESS,
} from "../actions/actionTypes";

const initialBlogState = {
  list: [],
  currentBlog: {},
  inProgress: false,
  error: null,
};
const blogs = (state = initialBlogState, action) => {
  console.log(action);
  switch (action.type) {
    case LIST_LOAD_START:
      return {
        ...state,
        inProgress: true,
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
    default:
      return state;
  }
};
export default blogs;
