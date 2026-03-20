import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-zinc-800 relative">
      <div>
        <Link to="/" className="text-xl font-bold text-yellow-400">
          Food
        </Link>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-zinc-100">
              Home
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="text-zinc-100">
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
