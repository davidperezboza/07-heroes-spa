import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {
    const activar_link = ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`;

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true,
        });
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={activar_link} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={activar_link}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    
                    <NavLink 
                        className={activar_link}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        Fernando
                    </span>
                    <button className='nav-item nav-link btn'
                            onClick={onLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}