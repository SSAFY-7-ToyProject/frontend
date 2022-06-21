import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      diaryId: "1",
      userId: "ssafy",
      regTime: "2022-06-01 11:32:35",
      category: "",
      emotion: "blue",
      secret: false,
      title: "일기1의 제목입니당당당",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
    },
    {
      diaryId: "2",
      userId: "ssafy",
      regTime: "2022-06-10 11:32:35",
      category: "",
      emotion: "yellow",
      secret: false,
      title: "일기2 제목",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
    },
    {
      diaryId: "3",
      userId: "ssafy",
      regTime: "2022-06-22 11:32:35",
      category: "",
      emotion: "red",
      secret: false,
      title: "일기 3 제목",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
    },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {},
    postUpdated(state, action) {},
  },
});

export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts.posts;
export const selectPostById = (state, postId) => {
  state.posts.posts.find((post) => post.diaryId === postId);
};

export const selectPostsByUser = (state, userId) =>
  state.posts.posts.filter((post) => post.userId === userId);
