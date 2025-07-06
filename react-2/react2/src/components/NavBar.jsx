import {Link} from "react-router-dom"

function NavBar() {
    return(
        <div className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/home">Home</Link>
                <Link to="/favourites">Favourites</Link>
            </div>
        </div>
    )
}

export default NavBar