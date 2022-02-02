import { Link, Outlet } from "react-router-dom"

export const Home: React.FC = (props) => {
    return (
        <div className="container mx-auto">
            <nav className="bg-teal-500 p-6">
                <ul className="flex items-center justify-between">
                    <li>
                        <Link
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                            to="/posts">
                            Posts
                        </Link>
                    </li>
                </ul>
            </nav>

            <main className="p-3 border ">
                <h1 className="mb-3">Welcome to our blog</h1>
                <Outlet />
            </main>
        </div>
    )
}