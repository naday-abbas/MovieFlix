import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar bg-black justify-between items-center shadow-md w-full flex py-3 px-6 ">
            <div className="navbar-brand text-4xl object-center font-extrabold max-md:text-3xl">
                <Link to="/">MovieFlix</Link>
            </div>
            <div className="navbar-links flex ">
                <Link to="/" className="nav-link text-lg w-24 text-center py-2 px-1 rounded-sm transition hover:duration-200 hover:bg-white/20 max-md:p-2 ">Home</Link>
                <Link to="/Favorites" className="nav-link text-lg w-24 text-center py-2 px-1 rounded-sm transition hover:duration-200 hover:bg-white/20 max-md:p-2 ">Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar