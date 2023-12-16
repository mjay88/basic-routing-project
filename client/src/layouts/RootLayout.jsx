import React from "react";
import { Link, Outlet, ScrollRestoration } from "react-router-dom";

export function RootLayout() {
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
			<div className="container">
				<Outlet />
			</div>
		</>
	);
}
