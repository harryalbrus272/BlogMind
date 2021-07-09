import axios from "axios";
import APIUrls from "../helpers/urls";
import {
  BLOG_LOAD_FAILED,
  BLOG_LOAD_START,
  BLOG_LOAD_SUCCESS,
  LIST_LOAD_FAILED,
  LIST_LOAD_START,
  LIST_LOAD_SUCCESS,
} from "./actionTypes";
export function fetchBlogListStart() {
  return {
    type: LIST_LOAD_START,
  };
}

export function fetchBlogListSuccess(blogs) {
  return {
    type: LIST_LOAD_SUCCESS,
    blogs,
  };
}

export function fetchBlogListFailed(errorMessage) {
  return {
    type: LIST_LOAD_FAILED,
    error: errorMessage,
  };
}

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

export function fetchBlogStart() {
  return {
    type: BLOG_LOAD_START,
  };
}

export function fetchBlogSuccess(blog) {
  return {
    type: BLOG_LOAD_SUCCESS,
    blog,
  };
}

export function fetchBlogFailed(errorMessage) {
  return {
    type: BLOG_LOAD_FAILED,
    error: errorMessage,
  };
}

export function fetchBlog(id) {
  return async (dispatch) => {
    const url = APIUrls.blog(id);
    dispatch(fetchBlogStart());

    await axios
      .get(url)
      .then((res) => {
        const { message, result, success } = res.data;
        console.log(res.result);
        if (success) {
          dispatch(fetchBlogSuccess(result));
        }
      })
      .catch((err) => {
        dispatch(fetchBlogFailed(err.response.data.message));
      });
  };
}
