import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook, thunkFunction } from '../../redux/slices/booksSlice'
import booksData from '../../data/books.json'
import './BookForm.css'
import createBookWithID from '../../utils/createBookWithID';


export default function BookForm() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        if (title && author) {

            const book = createBookWithID({ title, author }, 'manual')

            dispatch(addBook(book))
            setTitle('')
            setAuthor('')
        }
    }

    const handleAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * booksData.length)
        const randomBook = booksData[randomIndex]
        const randomBookWithId = createBookWithID(randomBook, 'random')
        dispatch(addBook(randomBookWithId))
    }

    const handleAddRandomBookViaAPI = () => {
        dispatch(thunkFunction)
    }

    return (
        <div className='app-block book-form'>
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input id="title" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />

                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input id="author" type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>

                <button type='submit'>Add Book</button>
                <button type='button' onClick={handleAddRandomBook}>Add Random</button>
                <button type='button' onClick={handleAddRandomBookViaAPI}>Add Random Book API</button>


            </form>

        </div>
    )
}
