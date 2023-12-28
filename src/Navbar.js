import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Projeto React</h1>
            <div className="links">
                <Link to="/">Inicio</Link>
                <Link to="/create">Criar Template </Link>

            </div>
        </nav>
    );
}
 
export default Navbar;