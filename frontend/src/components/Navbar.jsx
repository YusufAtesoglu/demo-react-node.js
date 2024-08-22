import { HeartIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import "../pages/css/Nav.css"
const Navbar = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container flex flex-row-reverse gap-4">
        <a href="#">
          <HeartIcon className="w-6 h-6 text-gray-500" />
        </a>
        <a href="">
          <ShoppingCartIcon className="w-6 h-6 text-gray-500" />
        </a>
        <a href="">
          <UserIcon className="w-6 h-6 text-gray-500" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
