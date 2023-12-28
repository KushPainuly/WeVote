import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><Link to="/home" className="nav-link px-2 text-body-secondary">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link px-2 text-body-secondary">About</Link></li>
                        <li className="nav-item"><Link to="/howitworks" className="nav-link px-2 text-body-secondary">How it Works</Link></li>
                        <li className="nav-item"><Link to="/helpline" className="nav-link px-2 text-body-secondary">Our Helplines</Link></li>
                    </ul>
                    <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
                </footer>
            </div>
        </>
    )
};

export default Footer;