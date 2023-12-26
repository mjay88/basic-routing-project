import React from "react";
import {
	Link,
	Outlet,
	ScrollRestoration,
	useNavigation,
} from "react-router-dom";

export function RootLayout() {
	//useNavigation gives us information on our state
	const { state } = useNavigation();

	const isLoading = state === "loading";

	return (
		<>
			<nav className="top-nav">
				<div className="nav-text-large">My App</div>
				<ul className="nav-list">
					<li>
						<Link to="/posts">Posts</Link>
					</li>
					<li>
						<Link to="/users">Users</Link>
					</li>
					<li>
						<Link to="/todos">Todos</Link>
					</li>
				</ul>
			</nav>
			{/* {You should only render one of these and it's recommended you render it in the root route of your app:} */}
			<ScrollRestoration />
			{isLoading && <div className="loading-spinner" />}
			<div className={`container ${isLoading ? "loading" : ""}`}>
				<Outlet />
			</div>
		</>
	);
}
