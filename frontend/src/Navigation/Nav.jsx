import "./Nav.css"
const Nav = ({ handleInputChange, query }) => {
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
      <div className="profile-container">
        <a href="#">
          <i className="bi bi-heart nav-icons"></i>
        </a>
        <a href="">
           <i className="bi bi-cart4 nav-icons"></i>
        </a>
        <a href="">
          <i className="bi bi-person-fill-add nav-icons"></i>
        </a>
      </div>
    </nav> 

    
  );
};

export default Nav;
