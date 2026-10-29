import { NavLink } from "react-router-dom";



function Navbar(){



    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink to="/databinding" className="nav-link">DataBinding</NavLink>
        <NavLink to="/products" className="nav-link">Search</NavLink>
        <NavLink to="/" className="nav-link" aria-current="page">
          Home
        </NavLink>
        <NavLink to="/uncontrolled" className="nav-link" >Form Uncontrolled</NavLink>
        <NavLink to="/controlled" className="nav-link" >Form Controlled</NavLink>
        <NavLink to="/product-list" className="nav-link" >Product List</NavLink>
        <NavLink to="/formik" className="nav-link" >Formik Form</NavLink>
        <NavLink to="/product" className="nav-link" >Product</NavLink>
        <NavLink to="/offer" className="nav-link" >Discount Offer</NavLink>

        
      </div>
    </div>
  </div>
</nav>

        
        </>
    )
}

export default Navbar;
