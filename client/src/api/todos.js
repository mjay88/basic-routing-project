import { baseApi } from "./base";

// export function getUsers(options) {
// 	return baseApi.get("/users", options).then((res) => res.data);
// }

export async function getTodos(options) {
	const res = await baseApi.get("/todos", options);
	return res.data;
}
