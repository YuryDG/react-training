import { Book } from "../../types";

type BookItemProps = {
    book: Book;
    onEdit: (book: Book) => void;
    onRemove: (id: string) => void;
};

export const BookItem: React.FC<BookItemProps> = ({ book, onEdit, onRemove }) => {
    return (
        <li className="flex items-center justify-between border-t-4 border-teal-500 bg-teal-100 hover:bg-teal-200 p-3 rounded transition-colors duration-300">
            <div>
                <h2 className="font-bold">{book.title}</h2>
                <h5 className="text-sm text-left">{book.author}</h5>
            </div>
            <div>

                <button
                    onClick={() => onEdit(book)}
                    className=" bg-blue-500 text-white px-3 py-1 rounded mr-3">
                    Edit
                </button>

                <button
                    onClick={() => onRemove(book.id)}
                    className=" bg-blue-500 text-white px-3 py-1 rounded">
                    Remove
                </button>
            </div>
        </li>
    )
}