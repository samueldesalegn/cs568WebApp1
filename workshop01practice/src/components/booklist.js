import React from "react";
import Book from "./book";

export function BookList({books}) {
		return(
			<div>
				<h3>Book List</h3>

				{ 
				books.map(book => <Book key={book.id} book={book}/>)
				}
				
			</div>
		)
	
}