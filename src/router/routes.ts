import NewPost from "../pages/NewPost";
import PostEditPage from "../pages/PostEditPage";
import PostPage from "../pages/PostPage";
import PostsPage from "../pages/PostsPage";


export const routes = [
  { path: '/ra_router_crud/posts', element: PostsPage },
  { path: '/ra_router_crud/posts/new', element: NewPost },
  { path: '/ra_router_crud/posts/:postId', element: PostPage },
  { path: '/ra_router_crud/posts/edit/:postId', element: PostEditPage }
]