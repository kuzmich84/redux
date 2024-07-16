import { useState } from 'react'
import './BookForm.css'

export default function BookForm() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()


        if (title && author) {
            //dispatch
            console.log('Title: ', title, 'Athor: ', author);
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
