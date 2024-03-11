import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light px-5">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">WEB розробка</Link>
                    <div className="collapse navbar-collapse" >
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/lab5table">Лаб 5 Таблиця</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;