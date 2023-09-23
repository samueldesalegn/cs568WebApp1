export default function Book({book}){
	// console.log(book)
	return (
		<div>
			<p>{book.title} - {book.price}</p>
		</div>
	)
}