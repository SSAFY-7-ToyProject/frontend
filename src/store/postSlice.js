import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";

const data = [
  {
    id: "a967785bf325e3472abe01182abb4fe776a3b045cc79582a728438b3ce369dd2",
    uid: "674270c5f850a78f721228eb9c9da82d78b7ead519caa3d974815c45eeca2053",
    userName: "james",
    regTime: "2022-06-27T01:20:29.06302",
    weather: "SNOW",
    secret: false,
    title: "오늘의 일기",
    content: "즐거움",
  },
  {
    id: "b67ad226e978ad7846d83094e5013514a2a2932d710d1f212cc9edd933844682",
    uid: "674270c5f850a78f721228eb9c9da82d78b7ead519caa3d974815c45eeca2053",
    userName: "james",
    regTime: "2022-06-27T01:23:51.94399",
    weather: "SUNNY",
    secret: false,
    title: "오늘의 일기2",
    content: "슬펐다 끝",
  },
];

const postsAdapter = createEntityAdapter();

const initialState = postsAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  console.log("http 요청 : get posts");
  return data;
});

export const addNewPost = createAsyncThunk("posts/addNewPost", async (post) => {
  console.log("http 요청 : add new post");
});

export const modifyPost = createAsyncThunk(
  "posts/modifyNewPost",
  async (post) => {
    console.log("http 요청 : modify new post");
  }
);

export const deletePost = createAsyncThunk(
  "posts/deleteNewPost",
  async (post) => {
    console.log("http 요청 : delete new post");
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {},
    postUpdated(state, action) {},
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      postsAdapter.upsertMany(state, action.payload);
    });
  },
});

export default postsSlice.reducer;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state) => state.posts); // 전체 store를 참조하기 때문에 사용하고자 하는 slice를 지정해야함.
