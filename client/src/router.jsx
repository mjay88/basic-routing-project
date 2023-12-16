import { Navigate, createBrowserRouter } from "react-router-dom";
import { postListRoute } from "./pages/PostList";
import { userListRoute } from "./pages/UserList";
import { TodoList } from "./pages/TodoList";
import { RootLayout } from "./layouts/RootLayout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			//if we are on the index route we want to navigate back to the posts
			{ index: true, element: <Navigate to="/posts" /> },
			{
				path: "posts",
				children: [
					{ index: true, ...postListRoute },
					{ path: ":postId", element: <>Hello</> },
				],
			},
			{
				path: "users",
				children: [
					{ index: true, ...userListRoute },
					{ path: ":postId", element: <>Hello from user list</> },
				],
			},
			{ path: "todos", element: <TodoList /> },
		],
	},
]);
