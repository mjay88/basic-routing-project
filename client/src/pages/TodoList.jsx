import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getTodos } from "../api/todos";
import { TodoItem } from "../components/TodoItem";

function TodoList() {
	const todos = useLoaderData();
	console.log(todos);

	return (
		<div className="container">
			<h1 className="page-title">Todos</h1>
			<ul>
				{todos.map((todo) => (
					<TodoItem key={todo.id} {...todo} />
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
