import React from "react";
import Book from "../components/book";

export default function BookList({books}) {
	let sorted = [...books].sort((a, b) => a.price - b.price);
	let color = "blue";
	let showHeader = true;

	return (
		<div>
			<h3>Section List</h3>
			{
				sorted.map((book, index) => {
					if (index > 0 && book.price !== sorted[index -1].price) {
						color = color === "blue"? "green" : "blue";
						showHeader = true;
					} else {
						showHeader = false;
					}
          return (
					<div style={{backgroundColor: color}}>
						{ showHeader? <h3>{book.price}</h3>: null}
						<Book key={index} book={book} />
					</div>
					);
			}
				)
			}
		</div>
	);
}