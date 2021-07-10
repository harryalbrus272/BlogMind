import axios from "axios";
import APIUrls from "../helpers/urls";
import { getFormBody } from "../helpers/utils";
import {
  BLOG_LOAD_FAILED,
  BLOG_LOAD_START,
  BLOG_LOAD_SUCCESS,
  CLEAR_ERROR_STATE,
  CLEAR_POST_SAVE,
  CREATE_POST_FAILED,
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  LIST_LOAD_FAILED,
  LIST_LOAD_START,
  LIST_LOAD_SUCCESS,
} from "./actionTypes";
//Fetching the list of blogs
export function fetchBlogListStart() {
  return {
    type: LIST_LOAD_START,
  };
}

//Action if the fetching blogs list is successful
export function fetchBlogListSuccess(blogs) {
  return {
    type: LIST_LOAD_SUCCESS,
    blogs,
  };
}

//Action if the fetching blogs list is failed
export function fetchBlogListFailed(errorMessage) {
  return {
    type: LIST_LOAD_FAILED,
    error: errorMessage,
  };
}

//Fetching action to call the api and load the results - for fetching the list of blogs
export function fetchBlogList() {
  return async (dispatch) => {
    const url = APIUrls.list();
    dispatch(fetchBlogListStart());

    await axios
      .get(url)
      .then((res) => {
        const { blogs, success } = res.data;
        if (success) {
          dispatch(fetchBlogListSuccess(blogs));
        }
      })
      .catch((err) => {
        dispatch(fetchBlogListFailed(err.response.data.message));
      });
  };
}

//Fetching the particular blog
export function fetchBlogStart() {
  return {
    type: BLOG_LOAD_START,
  };
}

//Action if the fetching the particular blog is successful
export function fetchBlogSuccess(blog) {
  return {
    type: BLOG_LOAD_SUCCESS,
    blog,
  };
}

//Action if the fetching the particular blog is failed
export function fetchBlogFailed(errorMessage) {
  return {
    type: BLOG_LOAD_FAILED,
    error: errorMessage,
  };
}

//Action if the fetching the particular blog is failed
//Fetching action to call the api and load the results - for fetching the full blog details
export function fetchBlog(id) {
  return async (dispatch) => {
    const url = APIUrls.blog(id);
    dispatch(fetchBlogStart());

    await axios
      .get(url)
      .then((res) => {
        const { message, result, success } = res.data;
        if (success) {
          dispatch(fetchBlogSuccess(result));
        }
      })
      .catch((err) => {
        dispatch(fetchBlogFailed(err.response.data.message));
      });
  };
}

//Saving the particular blog
export function saveBlogStart() {
  return {
    type: CREATE_POST_START,
  };
}

//Action if the saving the blog is successful
export function saveBlogSuccess(blog) {
  return {
    type: CREATE_POST_SUCCESS,
    blog,
  };
}

//Action if the saving the particular blog is failed
export function saveBlogFailed(errorMessage) {
  return {
    type: CREATE_POST_FAILED,
    error: errorMessage,
  };
}

//Saving action to call the api and save the result - for saving the blog
export function saveBlog(title, content) {
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  return async (dispatch) => {
    const url = APIUrls.save();
    dispatch(saveBlogStart());
    await axios
      .post(url, getFormBody({ title, content }), config)
      .then((res) => {
        const { message, result, success } = res.data;
        if (success) {
          dispatch(saveBlogSuccess(result));
        }
      })
      .catch((err) => {
        dispatch(saveBlogFailed(err.response.data.message));
      });
  };
}

//Clearing error state otherwise it will render error messages at wrong components
export function clearErrorState() {
  return {
    type: CLEAR_ERROR_STATE,
  };
}

//Clearing save state otherwise it will render different layout at the create post components
export function clearPostSaveState() {
  return {
    type: CLEAR_POST_SAVE,
  };
}
