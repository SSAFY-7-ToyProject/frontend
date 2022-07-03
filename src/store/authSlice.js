import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import { http } from "../api/index";

export const signUp = createAsyncThunk("auth/signUp", async (user) => {
  console.log("회원가입");
  const { data } = await http.post("/user", user);
  console.log(data);
  return data;
});

export const logIn = createAsyncThunk("auth/login", async () => {
  console.log("로그인");
});

export const logOut = createAsyncThunk("auth/logout", async () => {
  console.log("로그아웃");
});

export const userInfo = createAsyncThunk("auth/userInfo", async () => {
  console.log("유저 정보 불러오기");
});

export const modifyUserInfo = createAsyncThunk("auth/modify", async () => {
  console.log("유저 정보 수정 ");
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: {}, token: "" },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signUp.fulfilled, (state, action) => {
      console.log("회원가입 완료 ");
    });
    builder.addCase(logIn.fulfilled, (state, action) => {});
    builder.addCase(logOut.fulfilled, (state, action) => {});
    builder.addCase(userInfo.fulfilled, (state, action) => {});
    builder.addCase(modifyUserInfo.fulfilled, (state, action) => {});
  },
});

export default authSlice.reducer;
