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
    weather: "SUNNY",
    secret: false,
    title: "오늘의 일기11111",
    backgroundColor: "#959af4,#fff",
    content:
      "일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트",
  },
  {
    id: "a967785bf325e3472abe01182abb4fe776a3b045cc79582a728438b3ce369dd3332",
    uid: "674270c5f850a78f721228eb9c9da82d78b7ead519caa3d974815c45eeca2053",
    userName: "james",
    regTime: "2022-06-27T01:20:29.06302",
    weather: "SNOW",
    secret: true,
    title: "오늘의 일기222222",
    backgroundColor: "#fff,#7bb6c4",
    content:
      "일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트일기테스트",
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

export const addNewPost = createAsyncThunk("posts/addPost", async (post) => {
  console.log("http 요청 : add new post");
});

export const modifyPost = createAsyncThunk("posts/modifyPost", async (post) => {
  console.log("http 요청 : modify post", post);
  return post;
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
  },
});

export default postsSlice.reducer;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state) => state.posts); // 전체 store를 참조하기 때문에 사용하고자 하는 slice를 지정해야함.

export const { postUpdated } = postsSlice.actions;
