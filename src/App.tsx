import { Route, Routes } from "react-router-dom";
import {
  PostList,
  PostDetails,
  Home,
  CreatePost,
  EditPost
} from "./components";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="posts" element={<PostList />} />
        <Route path="posts/:postId" element={<PostDetails />} />
        <Route path="posts/create-post" element={<CreatePost />} />
        <Route path="posts/edit-post/:postId" element={<EditPost />} />
      </Route>
    </Routes>
  )
}