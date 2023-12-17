import React from "react";
import { getPost } from "../api/posts";
import { useLoaderData } from "react-router-dom";

function Post() {
	const post = useLoaderData();
	console.log(post);

	return (
		<div className="container">
			<h1 className="page-title">{post.title}</h1>
			<span className="page-subtitle">By:</span>
			<div>{post.body}</div>
		</div>
	);
}

function loader({ request: { signal }, params }) {
	return getPost(params.postId, { signal });
}

export const postRoute = {
	loader,
	element: <Post />,
};
