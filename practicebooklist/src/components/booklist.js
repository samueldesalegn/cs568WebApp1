import Book from "../components/book";

export default function BookList({books}) {
	return (
		<div>
			<h3>Book List</h3>
			{
				books.map((book, index) => <Book key={index} book={book} />)
			}
		</div>
	);
}