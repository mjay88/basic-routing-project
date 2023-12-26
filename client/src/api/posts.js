import { baseApi } from "./base";

export function getPosts(options) {
	return baseApi.get("/posts", options).then((res) => res.data);
}

export async function getPost(postId, options) {
	const res = await baseApi.get(`/posts/${postId}`, options);
	return res.data;
}
