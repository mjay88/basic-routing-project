import React from "react";
import { getUser } from "../api/users";
import { useLoaderData } from "react-router-dom";

function User() {
	const user = useLoaderData();
	console.log(user);

	return (
		<div className="container">
			<h1 className="page-title">{user.name}</h1>
			<div className="page-subtitle">{user.email}</div>
			<div>
				<b>Company:</b> {user.company.name}
			</div>
			<div>
				<b>Website:</b> {user.website}
			</div>
			<div>
				<b>Address:</b> {user.address.street} {user.address.suite},{" "}
				{user.address.city}, {user.address.zipcode}
			</div>
		</div>
	);
}

function loader({ request: { signal }, params }) {
	return getUser(params.userId, { signal });
}

export const userRoute = {
	loader,
	element: <User />,
};
