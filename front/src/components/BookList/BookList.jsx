import { useSelector } from 'react-redux'
import './BookList.css'
export default function BookList() {
    const books = useSelector((state) => state.books)
    return (
        <div className='app-block book-list'>
            <h2>Book List</h2>

            {books.length === 0 ? <p>No books available</p> : <ul>{books.map((book, i) => <li key={i}><div className='book-info'>{++i}. {book.title} by <b>{book.author}</b></div></li>)}</ul>}


        </div >
    )
}
