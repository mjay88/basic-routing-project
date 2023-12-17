import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getTodos } from "../api/todos";

function TodoList() {
	const todos = useLoaderData();
	console.log(todos);

	return (
		<div className="container">
			<h1 className="page-title">Todos</h1>
			<ul>
				{todos.map((todo) => (
					<li
						key={todo.id}
						className={todo.completed ? "strike-through" : undefined}
					>
						{todo.title}
					</li>
				))}
			</ul>
			;
		</div>
	);
}
//the loader is like a useEffect specifically for routing/react-router-dom
function loader({ request: { signal } }) {
	return getTodos({ signal });
}

export const todoListRoute = {
	loader,
	element: <TodoList />,
};
