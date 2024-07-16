import { useDispatch, useSelector } from 'react-redux'
import './BookList.css'
import { deleteBook } from '../../redux/books/actionCreators'


export default function BookList() {
    const books = useSelector((state) => state.books)
    const dispatch = useDispatch()

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id))

    }
    return (
        <div className='app-block book-list'>
            <h2>Book List</h2>

            {books.length === 0 ? <p>No books available</p> : <ul>{books.map((book, i) => (
                <li key={book.id}>
                    <div className='book-info'>{++i}. {book.title} by <b>{book.author}</b></div>
                    <div className="book-actions"><button onClick={() => handleDeleteBook(book.id)}>Delete</button></div>
                </li>
            ))}</ul>}


        </div >
    )
}
