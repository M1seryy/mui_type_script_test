import {
  ActionReducerMapBuilder,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const instanceAuth = axios.create({
  baseURL: `http://localhost:3000/api/auth/login`,
});
interface authData {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user: authData) => {
    const respose = await axios.post(
      `http://localhost:3000/api/auth/login`,
      user
    );
    return respose;
  }
);

// export const logoutThunk = createAsyncThunk('auth/logout', async token => {
//   return await logoutUser(token);
// });

// export const refreshTokenThunk = createAsyncThunk('auth/refresh', async () => {
//   return await refresh();
// });

interface state {
  profile: any;
  token: string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: string;
  setUserProfileEmail: any;
}

const initialState: state = {
  profile: null,
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
  error: "",
  setUserProfileEmail: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log('action: ', action);
      state.profile = action.payload.data;
      state.token = action.payload.data.token;
      state.setUserProfileEmail = action.payload.data.email;
    });
  },
});

export const authReudcer = authSlice.reducer;
