import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBook, fetchBook, isLoadingViaAPI } from '../../redux/slices/booksSlice'
import booksData from '../../data/books.json'
import './BookForm.css'
import createBookWithID from '../../utils/createBookWithID'
import { setError } from '../../redux/slices/errorSlice'
import { FaSpinner } from "react-icons/fa";


export default function BookForm() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const dispatch = useDispatch()
    const isLoading = useSelector(isLoadingViaAPI)


    const handleSubmit = (e) => {
        e.preventDefault()
        if (title && author) {

            const book = createBookWithID({ title, author }, 'manual')

            dispatch(addBook(book))
            setTitle('')
            setAuthor('')
        } else {
            dispatch(setError('You must fill title and author'))
        }
    }

    const handleAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * booksData.length)
        const randomBook = booksData[randomIndex]
        const randomBookWithId = createBookWithID(randomBook, 'random')
        dispatch(addBook(randomBookWithId))
    }

    const handleAddRandomBookViaAPI = async () => {
        dispatch(fetchBook('http://localhost:4000/random-book-delayed'));
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
                <button type='button' onClick={handleAddRandomBookViaAPI} disabled={isLoading}>{isLoading ? <FaSpinner className='spinner' /> : 'Add Random Book API'}</button>


            </form>

        </div>
    )
}
