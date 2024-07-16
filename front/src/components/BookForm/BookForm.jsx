import { useState } from 'react'
import './BookForm.css'
import { useDispatch } from 'react-redux'
import { addBook } from '../../redux/books/actionCreators'

export default function BookForm() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        if (title && author) {

            const book = {
                title,
                author
            }

            dispatch(addBook(book))
            setTitle('')
            setAuthor('')
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


            </form>

        </div>
    )
}
