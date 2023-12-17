import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts";

function PostList() {
	const posts = useLoaderData();

	return (
		<>
			<div className="container">
				<div className="card-grid">
					{posts.map((post) => (
						<div key={post.id} className="card">
							<div className="card-header">{post.title}</div>
							<div className="card-body">
								<div className="card-preview-text">{post.body}</div>
							</div>
							<div className="card-footer">
								<Link className="btn" to={`/posts/${post.id}`}>
									View
								</Link>
							</div>
						</div>
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
