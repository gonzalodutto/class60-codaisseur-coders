import axios from "axios";
import { userLogin } from "./slice";

const API_URL = "https://codaisseur-coders-network.herokuapp.com";

// A. Creating a login thunk(action):
export const login = (email, password) => async (dispatch, getState) => {
  // 1. Token login request:
  const response = await axios.post(`${API_URL}/login`, { email, password });
  // console.log("response", response);

  // 2. Hold token in constant:
  const token = response.data.jwt;

  // B. 1. Set token in localStorage
  localStorage.setItem("token", token);

  // 3. Fetching the user's profile
  const profileResponse = await axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log("profile", profileResponse);

  // 4. Hold user profile data
  const profile = profileResponse.data;

  // 5. Dispach token and user profile data to slice
  dispatch(userLogin({ token, profile }));
};

// B. Persisting the session
export const persistLogin = () => async (dispatch, getState) => {
  const token = localStorage.getItem("token");

  if (!token) return;

  const profileResponse = await axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const profile = profileResponse.data;

  dispatch(userLogin({ token, profile }));
};
