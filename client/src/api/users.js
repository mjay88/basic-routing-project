import { baseApi } from "./base";

// export function getUsers(options) {
// 	return baseApi.get("/users", options).then((res) => res.data);
// }

export async function getUsers(options) {
	const res = await baseApi.get("/users", options);
	return res.data;
}
export async function getUser(userId, options) {
	const res = await baseApi.get(`/users/${userId}`, options);
	return res.data;
}
