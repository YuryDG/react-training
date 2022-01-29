import { FormEvent, useRef } from "react";
import { NewBook } from "../../types";


type BookFormProps = {
    onSubmit: (newBook: NewBook) => void
};

export const BookForm: React.FC<BookFormProps> = ({ onSubmit }) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const authorRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (titleRef.current && authorRef.current) {
            const newBook: NewBook = {
                title: titleRef.current.value,
                author: authorRef.current.value
            }
            onSubmit(newBook);
        }
    }

    return (
        <div className="bg-white mt-3 pb-3 border rounded">
            <h2 className="m-3">Add new Book</h2>
            <form name="new-book-form" className="" onSubmit={handleSubmit}>
                <div className=" mb-4">
                    <label className="w-[100px] inline-block" htmlFor="title">Title</label>
                    <input className=" ml-3 rounded p-2 border" name="title" type="text" ref={titleRef} />
                </div>

                <div className=" mb-4">
                    <label className="w-[100px] inline-block" htmlFor="author">Author</label>
                    <input className=" ml-3 rounded p-2 border" name="author" type="text" ref={authorRef} />
                </div>

                <button type="submit" className=" bg-indigo-500 text-white px-3 py-1 rounded mr-3">
                    Create Book
                </button>
            </form>
        </div>
    )
}