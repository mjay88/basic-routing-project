import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts";
import { PostCard } from "../components/PostCard";

function PostList() {
	const posts = useLoaderData();

	return (
		<>
			<div className="container">
				<div className="card-grid">
					{posts.map((post) => (
						<PostCard key={post.id} {...post} />
					))}
				</div>
			</div>
		</>
	);
}
//loader replaces the useEffect fetch call
function loader({ request: { signal } }) {
	//signal replaces/the same as abort controller, react-router-dom loader is creating the new AbortController behind the scenes
	return getPosts({ signal });
}

export const postListRoute = {
	loader,
	element: <PostList />,
};
