import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/post.module.css";
import WeatherImg from "./WeatherImg";
const tmpPosts = [
  {
    diaryId: "1",
    userId: "ssafy",
    regTime: "2022-06-01 11:32:35",
    category: "",
    emotion: "blue",
    secret: false,
    title: "일기1의 제목입니당당당",
    weather: "sunny",
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
    weather: "drizzle",
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
    weather: "snow",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
  },
  {
    diaryId: "14",
    userId: "ssafy",
    regTime: "2022-06-01 11:32:35",
    category: "",
    emotion: "blue",
    secret: false,
    title: "일기1의 제목입니당당당",
    weather: "sunny",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
  },
  {
    diaryId: "24",
    userId: "ssafy",
    regTime: "2022-06-10 11:32:35",
    category: "",
    emotion: "yellow",
    secret: false,
    title: "일기2 제목",
    weather: "drizzle",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
  },
  {
    diaryId: "34",
    userId: "ssafy",
    regTime: "2022-06-22 11:32:35",
    category: "",
    emotion: "red",
    secret: false,
    title: "일기 3 제목",
    weather: "snow",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
  },
  {
    diaryId: "15",
    userId: "ssafy",
    regTime: "2022-06-01 11:32:35",
    category: "",
    emotion: "blue",
    secret: false,
    title: "일기1의 제목입니당당당",
    weather: "sunny",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
  },
  {
    diaryId: "25",
    userId: "ssafy",
    regTime: "2022-06-10 11:32:35",
    category: "",
    emotion: "yellow",
    secret: false,
    title: "일기2 제목",
    weather: "drizzle",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
  },
  {
    diaryId: "35",
    userId: "ssafy",
    regTime: "2022-06-22 11:32:35",
    category: "",
    emotion: "red",
    secret: false,
    title: "일기 3 제목",
    weather: "snow",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
  },
  {
    diaryId: "151",
    userId: "ssafy",
    regTime: "2022-06-01 11:32:35",
    category: "",
    emotion: "blue",
    secret: false,
    title: "일기1의 제목입니당당당",
    weather: "sunny",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
  },
  {
    diaryId: "251",
    userId: "ssafy",
    regTime: "2022-06-10 11:32:35",
    category: "",
    emotion: "yellow",
    secret: false,
    title: "일기2 제목",
    weather: "drizzle",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
  },
  {
    diaryId: "351",
    userId: "ssafy",
    regTime: "2022-06-22 11:32:35",
    category: "",
    emotion: "red",
    secret: false,
    title: "일기 3 제목",
    weather: "snow",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
  },
  {
    diaryId: "1114",
    userId: "ssafy",
    regTime: "2022-06-01 11:32:35",
    category: "",
    emotion: "blue",
    secret: false,
    title: "일기1의 제목입니당당당",
    weather: "sunny",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
  },
  {
    diaryId: "2566",
    userId: "ssafy",
    regTime: "2022-06-10 11:32:35",
    category: "",
    emotion: "yellow",
    secret: false,
    title: "일기2 제목",
    weather: "drizzle",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
  },
  {
    diaryId: "357",
    userId: "ssafy",
    regTime: "2022-06-22 11:32:35",
    category: "",
    emotion: "red",
    secret: false,
    title: "일기 3 제목",
    weather: "snow",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
  },
  {
    diaryId: "1266",
    userId: "ssafy",
    regTime: "2022-06-01 11:32:35",
    category: "",
    emotion: "blue",
    secret: false,
    title: "일기1의 제목입니당당당",
    weather: "sunny",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
  },
  {
    diaryId: "2234",
    userId: "ssafy",
    regTime: "2022-06-10 11:32:35",
    category: "",
    emotion: "yellow",
    secret: false,
    title: "일기2 제목",
    weather: "drizzle",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
  },
  {
    diaryId: "3346",
    userId: "ssafy",
    regTime: "2022-06-22 11:32:35",
    category: "",
    emotion: "red",
    secret: false,
    title: "일기 3 제목",
    weather: "snow",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore dolores a recusandae rerum impedit tenetur corporis facere, iure, cupiditate quam dignissimos excepturi, iusto voluptates saepe qui enim harum debitis? ",
  },
];

function PostListItem({ post }) {
  return (
    <li className={styles.item}>
      <Link to={`/post/${post.diaryId}`}>
        <WeatherImg weather={post.weather} className={styles.thumbnail} />
        {/* <p>{post.regTime}</p> */}
      </Link>
    </li>
  );
}
export default function PostList({ userid: username, setAppClassName }) {
  const [posts, setPosts] = useState(tmpPosts);
  console.log("username", username);

  useEffect(() => {
    if (username) {
      setAppClassName("app night");
    } else {
      setAppClassName("app day");
    }
    return () => {
      setAppClassName("app");
    };
  }, [username]);

  const postList = posts.map((post) => {
    return <PostListItem post={post} key={post.diaryId} />;
  });

  return (
    <div className={styles.postList}>
      <ul className={styles.posts}>{postList}</ul>
    </div>
  );
}
