import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { http } from "../api/index";

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.regTime.localeCompare(a.regTime),
});

const initialState = postsAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  http.defaults.headers["access-token"] = localStorage.getItem("access-token");
  const { data } = await http.get("/diary/list");
  return data.data;
});

export const fetchMyPosts = createAsyncThunk(
  "posts/fetchMyPosts",
  async (uid) => {
    http.defaults.headers["access-token"] =
      localStorage.getItem("access-token");
    const { data } = await http.get(`/diary/user/${uid}`);
    return data.data;
  }
);

export const addNewPost = createAsyncThunk("posts/addPost", async (post) => {
  http.defaults.headers["access-token"] = localStorage.getItem("access-token");
  const {
    data: { id, regTime },
  } = await http.post("/diary", post);
  const newPost = { ...post, id, regTime };
  return newPost;
});

export const modifyPost = createAsyncThunk("posts/modifyPost", async (post) => {
  http.defaults.headers["access-token"] = localStorage.getItem("access-token");

  const { data } = await http.put(`/diary/${post.id}`, post);
  return data.msg;
});

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  http.defaults.headers["access-token"] = localStorage.getItem("access-token");

  await http.delete(`/diary/${id}`);
  return id;
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
      console.log("???????????? !");
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      postsAdapter.upsertMany(state, action.payload);
      console.log("fetch posts", action.payload);
    });
    builder.addCase(modifyPost.fulfilled, (state, action) => {
      console.log("?????? ?????? ");
    });
    builder.addCase(addNewPost.fulfilled, (state, action) => {
      console.log("?????? ??????", action.payload);
      try {
        postsAdapter.upsertOne(state, action.payload);
      } catch (error) {
        console.log("adapter ?????? ", error);
      }
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      try {
        postsAdapter.removeOne(state, action.payload);
      } catch (err) {
        console.log("?????? ??????", err);
      }
    });
    builder.addCase(fetchMyPosts.fulfilled, (state, action) => {
      postsAdapter.setAll(state, action.payload);
    });
  },
});

export default postsSlice.reducer;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state) => state.posts); // ?????? store??? ???????????? ????????? ??????????????? ?????? slice??? ???????????????.

export const { postUpdated } = postsSlice.actions;

export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, uid) => uid],
  (posts, uid) => posts.filter((post) => post.uid === uid)
);

export const selectPublicPosts = createSelector(
  [selectAllPosts, (state, uid) => uid],
  (posts, uid) => posts.filter((post) => post.secret === false)
);
