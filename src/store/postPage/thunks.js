import axios from "axios";
import { startLoadingPost, postFullyFetched } from "./slice";
import { API_URL } from "../../config";

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    // dispatch start loading
    dispatch(startLoadingPost());

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`),
    ]);

    // dispatch postFullyFetched with the correct object parameter
    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data,
      })
    );
  };
}
