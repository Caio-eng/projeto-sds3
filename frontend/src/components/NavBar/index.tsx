import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <h4>Controle de Vendas</h4>
                </Link>
            </div>
        </nav>

    );
}

export default NavBar;
