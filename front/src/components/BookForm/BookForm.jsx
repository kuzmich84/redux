import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../../redux/slices/booksSlice'
import booksData from '../../data/books.json'
import './BookForm.css'
import createBookWithID from '../../utils/createBookWithID';
import axios from 'axios'

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

    const handleAddRandomBookViaAPI = async () => {
        try {
            const res = await axios.get('http://localhost:4000/random-book')
            if (res?.data?.title && res?.data?.author) {
                dispatch(addBook(createBookWithID(res.data, 'API')))
            }

        } catch (error) {
            console.log(error);
        }


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
