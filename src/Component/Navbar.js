import votelogo from '../Images/letsvote.png';
import '../css/Vote.css';
const { Link, Outlet } = require("react-router-dom");


const Navbar = () => {
    
    return (
        <>
            <div className="menu container-fluid">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-white text-dark">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                            <img className="img-fluid" alt='' src={votelogo} style={{width: '60px', height: '60px'}} />
                        </Link>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/home" className="nav-link px-2 ">Home</Link></li>
                        <li><Link to="/howitworks" className="nav-link px-2">How it Works</Link></li>
                        <li><Link to="/about" className="nav-link px-2">About</Link></li>
                        <li><Link to="/helpline" className="nav-link px-2">Our Helplines</Link></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <Link to="/register">
                        <button type="button" className="btn btn-outline-primary me-2">Registration/Login</button></Link>
                    </div>
                </header>
            </div>
            <Outlet />
        </>

    )
};

export default Navbar;