import { useEffect, useState } from "react";
import { Book, NewBook } from "../../types";
import { getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";

import { booksCollectionRef, db } from "../../firebase";
import { BookItem } from "./BookItem";
import { BookForm } from "./BookForm";

type BookListProps = {};

export const BookList: React.FC<BookListProps> = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const getBooks = async () => {
            try {
                setLoading(true);
                const snapshot = await getDocs(booksCollectionRef);
                const books = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

                // TODO: check is there is a better way to type the books
                setBooks(books as Book[]);
                setLoading(false);
            } catch (err) {
                setError((err as Error).message);
            }
        }

        getBooks();
    }, []);

    const onEdit = (book: Book) => {
        console.log('Edit', book);
    }

    const onRemove = async (id: string) => {
        const docRef = doc(db, 'books', id);
        try {
            await deleteDoc(docRef);
        } catch (error) {
            console.error({ error });
        }
    }

    const onSubmit = async (newBook: NewBook) => {
        try {
            const response = await addDoc(booksCollectionRef, newBook);
            console.log({ response });
        } catch (error) {
            console.error({ error });
        }
    }

    return (
        <div className="border px-3 pb-3">
            {loading && <h2>Loading...</h2>}
            {error && <h2>Something went wrong...</h2>}
            <BookForm onSubmit={onSubmit} />
            <h2 className="m-3">Book List {books.length}</h2>
            <ul className="mt-3 space-y-3">
                {
                    books.map(book => (
                        <BookItem
                            key={book.id}
                            onEdit={onEdit}
                            onRemove={onRemove}
                            book={book} />
                    ))}
            </ul>
        </div>
    )
}

