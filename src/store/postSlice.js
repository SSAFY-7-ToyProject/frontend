import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { http } from "../api/index";

const postsAdapter = createEntityAdapter();

const initialState = postsAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  console.log("http 요청 : get posts token:");
  http.defaults.headers["access-token"] = localStorage.getItem("access-token");
  const { data } = await http.get("/diary/list");
  return data.data;
});

export const addNewPost = createAsyncThunk("posts/addPost", async (post) => {
  console.log("http 요청 : add new post");
  http.defaults.headers["access-token"] = localStorage.getItem("access-token");
  const { data } = await http.post("/diary", post);
  return data;
});

export const modifyPost = createAsyncThunk("posts/modifyPost", async (post) => {
  console.log("http 요청 : modify post", post);
  http.defaults.headers["access-token"] = localStorage.getItem("access-token");

  const { data } = await http.put(
    `/diary/2be6d7cb47ac2cb564fafaff23d6b61ec57d894836e6558f15895f57a636a5bc`,
    post
  );
  return data.msg;
});

export const deletePost = createAsyncThunk("posts/deletePost", async (post) => {
  console.log("http 요청 : delete new post");
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {},
    postUpdated(state, action) {
      const { id, title, content, backgroundColor, secret, weather } =
        action.payload;
      const post = state.entities[id];
      if (post) {
        post.title = title;
        post.console = content;
        post.backgroundColor = backgroundColor;
        post.secret = secret;
        post.weather = weather;
      }
      console.log("수정완료 !");
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      postsAdapter.upsertMany(state, action.payload);
    });
    builder.addCase(modifyPost.fulfilled, (state, action) => {
      console.log("수정 완료 ");
    });
    builder.addCase(addNewPost.fulfilled, (state, action) => {
      console.log("등록 완료", action.payload);
    });
  },
});

export default postsSlice.reducer;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state) => state.posts); // 전체 store를 참조하기 때문에 사용하고자 하는 slice를 지정해야함.

export const { postUpdated } = postsSlice.actions;

export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, uid) => uid],
  (posts, uid) => posts.filter((post) => post.uid === uid)
);
