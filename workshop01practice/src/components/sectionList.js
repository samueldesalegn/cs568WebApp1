import React from "react";
import Book from "./book";

export function SectionList({books}) {
	const sorted = [...books].sort((a, b) =>a.price - b.price);
	let color = "blue";
	let showHeader = true;
	return(
		<div>
			<h3>Section List</h3>

			{ 
				sorted.map((book, index) => { 
					if (index > 0 && book.price !== sorted[index - 1].price) {
						color = color === "blue"? "green" : "blue";
						showHeader = true;
					}else {

						showHeader = false;
					}
					return (
						<div key={book.id} style={{backgroundColor: color}}>
							{ showHeader && <h3>{book.price}</h3>}
							<Book  book={book}/>
						</div>
					);

        })}
				
		</div>
		)
	
}