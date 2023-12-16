import React from "react";
import axios from "axios";
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

function loader({ request: { signal } }) {
	return getPosts({ signal });
}

export const postListRoute = {
	loader,
	element: <PostList />,
};
