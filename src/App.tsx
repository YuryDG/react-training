import { Route, Routes } from "react-router-dom";
import {
  PostList,
  PostDetails,
  Home
} from "./components";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="posts" element={<PostList />} >
          <Route path=":postId" element={<PostDetails />} />
        </Route>
      </Route>
    </Routes>
  )
}